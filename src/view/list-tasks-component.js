import { AbstractComponent } from '../framework/view/abstract-component.js';

function createListTaskComponentTemplate({title, status}) { 
  return (
    `<div class="task-column ${status}">
      <h3>${title.toUpperCase()}</h3>
    </div>`
  );
}

export default class TasksListComponent extends AbstractComponent {
  
  constructor({status, onTaskDrop}) {
    super();
    this.status = status;
    this.#setDropHandler(onTaskDrop);
  }

  get template() {
    
    return createListTaskComponentTemplate(this.status);
  }

  #setDropHandler(onTaskDrop){
    const container = this.element;

    container.addEventListener('dragover',(event)=>{
      event.preventDefault();
    });
  

    container.addEventListener('drop',(event)=>{
      event.preventDefault();
      const taskId = event.dataTransfer.getData('text/plain');
      onTaskDrop(taskId, this.status.status);
    })
}
  
}
