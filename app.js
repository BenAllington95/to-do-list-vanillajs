const inputVal = document.getElementById("input-el")
let tasksArray = []

document.getElementById("input-btn").addEventListener("click", function() {
    if (inputVal.value) {
        addToTasksArray(inputVal.value)
        render()
    }
})

document.addEventListener("click", function(e) {
    if (e.target.dataset.delete) {
        removeTask(e.target.dataset.delete)
        render()
    } else if (e.target.dataset.complete) {
        completeTask(e.target.dataset.complete)
        render()
    }
})

function addToTasksArray(input) {
    tasksArray.unshift({
        input: input,
        isComplete: false})
    inputVal.value = ""
}

function removeTask(e) {
    const index = tasksArray.findIndex(function(task){
        return task === e;
    })
    tasksArray.splice(index,1)
}

function completeTask(e){
    const index = tasksArray.findIndex(function(task){
        return task.input === e;
    })  
    tasksArray[index].isComplete = !tasksArray[index].isComplete
} 

function generateHtmlString() {
    let string = "" 
    tasksArray.forEach(function(task) {
        string += `
        <div id="${task.input}"class="task ${task.isComplete ? "completed" : ""}">
            <div class="task-desc">
                <p>${task.input}</p>
            </div>
            <div class="icons">
                <i id="${task.input}"data-complete="${task.input}"class="fa-solid fa-square-check"></i>
                <i data-delete="${task.input}"class="fa-solid fa-trash"></i>
            </div>
        </div>`
    })
    return string
}


function render() {
    document.getElementById('tasks').innerHTML = generateHtmlString()
}