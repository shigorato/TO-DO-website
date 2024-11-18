import TasksListComponent from '../src/view/list-tasks-component.js';
import { statuses, UserAction, UpdateType } from '../src/const.js';
import ResetClearComponent from '../src/view/reset-button-component.js';
import LoadingViewComponent from '../src/view/loading-view-component.js';
import StubComponent from '../src/view/stub-component.js';
import TaskPresenter from './task-presenter.js';
import { render, RenderPosition } from '../src/framework/render.js';

export default class TasksBoardPresenter {
  #tasksModel;
  #boardContainer;
  #resetClearComponent;
  #loadingViewComponent = null;

  constructor({ taskModel, boardContainer }) {
    this.#tasksModel = taskModel;
    this.#boardContainer = boardContainer;
    this.#resetClearComponent = new ResetClearComponent({
      onClick: this.#handleClearTrash.bind(this),
    });
    this.#tasksModel.addObserver(this.#handleModelChange.bind(this));
  }

  async init() {
    await this.#withLoading(async () => {
      await this.#tasksModel.init();
      this.#renderBoard();
    });
  }

  async createTask() {
    const taskTitle = document.querySelector('#add-task').value;
    if (!taskTitle) {
      return;
    }
    await this.#withLoading(async () => {
      await this.#tasksModel.addTask(taskTitle);
      document.querySelector('#add-task').value = '';
      this.#renderBoard();
    });
  }

  async #handleTaskDrop(taskId, newStatus) {
    await this.#withLoading(async () => {
      await this.#tasksModel.updateTaskStatus(taskId, newStatus);
      this.#renderBoard();
    });
  }

  #handleClearTrash() {
    this.#withLoading(async () => {
      await this.#tasksModel.clearTrashTasks();
      this.#renderBoard();
    });
  }

  async #withLoading(action) {
    this.#showLoading();
    try {
      await this.#sleep(1000); // Искусственная задержка для имитации длительной загрузки
      await action(); // Основное действие
    } catch (err) {
      console.error('Ошибка при выполнении действия:', err);
    } finally {
      this.#hideLoading();
    }
  }

  #showLoading() {
    if (!this.#loadingViewComponent) {
      this.#loadingViewComponent = new LoadingViewComponent();
      render(this.#loadingViewComponent, this.#boardContainer, RenderPosition.BEFOREBEGIN);
    }
  }

  #hideLoading() {
    if (this.#loadingViewComponent) {
      this.#loadingViewComponent.element.remove();
      this.#loadingViewComponent = null;
    }
  }

  #sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  #renderBoard() {
    this.#clearBoard();
    statuses.forEach((status) => {
      this.#renderTasksList(status);
    });
  }

  #renderTasksList(status) {
    const tasksListComponent = new TasksListComponent({
      status,
      onTaskDrop: this.#handleTaskDrop.bind(this),
    });
    render(tasksListComponent, this.#boardContainer);

    const tasksFiltered = this.#tasksModel.tasks.filter((task) => task.status === status.status);

    if (tasksFiltered.length === 0 || tasksFiltered.every((task) => !task.title)) {
      const stubComponent = new StubComponent(null);
      render(stubComponent, tasksListComponent.element);
    } else {
      tasksFiltered.forEach((task) => {
        if (task.title) {
          const taskPresenter = new TaskPresenter({ task, container: tasksListComponent.element });
          taskPresenter.init();
        }
      });
    }

    if (status.status === 'trash') {
      render(this.#resetClearComponent, tasksListComponent.element);
    }
  }

  #handleModelChange(event, payload) {
    switch (event) {
      case UserAction.ADD_TASK:
      case UserAction.UPDATE_TASK:
      case UserAction.DELETE_TASK:
        this.#clearBoard();
        this.#renderBoard();
        if (this.#resetClearComponent) {
          this.#resetClearComponent.toggleDisabled(!this.#tasksModel.hasBasketTasks());
        }
        break;
    }
  }

  #clearBoard() {
    this.#boardContainer.innerHTML = '';
  }
}
