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

import {createElement} from '../framework/render.js';

function createListTaskComponentTemplate({title, status}) { 
  return (
    `<div class="task-column ${status}">
      <h3>${title.toUpperCase()}</h3>
    </div>`
  );
}

export default class TasksListComponent {
  
  constructor({status}) {
    this.status = status;
  }

  getTemplate() {
    
    return createListTaskComponentTemplate(this.status);
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
