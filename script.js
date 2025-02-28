// Initiate / Create an epmty array element called tasks
let tasks = []

// Add an ON CLICK event listener to the "add task button" that calls a function
document.getElementById('addTaskBtn').addEventListener('click', function (){
// Get the value of the input box and store it in a variable called taskInput
let taskInput = document.getElementById('taskInput').value

//Check if taskInput has something in it
if(taskInput){
    // Add the new task to task array
    tasks.push(taskInput)

    // Clear the input field after adding a new task
    document.getElementById('taskInput').value = ''

    // Call the function to update the task list display
    displayTasks()
}
})

// A function to display tasks in the list
function displayTasks() {
    // Select the unordered list (taskList) in HTML
    let taskList = document.getElementById('taskList')

    // Clear the exisiting task list before updating it
    taskList.innerHTML = ''

    // Loop through each task in the array and create a list item
    tasks.forEach((task, index) => {
        // Create a new <li> element for each task
let li = document.createElement('li')

// Add CSS classes for styling
li.classList.add(
'list-group-item',
'd-flex',
'justify-content-between',
'align-items-center'
)

li.innerHTML = `${task} <button class='btn btn-success btn-sm' onclick='removeTask(${index})'> √ </button>`
//  Append the new task to the task list
taskList.appendChild(li)
})
}

// Function to remove a task from the list when the check button is clicked

function removeTask(index){
    // Remove the task at the given index from array
tasks.splice(index, 1)
// Call the function to update the task list display
displayTasks()
}

// Event listener for the "clear all" tasks
document.getElementById("clearTaskBtn").addEventListener('click', function (){
    // Empty the tasks array to remove all tasks
    tasks = [];
    // Call the function to update the task list display
    displayTasks();
});
