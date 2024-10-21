/* import {createElement} from '../framework/render.js';


function createListTaskComponentTemplate() {
    return (
        `
        <div class="task-column">
        <h3></h3>
        
      </div>`
      );

}


export default class TasksListComponent {
  
  getTemplate() {
    return createListTaskComponentTemplate();
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
 */

//import {createElement} from '../framework/render.js';
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
