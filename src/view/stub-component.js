 import { AbstractComponent } from "../framework/view/abstract-component.js";

      function stabCreateComponent(task) {
        if (!task) {
          return `
            <div class="stub">
             <p> Перетащите карточку</p>
            </div>`;
        }
      }
      
      export default class StubComponent extends AbstractComponent {
        constructor(tasks) {
          super();
          this.tasks = tasks;
        }
      
        get template() {
          return stabCreateComponent(this.tasks);
        }
      }
      

    
      