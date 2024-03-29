import { updateScreen, projects, selectProject } from "./index.js";
import { projectsPush, projectsRemove } from "./createProject.js";
import { populateStorage } from "./localStorage.js";
import { uniqueID, checkDueDate } from "./dateStuff.js";

const tasks = document.querySelector('.tasks');

class toDo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.id = uniqueID();
    }

    changeTitle(title) {
        this.title = title;
    }

    changeDescription(desc) {
        this.description = desc;
    }

    changeDate(date) {
        this.dueDate = date;
    }

    changePriority(priority) {
        this.priority = priority;
    }

    changeProject(project) {
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
    const taskPriority = document.createElement('div');
    const dropDown = dropdown(todo);

    taskDiv.classList.add('task');
    taskDiv.id = todo.id;
    taskTitle.classList.add('title');
    taskDesc.classList.add('desc');
    taskDue.classList.add('date');

    taskTitle.textContent = todo.title;
    taskDesc.textContent = todo.description;
    taskDue.textContent = todo.dueDate;
    taskPriority.textContent = todo.priority;

    taskDescDiv.appendChild(taskTitle);
    taskDescDiv.appendChild(taskDesc);

    taskDiv.appendChild(taskDescDiv);
    taskDiv.appendChild(taskDue);
    taskDiv.appendChild(taskPriority);
    taskDiv.appendChild(dropDown);

    return taskDiv
}

function createObject(title, description, dueDate, priority, project) {
    const todo = new toDo(title.value, description.value, dueDate.value, priority.value, project.value);

    for (let object of projects) {
        if (object.name == project.value) {
            object.pushTodo(todo);
            selectProject(object);
        }
    };


    updateScreen();
    populateStorage();
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
    const deleteBtn = document.createElement('button');

    const elements = [nameBtn, descBtn, dateBtn, prioBtn, projBtn];

    // Text Content
    hoverBtn.textContent = 'Options';
    nameBtn.textContent = 'Change Name';
    descBtn.textContent = 'Change Description';
    dateBtn.textContent = 'Change Due Date';
    prioBtn.textContent = 'Change Priority';
    projBtn.textContent = 'Change Project';
    deleteBtn.textContent = 'Delete';

    // ClassList
    taskDiv.classList.add('dropdown');
    dropContent.classList.add('dropdown-content');

    // Buttons Functions
    for (let button of elements) {
        button.addEventListener('click', () => {dropdownDialog(button, todo)});
    }

    deleteBtn.addEventListener('click', () => {
        projectsRemove(todo);
        populateStorage();
        updateScreen();
    });

    // Append
    for (let element of elements){
        dropContent.appendChild(element);
    }

    dropContent.appendChild(deleteBtn);
    taskDiv.appendChild(hoverBtn);
    taskDiv.appendChild(dropContent);

    return taskDiv;
};

function dropdownDialog (button, todo) {
    // Elements
    const dialog = document.createElement('dialog');
    const dialogDiv = document.createElement('div');
    const dialogLabel = document.createElement('label');
    let dialogInput; // Defined Bellow
    const dialogClose = document.createElement('button');
    const dialogAdd = document.createElement('button');
    

    // Text Content
    dialogLabel.textContent = button.textContent;
    dialogAdd.textContent = 'Change';
    dialogClose.textContent = 'X';

    // ClassList
    dialog.classList.add('changeDialog');

    // Function
    switch (button.textContent) {
        case 'Change Due Date':
            dialogInput = document.createElement('input');
            dialogInput.type = "date";
            break;

        case 'Change Project':
            // Clone the existing Project List from Index.js as it is automatically updated.
            let projectListElement = document.querySelector('.selectProject');
            dialogInput = projectListElement.cloneNode(true);
            break;

        default:
            dialogInput = document.createElement('input');
            break;
    }

    dialogClose.addEventListener('click', (event) => {
        event.preventDefault();
        dialog.remove();
    });

    dialogAdd.addEventListener('click', (event) => {
        event.preventDefault();
        switch (button.textContent) {

            case 'Change Name':
                todo.changeTitle(dialogInput.value);
                break;

            case 'Change Description':
                todo.changeDescription(dialogInput.value);
                break;

            case 'Change Due Date':
                todo.changeDate(dialogInput.value);
                break;

            case 'Change Priority':
                todo.changePriority(dialogInput.value);
                break;

            case 'Change Project':
                todo.changeProject(dialogInput.value);
                break;
        }

        populateStorage();
        updateScreen();
        dialog.remove();
    });

    // Append
    const elements = [dialogClose, dialogLabel, dialogInput, dialogAdd];
    for (let element of elements) {
        dialogDiv.appendChild(element);
    }

    dialog.appendChild(dialogDiv);
    document.querySelector('body').appendChild(dialog);
    dialog.showModal();
}

function getToDoDiv (todo) {
    return document.querySelector(`#${CSS.escape(todo.id)}`);
    // CSS Escape is needed in order to use pure numerical values.
}

function updateDivColor (todo) {
    const todoDiv = getToDoDiv(todo);
    const due = checkDueDate(todo);
    

    switch (due) {
        case 'due':
            todoDiv.style.borderLeft = "3px solid #07ed44";
            break;

        case 'today':
            todoDiv.style.borderLeft = "3px solid yellow";
            break;

        case "overdue":
            todoDiv.style.borderLeft = "3px solid red";
            break;
    }
}


export {toDo, createTodoDiv, createObject, getToDoDiv, updateDivColor}