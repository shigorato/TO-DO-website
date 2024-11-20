const END_POINT = `https://6718ae157fc4c5ff8f4a89f7.mockapi.io`;
import HeaderComponent from './view/header-component.js';
import TasksBoardPresenter from '../presenter/tasks-board-presenter.js';
import TasksModel from './model/task-model.js';
import TasksApiService from './tasks-api-service.js';
import FormAddTaskComponent from '../src/view/form-add-task-component.js';
import { render, RenderPosition } from './framework/render.js';


const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.task-form');
const boardContainer = document.querySelector('.task-board'); 

const tasksModel = new TasksModel({
  tasksApiService: new TasksApiService(END_POINT)
}); 

const formAddTaskComponent = new FormAddTaskComponent ({
  onClick:handleNewTaskButtonClick
})


const tasksBoardPresenter = new TasksBoardPresenter({
  taskModel: tasksModel,
  boardContainer: boardContainer,
});

function handleNewTaskButtonClick(){
  tasksBoardPresenter.createTask();
}

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(formAddTaskComponent, formContainer);

tasksBoardPresenter.init();
