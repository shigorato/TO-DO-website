import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TasksBoardPresenter from '../presenter/tasks-board-presenter.js';
import { render, RenderPosition } from './framework/render.js';
import TasksModel from './model/task-model.js'; // Импортируем модель задач

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.task-form');
const boardContainer = document.querySelector('.task-board'); // Контейнер доски задач

const tasksModel = new TasksModel(); // Создаем модель задач

// Рендеринг компонентов
render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), formContainer);

// Создаем экземпляр TasksBoardPresenter и передаем модель и контейнер
const tasksBoardPresenter = new TasksBoardPresenter({
  taskModel: tasksModel,
  boardContainer: boardContainer,
});

tasksBoardPresenter.init();
