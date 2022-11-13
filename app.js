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
        // toggleCompleteButton(e.target.dataset.complete)
        document.getElementById(e.target.dataset.complete).classList.add('completed')
    }
})


// function toggleCompleteButton (e) {
    
//     const index = tasksArray.findIndex(function(task){
//         return task === e;
//     })
//     const taskEls = document.getElementsByClassName('task')
//     taskEls[index].classList.add('completed')
// }


function addToTasksArray(input) {
    tasksArray.unshift(input)
    inputVal.value = ""
}

function removeTask(e) {
    const index = tasksArray.findIndex(function(task){
        return task === e;
    })
    tasksArray.splice(index,1)
}

function generateHtmlString() {
    let string = "" 

    tasksArray.forEach(function(task) {
        string += `
        <div id="${task}"class="task">
            <div class="task-desc">
                <p>${task}</p>
            </div>
            <div class="icons">
                <i id="${task}"data-complete="${task}"class="fa-solid fa-square-check"></i>
                <i data-delete="${task}"class="fa-solid fa-trash"></i>
            </div>
        </div>`
    })
    return string
}


function render() {
    document.getElementById('tasks').innerHTML = generateHtmlString()
}