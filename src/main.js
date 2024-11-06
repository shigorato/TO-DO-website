import HeaderComponent from './view/header-component.js';
import TasksBoardPresenter from '../presenter/tasks-board-presenter.js';
import { render, RenderPosition } from './framework/render.js';
import TasksModel from './model/task-model.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.task-form');
const boardContainer = document.querySelector('.task-board'); 

const tasksModel = new TasksModel(); // Создаем модель задач

// Создаем экземпляр TasksBoardPresenter и передаем модель и контейнер
const tasksBoardPresenter = new TasksBoardPresenter({
  taskModel: tasksModel,
  boardContainer: boardContainer,
  formContainer: formContainer,
});

// Рендеринг компонентов
render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);

tasksBoardPresenter.init();
