import {createElement} from '../framework/render.js';


function createAddTaskComponentTemplate() {
    return (
        `
        <div class="task-column backlog">
        <h3>Название блока</h3>
        <ul>
            <li>Название первой задачи</li>
            <li>Название первой задачи</li>
            <li>Название первой задачи</li>
        </ul>
      </div>`
      );

}


export default class taskBacklogComponent {
  
  getTemplate() {
    return createAddTaskComponentTemplate();
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
