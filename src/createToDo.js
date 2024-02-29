import { updateScreen, projects } from "./index.js";
import { projectsPush, projectsRemove } from "./createProject.js";

const tasks = document.querySelector('.tasks');

class toDo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    set changeTitle(title) {
        this.title = title;
    }

    set changeDescription(desc) {
        this.description = desc;
    }

    set changeDate(date) {
        this.dueDate = validate(date);
    }

    set changePriority(priority) {
        this.priority = priority;
    }

    set changeProject(project) {
        projectsRemove(this);
        this.project = project;
        projectsPush(this);
    }

}


function createTodoDiv (todo) {
    const taskDiv = document.createElement('div');
    const taskTitle = document.createElement('h3');
    const taskDesc = document.createElement('p');
    const taskDescDiv = document.createElement('div');
    const taskDue = document.createElement('div');
    const dropDown = dropdown();

    taskDiv.classList.add('task');
    taskTitle.classList.add('title');
    taskDesc.classList.add('desc');
    taskDue.classList.add('date');

    taskTitle.textContent = todo.title;
    taskDesc.textContent = todo.description;
    taskDue.textContent = todo.dueDate;

    taskDescDiv.appendChild(taskTitle);
    taskDescDiv.appendChild(taskDesc);

    taskDiv.appendChild(taskDescDiv);
    taskDiv.appendChild(taskDue);
    taskDiv.appendChild(dropDown);

    return taskDiv
}

function createObject(title, description, dueDate, priority, project) {
    const todo = new toDo(title.value, description.value, dueDate.value, priority.value, project.value);

    for (let object of projects) {
        if (object.name == project.value) {
            object.pushTodo(todo);
        }
    };

    updateScreen();
};


function dropdown (todo) {
    // Elements
    const taskDiv = document.createElement('div');
    const hoverBtn = document.createElement('button');
    const dropContent = document.createElement('div');
    const nameBtn = document.createElement('button');
    const descBtn = document.createElement('button');
    const dateBtn = document.createElement('button');
    const prioBtn = document.createElement('button');
    const projBtn = document.createElement('button');

    const elements = [nameBtn, descBtn, dateBtn, prioBtn, projBtn];

    // Text Content
    hoverBtn.textContent = 'Options';
    nameBtn.textContent = 'Change Name';
    descBtn.textContent = 'Change Description';
    dateBtn.textContent = 'Change Due Date';
    prioBtn.textContent = 'Change Priority';
    projBtn.textContent = 'Change Project';

    // ClassList
    taskDiv.classList.add('dropdown');
    dropContent.classList.add('dropdown-content');

    // Append
    for (let element of elements){
        dropContent.appendChild(element);
    }

    taskDiv.appendChild(hoverBtn);
    taskDiv.appendChild(dropContent);

    return taskDiv;
};


export {toDo, createTodoDiv, createObject}