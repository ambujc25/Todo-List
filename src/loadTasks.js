import projectModule from './addProject';
import taskModule from './addTask';

const loadTasks = function(selectedProject){

    let allTasks = selectedProject.projectTasks;
    let taskContainer = document.querySelector('.listTasks');

    while(taskContainer.firstChild){
        taskContainer.removeChild(taskContainer.firstChild);
    }

    allTasks.forEach((task)=>{
        console.log(task.date);
        let fulltask = document.createElement('div');
        fulltask.classList.add('fullTask');

        let taskElement = document.createElement('li');
        taskElement.classList.add('task');
        let taskname = document.createElement('p');
        taskname.classList.add('taskName');
        taskname.innerText = task.name;
        let close = document.createElement('span');
        close.classList.add('close');
        close.classList.add('hidden');
        close.innerText = 'X';

        taskElement.appendChild(taskname);
        taskElement.appendChild(close);
        fulltask.appendChild(taskElement);

        let extraDetails = document.createElement('div');
        extraDetails.classList.add('fullTaskDesc');
        let leftSide = document.createElement('div');
        leftSide.classList.add('taskLeftSide');
        let description = document.createElement('div');
        description.classList.add('taskDesc');
        let taskHeading = document.createElement('h3');
        taskHeading.classList.add('taskHeading');
        taskHeading.innerText = "Description";
        let taskDescription = document.createElement('p');
        taskDescription.classList.add('taskDescText');
        taskDescription.classList.add('description');
        taskDescription.innerText = task.description;

        extraDetails.appendChild(leftSide);
        leftSide.appendChild(description);
        description.appendChild(taskHeading);
        description.appendChild(taskDescription);
        fulltask.appendChild(extraDetails);

        let date = document.createElement('div');
        date.classList.add('taskDesc');
        let dateHeading = document.createElement('h3');
        dateHeading.classList.add('taskHeading');
        dateHeading.innerText = "Date";
        let dateText = document.createElement('p');
        dateText.classList.add('taskDescText');
        dateText.innerText = task.date;

        leftSide.appendChild(date);
        date.appendChild(dateHeading);
        date.appendChild(dateText);

        let rightSide = document.createElement('div');
        rightSide.classList.add('taskRightSide');
        let time = document.createElement('div');
        time.classList.add('taskDesc');
        let timeHeading = document.createElement('h3');
        timeHeading.classList.add('taskHeading');
        timeHeading.innerText = 'Time';
        let timeText = document.createElement('p');
        timeText.classList.add('taskDescText');
        timeText.innerText = task.time;

        time.appendChild(timeHeading);
        time.appendChild(timeText);
        rightSide.appendChild(time);
        extraDetails.appendChild(rightSide);

        let priority = document.createElement('div');
        priority.classList.add('taskDesc');
        let priorityHeading = document.createElement('h3');
        priorityHeading.classList.add('taskHeading');
        priorityHeading.innerText = 'Priority';
        let priorityText = document.createElement('p');
        priorityText.classList.add('taskDescText');
        priorityText.innerText = task.priority;

        priority.appendChild(priorityHeading);
        priority.appendChild(priorityText);
        rightSide.appendChild(priority);

        taskContainer.appendChild(fulltask);
        taskElement.addEventListener('click',function(){
            extraDetails.classList.toggle('hidden');
            console.log('clicked');
        })
    })
}

export const addNewTask = function(){
    if(projectModule.getAllProjects().length == 0){
        alert("Need to add a project first");
    }else{
        let mainWindow = document.querySelector('.main-content');
        mainWindow.classList.add('hidden');

        let addTaskWindow = document.querySelector('.addTaskWindow');
        addTaskWindow.classList.remove('hidden');
    }
}

export const closeTask = function(){
    let mainWindow = document.querySelector('.main-content');
    let addTaskWindow = document.querySelector('.addTaskWindow');
    addTaskWindow.classList.add('hidden');
    mainWindow.classList.remove('hidden');
}

export const addFinalTask = function(project){

    let taskNameInput = document.querySelector('#taskNameInput');
    let taskDescInput = document.querySelector('#descriptionInput');
    let taskDateInput = document.querySelector('#dateInput');
    let taskTimeInput = document.querySelector('#timeInput');
    let taskPriorityInput;
    if(document.getElementById('high').checked){
        taskPriorityInput = 'High';
    }else if(document.getElementById('medium').checked){
        taskPriorityInput = 'medium';
    }else{
        taskPriorityInput = 'low';
    }

    let allProjects = document.querySelectorAll('.project');
    let allProjectsArray = projectModule.getAllProjects();
    let toSendProject;

    allProjects.forEach((project)=>{
        if(project.classList.contains('projectSelected')){
            let index = project.getAttribute('data-index');
            taskModule.addTask(allProjectsArray[index].projectTasks,taskNameInput.value,taskDescInput.value,taskDateInput.value,taskTimeInput.value,taskPriorityInput);
            toSendProject = allProjectsArray[index];
        }
    })

    loadTasks(toSendProject);
    closeTask();

    taskNameInput.value = '';
    taskDescInput.value = '';
    taskDateInput.value = '';
    taskTimeInput.value = '';
    taskPriorityInput = '';

}


export default loadTasks;