import { tasks } from '../mock/task.js';
import { generateUniqueId } from './utils.js';

export default class TaskModel {
  #observers = [];
  #boardtasks = tasks;

  get tasks() {
    return this.#boardtasks;
  }

  addTask(title) {
    const newTask = {
      id: generateUniqueId(),
      title: title,
      status: 'backlog',
    };
    this.#boardtasks.push(newTask);
    this._notifyObservers();
  }

  clearTrash(status){
    this.#boardtasks = this.#boardtasks.filter(task => task.status !== status);
    this._notifyObservers();
  }

  updateTaskStatus(taskId, newStatus) {
    const task = this.#boardtasks.find(task => task.id === taskId);

    if(task) {
      task.status = newStatus;
      this._notifyObservers();
    }
  }

  addObserver(observer) {
    this.#observers.push(observer);
  }

  _notifyObservers() {
    this.#observers.forEach((observer) => observer());
  }


}
