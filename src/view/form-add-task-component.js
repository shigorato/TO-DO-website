import { AbstractComponent } from '../framework/view/abstract-component.js';

function createFormAddTaskComponentTemplate() {
    return (
        `<form>
            <h2>Новая задача</h2>
            <input type="text" id="add-task" placeholder="Название задачи...">
            <button type="submit">+ Добавить </button>
        </form>`
    );
}

export default class FormAddTaskComponent extends AbstractComponent {
  #handleClick;

  constructor({ onClick }) {
    super();
    this.#handleClick = onClick || (() => {}); 
    this.element.addEventListener('submit', this.#clickHandler.bind(this));
  }

  get template() {
    return createFormAddTaskComponentTemplate();
  }

  #clickHandler(evt) {
    evt.preventDefault();
    this.#handleClick();
  }
}
