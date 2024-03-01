import { projects, updateScreen, selectProject, updateToDoProjectsList } from "./index.js";
import { createTodoDiv } from "./createToDo.js";

class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.todos = [];
    }

    pushTodo(todo) {
        this.todos.push(todo);
    }

    changeName(name) {
        this.name = name;
        updateToDoProjectsList();
        updateScreen();
    }

    changeDescription (desc) {
        this.description = desc;
        updateToDoProjectsList();
        updateScreen();
    }

    removeTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

}

function createProjectDiv(project) {
    const projDiv = document.createElement('div');
    const descDiv = document.createElement('div');
    const projTitle = document.createElement('h2');
    const projDesc = document.createElement('p');
    let optionsBtn = dropDown(project);

    projDiv.classList.add('project');
    projTitle.textContent = project.name;
    projDesc.textContent = project.description;

    projDiv.addEventListener('click', () => {
        selectProject(project)
        updateScreen();
    });

    descDiv.appendChild(projTitle);
    descDiv.appendChild(projDesc);
    projDiv.appendChild(descDiv);
    projDiv.appendChild(optionsBtn);

    updateToDoProjectsList();
    return projDiv
};

function createProject(name, description) {
    const project = new Project(name, description);

    
    projects.push(project);

    updateToDoProjectsList();
    updateScreen();
};

function dropDown (project) {
    // Elements
    const taskDiv = document.createElement('div');
    const hoverBtn = document.createElement('button');
    const dropContent = document.createElement('div');
    const nameBtn = document.createElement('button');
    const descBtn = document.createElement('button');

    // Text Content
    hoverBtn.textContent = 'Options';
    nameBtn.textContent = 'Change Name';
    descBtn.textContent = 'Change Description';

    // ClassList
    taskDiv.classList.add('dropdown');
    dropContent.classList.add('dropdown-content');

    // Button Function
    for (let button of [nameBtn, descBtn]){
        button.addEventListener('click', () => dropDownDialog(button, project));
    };

    // Append
    dropContent.appendChild(nameBtn);
    dropContent.appendChild(descBtn);

    taskDiv.appendChild(hoverBtn);
    taskDiv.appendChild(dropContent);

    return taskDiv;
};

function dropDownDialog (button, project) {
    // Elements
    const dialog = document.createElement('dialog');
    const dialogDiv = document.createElement('div');
    const dialogLabel = document.createElement('label');
    const dialogInput = document.createElement('input');
    const dialogClose = document.createElement('button');
    const dialogAdd = document.createElement('button');

    // Text Content
    dialogLabel.textContent = button.textContent;
    dialogAdd.textContent = 'Change';
    dialogClose.textContent = 'X';

    // Function
    dialogClose.addEventListener('click', (event) => {
        event.preventDefault();
        dialog.remove();
    });

    dialogAdd.addEventListener('click', (event) => {
        event.preventDefault();
        switch (button.textContent) {

            case 'Change Name':
                project.changeName(dialogInput.value);
                break;

            case 'Change Description':
                project.changeDescription(dialogInput.value);
                break;

        }
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
};

////// Global Index.JS Projects iterating functions.
function projectsPush(item) {

    for (let object of projects) {
        if (object.name == item.project) {
            object.pushTodo(item);
        }
    }

}

function projectsRemove(item) {

    for (let object of projects) {
        if (object.name == item.project) {
            object.removeTodo(item);
        }
    }

}

export {Project, createProjectDiv, createProject, projectsPush, projectsRemove}