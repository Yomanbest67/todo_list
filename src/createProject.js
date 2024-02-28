import { projects, updateScreen } from "./index.js";

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

    projDiv.appendChild(projTitle);
    projDiv.appendChild(projDesc);


    return projDiv
};

function createProject(name, description) {
    const project = new Project(name, description);

    projects.push(project);
    updateScreen();
};

export {Project, createProjectDiv, createProject}