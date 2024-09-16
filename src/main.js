import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js'
import taskBacklogComponent from './view/list-tasks-component.js'
import {render, RenderPosition} from './framework/render.js';



const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.task-form');
const taskBacklogContainer = document.querySelector('.task-board');



render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), formContainer);
for(let i = 0; i < 4; i++) {
render(new taskBacklogComponent(), taskBacklogContainer,RenderPosition.AFTERBEGIN);
}




