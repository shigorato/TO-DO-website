
/* function stabCreateComponent(task) {
    if(task === null){
        return (
            `<div>Перетащите карточку</div>`
        );
    }
    return task;
    
}

export default class Stab {
    constructor(tasks){
        this.tasks = tasks;
    }

    get template() {
        return stabCreateComponent(this.tasks);
    }
} */

/* import { AbstractComponent } from "../framework/view/abstract-component";

    function stabCreateComponent(task) {
      if (!task) {
        console.log("GGNNG");
        return (`
          <div class="stub">
            Перетащите карточку
          </div> `);
      } 
    }
    
    export default class StubComponent extends AbstractComponent{
      constructor(tasks) {
        super();
        this.tasks = tasks;
        this._element = null;
      }
    
      get template() {
        return stabCreateComponent(this.tasks);
      }
    
    } */


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
      

    
      