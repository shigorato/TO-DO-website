import {createElement} from '../framework/render.js';

function clearTrashButton() { 
  return (
    `<button class='clear-button'>Очистить</button>`
  );
}

export default class cleartrashBtnComponent {


  getTemplate() {
    
    return clearTrashButton();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}