const clickTask = function(){
    console.log("clicked");

    let taskDesc = document.querySelector('.fullTaskDesc');
    taskDesc.classList.toggle('hidden');
}

export default clickTask;