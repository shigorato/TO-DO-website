import { createElement } from '../framework/render.js';

function createTaskComponentTemplate({ status, title }) { 
  return (
    `<div class='taskboard__item task task--${status}'>
       <div class="task__body">
         <p class="task--view">${title}</p>
       </div>
       <button aria-label="Изменить" class="task__edit" type="button">
       <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 297 297" style="enable-background:new 0 0 297 297;" xml:space="preserve"><g><g><path d="M287.55,260.218H149.47l131.846-131.846c10.437-10.437,10.437-27.419,0-37.856l-64.808-64.808 c-10.437-10.437-27.419-10.436-37.856,0L11.788,192.573c-5.055,5.056-7.84,11.778-7.84,18.928c0,7.15,2.785,13.872,7.84,18.928 l29.79,29.79H9.45c-5.218,0-9.45,4.231-9.45,9.45c0,5.219,4.231,9.45,9.45,9.45h278.1c5.218,0,9.45-4.231,9.45-9.45 C297,264.45,292.769,260.218,287.55,260.218z M192.016,39.072c3.069-3.069,8.063-3.067,11.128,0l64.808,64.808 c1.487,1.486,2.305,3.462,2.305,5.565c0,2.101-0.819,4.078-2.305,5.564L159.309,223.651l-75.936-75.936L192.016,39.072z M122.742,260.219H68.306l-43.154-43.155c-3.068-3.067-3.068-8.06,0-11.127l44.858-44.858l75.936,75.936L122.742,260.219z" fill="#000000" style="fill: rgb(143, 143, 143);"></path></g></g></svg>
       </button>
     </div>`
  );
}

export default class TaskComponent { // Исправляем название класса
  constructor({ task }) {
    this.task = task;
  }

  getTemplate() {
    return createTaskComponentTemplate(this.task); // Передаем task в функцию шаблона
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
