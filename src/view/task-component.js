import { AbstractComponent } from '../framework/view/abstract-component.js';

function createTaskComponentTemplate({ status, title }) { 
  return (
    `<div class='taskboard__item task task--${status}'>
       <div class="task__body">
         <p class="task--view">${title}</p>
       </div>
     </div>`
  );
}

export default class TaskComponent extends AbstractComponent { // 
  constructor({ task }) {
    super();
    this.task = task;
    this.#afterCreateElement();
  }

  get template() {
    return createTaskComponentTemplate(this.task); 
  }

  #afterCreateElement(){
    this.#makeTaskDraggable();
  }

  #makeTaskDraggable() {
    this.element.setAttribute('draggable', true);

    this.element.addEventListener('dragstart', (event)=>{
      event.dataTransfer.setData('text/plain', this.task.id)
    })
  }



}
