
(function() {   //Immidiate invoke function using iife cannot access anything variable or function inside this cotext
    let tasks = [];
    const tasksList = document.getElementById('list');
    const addTaskInput = document.getElementById('add');
    const tasksCounter = document.getElementById('tasks-counter');

async function fetchTodos(){
    //to fetch api use fetch(it is a function) and it requiers to pass url 

    //GET request 
    // fetch('https://jsonplaceholder.typicode.com/todos') //if we are making get request just pass url
    // .then(function(response){
        
    //     return response.json();
    // }).then(function(data){
    //   tasks = data.slice(0,10);
    //   renderList();
    // })
    // .catch(function(error){
    //     console.log('error',error);
    // })

    //using async and await
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks = data.slice(0,10);
       renderList();
    }catch(error){
        console.log(error);
    }
    
}

function addTaskToDOM(task){
    const li = document.createElement('li');

    li.innerHTML = `
         
             <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} 
             class="custom-checkbox">
             <label for="${task.id}">${task.title}</label>
             <img src="icons8-delete-48.png" class="delete" data-id="${task.id}" /> 
    `;
    tasksList.append(li);
}
function renderList (){
    tasksList.innerHTML='';

    for(let i=0; i<tasks.length; i++){
        addTaskToDOM(tasks[i]);
    }
    tasksCounter.innerHTML = tasks.length;
}

function toggleTask(taskId){
    const task = tasks.filter(function (task){
        return task.id === Number(taskId)
    });
    if(task.length > 0){
        const currentTask = task[0];
        currentTask.completed = !currentTask.completed;
        renderList();
        showNotification("Task toggled successfully");
        return;
    }
    showNotification("Could not toggle the task");
} 

function deleteTask(taskId){
    const newTasks = tasks.filter(function(task){
        return task.id !== Number(taskId)
    })
    tasks = newTasks;
    renderList();
    showNotification("Task deleted successfully");
}

function addTask(task){
    if(task){
        //to create post request(to post data to server)
    //     fetch('https://jsonplaceholder.typicode.com/todos',{
    //         method:'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify(task),
    //     }).then(function(response){
    //         return response.JSON();
    //     }).then(function(data){
    //         console.log(data);
    //         tasks.push(task);
    //          renderList();
    //          showNotification("Task added successfully ");
    // })
    // .catch(function(error){
    //     console.log('error',error);
    // })

        tasks.push(task);
        renderList();
        showNotification("Task added successfully ");
        return;
    }
    showNotification("Task can not be added");
}   

function showNotification(text){
    alert(text);
}

function handleInputKeypress(e){
    if(e.key === 'Enter'){
        const text = e.target.value;
        console.log('text',text);

        if(!text){
            showNotification('Task text cant not be empty');
            return;
        }
        const task = {
            title:text,
            id:Date.now(),
            completed:false
        }
        e.target.value = '';
        addTask(task);
    }
}
function handleClickListener(e){
    const target = e.target;
    // console.log(target);

    if(target.className === 'delete'){
        const taskId = target.dataset.id;
        deleteTask(taskId);
        return;
    }else if(target.className === 'custom-checkbox'){
        const taskId = target.id;
        toggleTask(taskId);
        return;
    }
}

function initializeApp(){
fetchTodos();
addTaskInput.addEventListener('keyup',handleInputKeypress);
document.addEventListener('click',handleClickListener);
}
initializeApp();
})()
