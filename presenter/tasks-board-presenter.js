import TasksListComponent from '../src/view/list-tasks-component.js';
import TaskAddFormComponent from '../src/view/form-add-task-component.js';
import ConstElements from '../src/const.js';
import TrashBtnClear from '../src/view/reset-button-component.js';
import StubComponent from '../src/view/stub-component.js';
import TaskPresenter from './task-presenter.js';
import { render } from '../src/framework/render.js';

export default class TasksBoardPresenter {
  #tasksModel;
  #boardContainer;
  #formContainer;
  #taskAddFormComponent;
  #trashClearComponent;

  constructor({ taskModel, boardContainer, formContainer }) {
    this.#tasksModel = taskModel;
    this.#boardContainer = boardContainer;
    this.#formContainer = formContainer;
    this.#taskAddFormComponent = new TaskAddFormComponent({
      onClick: this.#handleAddTask.bind(this),
    });
    this.#trashClearComponent = new TrashBtnClear({
      onClick: this.#handleClearTrash.bind(this),
    });
    this.#tasksModel.addObserver(this.#handleModelChange.bind(this));
  }

  init() {
    this.#renderTaskForm();
    this.#renderBoard();
  }

  #renderTaskForm() {
    render(this.#taskAddFormComponent, this.#formContainer);
  }

  #handleAddTask(title) {
    if (title) { // Проверяем, что название не пустое
      
      this.#tasksModel.addTask(title);
    }
  }
  
  #renderBoard() {
    this.#clearBoard();
    ConstElements.forEach((status) => {
      this.#renderTasksList(status);
    });
  }

  #renderTasksList(status) {
    const tasksListComponent = new TasksListComponent({ status });
    render(tasksListComponent, this.#boardContainer);

    const tasksFiltered = this.#tasksModel.tasks.filter((task) => task.status === status.status);
    
    if (tasksFiltered.length === 0 || tasksFiltered.every(task => !task.title)) {
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

    if (status.status === 'trash' ) {
      render(this.#trashClearComponent, tasksListComponent.element); 
    }
    
  }


  #handleClearTrash() {
    this.#tasksModel.clearTrash('trash');
    this.#renderBoard();
    this.#trashClearComponent.disabled();
  }
  

  #handleModelChange() {
    this.#renderBoard();
  }

  #clearBoard() {
    this.#boardContainer.innerHTML = '';
  }
}
