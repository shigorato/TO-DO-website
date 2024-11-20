import Observable from '../framework/observable.js';
import { generateId } from '../utils.js';
import { statuses, UserAction, UpdateType } from '../const.js';


 export default class TaskModel extends Observable {
  #boardtasks = [];
  #tasksApiService = null;

  constructor({tasksApiService}) {
    super();
    this.#tasksApiService = tasksApiService;
  }

  async init() {
    try {
      const tasks = await this.#tasksApiService.tasks;
      this.#boardtasks = tasks;
    } catch(err) {
      this.#boardtasks = [];
    }
    this._notify(UpdateType.INIT);
  }
 

  get tasks() {
    return this.#boardtasks;
  }

  async addTask(title) {
    const newTask = {
      id: generateId(),
      title: title,
      status: 'backlog',
    };
    try {
      const createdTask = await this.#tasksApiService.addTask(newTask);
      this.#boardtasks.push(createdTask);
      this._notify(UserAction.ADD_TASK, createdTask);
      return createdTask;
    } catch (err) {
      console.log("Ошибка при добавлении задачи на сервере:", err);
      throw err;
    }
  }

  async updateTaskStatus(taskId, newStatus) {
    const task = this.#boardtasks.find(task => task.id === taskId);
      if(task) {
        task.status = newStatus;
  
        try {
          const updatedTask = await this.#tasksApiService.updateTask(task);
          Object.assign(task, updatedTask);
          this._notify(UserAction.UPDATE_TASK, task);
        } catch(err) {
          console.error("Ошибка при обновлении статуса задачи на сервер:", err);
          task.status = previousStatus;
          throw err;
        }
      }
    }

    hasBasketTasks() {
      return this.tasks.some(task => task.status === 'trash');
    }

    deleteTask(taskId) {
      this.#boardtasks = this.#boardtasks.filter(task => task.id !== taskId);
      this._notify(UserAction.DELETE_TASK, {id:taskId});
    }

    async clearTrashTasks() {
      const basketTasks = this.#boardtasks.filter(task => task.status === 'trash');
      try {
       await Promise.all(basketTasks.map(task => this.#tasksApiService.deleteTask(task.id)));
       this.#boardtasks = this.#boardtasks.filter(task => task.status !== 'trash');
       this._notify(UserAction.DELETE_TASK, {status: 'trash'});
        }catch (err) {
          console.log('Ошибка при удалении задач из корзины на сервере:', err);
          throw err;
        }
    } 

 }
