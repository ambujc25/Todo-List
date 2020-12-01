const taskObj = function(name,description,taskDate,taskTime,priority){
    return {name,description,date: taskDate,time: taskTime,priority};
}

const taskModule = (function(){

    const addTask = function(allTasks,name,description,taskDate,taskTime,priority){
        allTasks.push(taskObj(name,description,taskDate,taskTime,priority));
    }  

    const removeTask = function(allTasks,index){
        allTasks.splice(index,1);
    }

    return {addTask, removeTask};

})();

export default taskModule;