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

    set changeName(name) {
        this.name = name;
        updateToDoProjectsList();
        updateScreen();
    }

    set changeDescription (desc) {
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
    const projTitle = document.createElement('h2');
    const projDesc = document.createElement('p');

    projDiv.classList.add('project');
    projTitle.textContent = project.name;
    projDesc.textContent = project.description;

    projDiv.addEventListener('click', () => {
        selectProject(project)
        updateScreen();
    });

    projDiv.appendChild(projTitle);
    projDiv.appendChild(projDesc);

    updateToDoProjectsList();
    return projDiv
};

function createProject(name, description) {
    const project = new Project(name, description);

    
    projects.push(project);

    updateToDoProjectsList();
    updateScreen();
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