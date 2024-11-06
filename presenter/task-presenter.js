import TaskComponent from "../src/view/task-component.js";
import { render } from "../src/framework/render.js";

export default class TaskPresenter {
  #task;
  #container;

  constructor({ task, container }) {
    this.#task = task;
    this.#container = container;
  }

  init() {
    this.#createTask();
  }

  #createTask() {
    const taskComponent = new TaskComponent({
        task: this.#task,
    });

    render(taskComponent, this.#container);
  }
}
