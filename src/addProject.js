const projectObj = function(name){
    let projectTasks = [];
    return { name,projectTasks };
}

const projectModule = (function(){
    let allProjects = [];

    const addProject = function(name){
        allProjects.push(projectObj(name));
    }

    const removeProject = function(index){
        allProjects.splice(index,1);
    }

    const getAllProjects = function(){
        return allProjects;
    }

    const getOneProject = function(index){
        return allProjects[index];
    }

    return {addProject, removeProject, getAllProjects, getOneProject};

})();

export default projectModule;