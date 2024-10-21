import { AbstractComponent } from '../framework/view/abstract-component.js';
function createFormAddTaskComponentTemplate() {
    return (
        `<form >
        <h2>Новая задача</h2>
        <input type="text" placeholder="Название задачи...">
        <button>+ Добавить</button>
    </form>`
      );
}


export default class FormAddTaskComponent extends AbstractComponent {
  constructor() {
    super();
  }
  get template() {
    return createFormAddTaskComponentTemplate();
  }


}
