import loadProjects,{addProject,closeProject,addFinalProject} from './loadProjects';
import loadTasks, {addNewTask,closeTask,addFinalTask} from './loadTasks';

loadProjects();

let addProjectButton = document.querySelector('.addProjectButton');
addProjectButton.addEventListener('click',addProject);

let addButton = document.querySelector('.projectSubmit');
addButton.addEventListener('click',addFinalProject);

let closeProjectWindow = document.querySelector('.closeProject');
closeProjectWindow.addEventListener('click',closeProject);

let taskAddButton = document.querySelector('.addTaskButton');
taskAddButton.addEventListener('click',addNewTask);

let closeTaskWindow = document.querySelector('.closeTask');
closeTaskWindow.addEventListener('click',closeTask); 

let taskFinalAddButton = document.querySelector('.taskSubmit');
taskFinalAddButton.addEventListener('click',addFinalTask);