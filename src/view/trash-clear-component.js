import { AbstractComponent } from '../framework/view/abstract-component.js';

function clearTrashButton() { 
  return (
    `<button class='clear-button'>Очистить</button>`
  );
}

export default class cleartrashBtnComponent  extends AbstractComponent{
  constructor() {
    super();
  }

  get template() {
    
    return clearTrashButton();
  }

}