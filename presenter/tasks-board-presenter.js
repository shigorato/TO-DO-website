import TasksListComponent from '../src/view/list-tasks-component.js';
import TaskComponent from '../src/view/task-component.js';
import ConstElements from '../src/const.js';
import TrashBtnClear from '../src/view/trash-clear-component.js';
import StubComponent from '../src/view/stub-component.js';
import { render } from '../src/framework/render.js';

export default class TasksBoardPresenter {

  #taskModel;
  #boardContainer;
  #boardTasks;

  constructor({ taskModel, boardContainer }) {
    this.#taskModel = taskModel;
    this.#boardContainer = boardContainer;
  }

  init() {
    this.#renderBoard();
  }

  #renderBoard() {
    // Получаем все задачи из модели
    this.#boardTasks = [...this.#taskModel.tasks];
    console.log('Все задачи:', this.#boardTasks); // Лог всех задач

    // Проходим по каждому статусу и рендерим список задач для него
    ConstElements.forEach((status) => {
      const tasksListComponent = new TasksListComponent({ status });
      render(tasksListComponent, this.#boardContainer);

      // Фильтруем задачи по статусу
      const tasksFiltered = this.#boardTasks.filter(task => task.status === status.status);
      console.log(`Задачи для статуса ${status.status}:`, tasksFiltered); // Лог задач для конкретного статуса

      // Если задач нет или они без title, рендерим заглушку
      if (tasksFiltered.length === 0 || tasksFiltered.every(task => !task.title)) {
        console.log(`Отображение заглушки для статуса ${status.status}`); // Лог для заглушки
        const stubComponent = new StubComponent(null);
        render(stubComponent, tasksListComponent.element);
      } else {
        // Иначе рендерим задачи
        tasksFiltered.forEach((task) => {
          if (task.title) {
               console.log(`Рендер задачи ${task.id} с title ${task.title}`);
               this.#renderTask(task, tasksListComponent);
           }
        });
      }

      // Рендерим кнопку очистки для корзины
      if (status.status === 'trash') {
        console.log('Рендер кнопки очистки для корзины');
        const trashBtnClear = new TrashBtnClear();
        render(trashBtnClear, tasksListComponent.element);
      }
    });
  }

  #renderTask(task, container) {
    console.log(`Рендеринг задачи ${task.id} в контейнере ${container}`);
    const taskComponent = new TaskComponent({ task });
    render(taskComponent, container.element);
  }
}


  /*   import TasksListComponent from '../src/view/list-tasks-component.js';
    import TaskComponent from '../src/view/task-component.js';
    import ConstElements from '../src/const.js';
    import TrashBtnClear from '../src/view/trash-clear-component.js';
    import StubComponent from '../src/view/stub-component.js';
    import { render } from '../src/framework/render.js';
    
    export default class TasksBoardPresenter {
    
      #taskModel;
      #boardContainer;
      #boardTasks;
    
      constructor({ taskModel, boardContainer }) {
        this.#taskModel = taskModel;
        this.#boardContainer = boardContainer;
      }
    
      init() {
        this.#renderBoard();
      }
    
      #renderBoard() {
        // Получаем все задачи из модели
        this.#boardTasks = [...this.#taskModel.tasks];
        console.log('Все задачи:', this.#boardTasks); // Лог всех задач
    
        // Проходим по каждому статусу и рендерим список задач для него
        ConstElements.forEach((status) => {
          const tasksListComponent = new TasksListComponent({ status });
          render(tasksListComponent, this.#boardContainer);
    
          // Фильтруем задачи по статусу
          const tasksFiltered = this.#boardTasks.filter(task => task.status === status.status);
          console.log(`Задачи для статуса ${status.status}:`, tasksFiltered); // Лог задач для конкретного статуса
          console.log(`Условие заглушки ${tasksFiltered.length === 0 || tasksFiltered.every(task => !task.title)}`)
          // Если задач нет, или они без title, рендерим заглушку
          if (tasksFiltered.length === 0 || tasksFiltered.every(task => !task.title)) {
            console.log(`Отображение заглушки для статуса ${status.status}`); // Лог для заглушки
            const stubComponent = new StubComponent(null);
            render(stubComponent.element, tasksListComponent.element);
          } else {
            // Иначе рендерим задачи
            tasksFiltered.forEach((task) => {
              if (tasksFiltred.every(task => !task.title)) {
                const stubComponent = new StubComponent(null);
                console.log(`Отображение заглушки для статуса ${status.status}`);
                render(stubComponent, tasksListComponent.element);
              } else {
                // Если title есть, рендерим задачу
                console.log(`Рендер задачи ${task.id} с title ${task.title}`);
                this.#renderTask(task, tasksListComponent);
              }
            });
          }
    
          // Рендерим кнопку очистки для корзины
          if (status.status === 'trash') {
            console.log('Рендер кнопки очистки для корзины');
            const trashBtnClear = new TrashBtnClear();
            render(trashBtnClear, tasksListComponent.element);
          }
        });
      }
    
      #renderTask(task, container) {
        console.log(`Рендеринг задачи ${task.id} в контейнере ${container}`);
        const taskComponent = new TaskComponent({ task });
        render(taskComponent, container.element); 
      }
    }*/
    



    
  

 


 