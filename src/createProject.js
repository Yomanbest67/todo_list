import { projects, tasks, updateScreen, clearScreen, selectProject, updateToDoProjectsList, toDos } from "./index.js";
import { createTodoDiv } from "./createToDo.js";

class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    set changeName(name) {
        this.name = name;
    }

    set changeDescription (desc) {
        this.description = desc;
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

export {Project, createProjectDiv, createProject}