import { AbstractComponent } from '../framework/view/abstract-component.js';

function clearTrashButton() { 
  return (
    `<button class='clear-button'>Очистить</button>`
  );
}

export default class cleartrashBtnComponent  extends AbstractComponent{
  #handleClick;
  constructor({onClick}) {
    super();
    this.#handleClick = onClick || (() => {});
    this.onClick = onClick;
    this.element.addEventListener('click', this.#clickHandler.bind(this));
  }

  get template() {
    
    return clearTrashButton();
  }

  #clickHandler(evt){
    evt.preventDefault();
    this.#handleClick();
  }

  toggleDisabled(isDisabled) {
    this.element.disabled = isDisabled;
  }


  resetClearButton() {
    this.element.background = '';
  }

}