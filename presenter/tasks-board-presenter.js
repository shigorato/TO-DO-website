import TasksListComponent from '../src/view/list-tasks-component.js'
import TaskComponent from '../src/view/task-component.js';
import ConstElements from '../src/const.js';
import TrashBtnClear from '../src/view/trash-clear-component.js'
import { render } from '../src/framework/render.js';


  export default class TasksBoardPresenter {
    constructor({taskModel, boardContainer}) {
      this.taskModel = taskModel;
      this.boardContainer = boardContainer;
    }

    init() {
      const boardTasks = [...this.taskModel.getTasks()];
     

      ConstElements.forEach((status)=> {
        const tasksListComponent = new TasksListComponent({status});
        render(tasksListComponent,this.boardContainer);
        
      
        const tasksFiltred = boardTasks.filter(task => task.status === status.status
        )
        console.log(tasksFiltred);
              tasksFiltred.forEach((task) =>{
                 
                 const taskComponent = new TaskComponent({task});
                        
                render(taskComponent, tasksListComponent.getElement());
            
              });

            const trashBtnClear = new TrashBtnClear();
              if(status.status === 'trash'){
                render(trashBtnClear, tasksListComponent.getElement());
                
             } 
      });

    }
  }

 


  /* export default class TasksBoardPresenter {
  
  constructor({ taskModel, boardContainer }) {
    this.tasksModel = taskModel;
    this.boardContainer = boardContainer;
  }

  init() {
    this.boardTasks = [...this.tasksModel.getTasks()];

    ConstElements.forEach(({status, title}) => {
      const tasksListComponent = new TasksListComponent({ title });
      render(tasksListComponent, this.boardContainer);

     
      const filteredTasks = this.boardTasks.filter(task => task.status === status);

    
      filteredTasks.forEach(task => {
        const taskComponent = new TaskComponent({ task });
        render(taskComponent, tasksListComponent.getElement());
      });
    });
  }
} */


  /* import TasksListComponent from '../src/view/list-tasks-component.js';
import TaskComponent from '../src/view/task-component.js';
import { render } from '../src/framework/render.js';

export default class TasksBoardPresenter {
  
  constructor({ taskModel, boardContainer }) {
    this.tasksModel = taskModel;
    this.boardContainer = boardContainer;
    this.tasksBoardComponent = new TasksListComponent(); // Предполагается, что tasksBoardComponent — это список задач.
  }

  init() {
    this.boardTasks = [...this.tasksModel.getTasks()]; // Исправлена опечатка в методе getTasks
    render(this.tasksBoardComponent, this.boardContainer);

    for (let i = 0; i < 4; i++) {
      const tasksListComponent = new TasksListComponent();
      render(tasksListComponent, this.tasksBoardComponent.getElement());

      for (let j = 0; j < this .boardTasks.length; j++) {
        const taskComponent = new TaskComponent({ task: this.boardTasks[j] });
        render(taskComponent, tasksListComponent.getElement());
      }
    }
   
    } 
  }

 */