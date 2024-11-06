import { AbstractComponent } from '../framework/view/abstract-component.js';

function createListTaskComponentTemplate({title, status}) { 
  return (
    `<div class="task-column ${status}">
      <h3>${title.toUpperCase()}</h3>
    </div>`
  );
}

export default class TasksListComponent extends AbstractComponent {
  
  constructor({status}) {
    super();
    this.status = status;
  }

  get template() {
    
    return createListTaskComponentTemplate(this.status);
  }
 
  
}
