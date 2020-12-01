import projectModule from './addProject';
import loadTasks from './loadTasks';

const loadProjects = function(){
    let projects = projectModule.getAllProjects();

    let projectList = document.querySelector('.listProjects');
    while(projectList.firstChild){
        projectList.removeChild(projectList.firstChild);
    }

    projects.forEach((project,index)=>{
        let newProject = document.createElement('li');
        newProject.classList.add('project');
        newProject.setAttribute('data-index',index);

        newProject.addEventListener('click',function(){
            for(let i = 0; i < projects.length; i++){
                let proj = document.querySelector(`.project[data-index="${i}"]`)
                proj.classList.remove('projectSelected');
            }
            newProject.classList.add('projectSelected');
            //load Tasks of the project
            loadTasks(project);
        })

        if(index==0){
            newProject.classList.add('projectSelected');
        }

        newProject.innerText = project.name;

        projectList.appendChild(newProject);
    })
    
}

export const addProject = function(){
    let mainWindow = document.querySelector('.main-content');
    mainWindow.classList.add('hidden');

    let addProjectWindow = document.querySelector('.addProjectWindow');
    addProjectWindow.classList.remove('hidden');
    
}

export const addFinalProject = function(){
    let projectName = document.querySelector('#nameInput');
    projectModule.addProject(projectName.value);
    projectName.value = '';
    loadProjects();
    closeProject();
}

export const closeProject = function(){
    let mainWindow = document.querySelector('.main-content');
    let addProjectWindow = document.querySelector('.addProjectWindow');
    addProjectWindow.classList.add('hidden');
    mainWindow.classList.remove('hidden');
}

export default loadProjects;