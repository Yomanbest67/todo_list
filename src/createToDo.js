import { toDos, updateScreen, setToDos } from "./index.js";

const tasks = document.querySelector('.tasks');

class toDo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    set changeDate(date) {
        this.dueDate = validate(date);
    }

}


function createTodoDiv (todo) {
    const taskDiv = document.createElement('div');
    const taskTitle = document.createElement('h3');
    const taskDesc = document.createElement('p');
    const taskDescDiv = document.createElement('div');
    const taskDue = document.createElement('div');
    const deleteBtn = document.createElement('button');

    taskDiv.classList.add('task');
    taskTitle.classList.add('title');
    taskDesc.classList.add('desc');
    taskDue.classList.add('date');

    taskTitle.textContent = todo.title;
    taskDesc.textContent = todo.description;
    taskDue.textContent = todo.dueDate;

    deleteBtn.textContent = "Delete Task";
    deleteBtn.addEventListener('click', () => {
        taskDiv.remove();
        setToDos(removeArrayItem(todo, toDos));
    });

    taskDescDiv.appendChild(taskTitle);
    taskDescDiv.appendChild(taskDesc);

    taskDiv.appendChild(taskDescDiv);
    taskDiv.appendChild(taskDue);
    taskDiv.appendChild(deleteBtn);

    return taskDiv
}

function createObject(title, description, dueDate, priority, project) {
    const todo = new toDo(title.value, description.value, dueDate.value, priority.value, project.value);

    toDos.push(todo);
    updateScreen();
};

function removeArrayItem (item, array) {
    array.splice(array.indexOf(item), 1);
}


export {toDo, createTodoDiv, createObject}