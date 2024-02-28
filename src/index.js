import css from './style.css';
import {createObject, createTodoDiv, toDo} from './createToDo.js';
import {createProjectDiv, createProject, Project} from './createProject.js';


const tasks = document.querySelector('.tasks');
const sidebar = document.querySelector('.sidebar');
const projectsDiv = document.querySelector('.projects');
const defaultProj = new Project('Default', 'Default list of Todos');
const projects = [defaultProj];
let toDos = [];
let selectedProject = defaultProj;

// Function to load the ToDos from LocalStorage

// Call the ToDo modules
const taskDialog = document.querySelector('.taskDialog');

updateScreen();

(function createTaskButton() {
    createToDoDialog();
    const newTaskBtn = document.querySelector('.newTask');

    newTaskBtn.addEventListener('click', () => {
        taskDialog.showModal();
    });

})();

function createToDoDialog() {
    
    const closeBtn = document.querySelector('.close');
    const addTaskBtn = document.querySelector('.taskCreate');
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    const priority = document.querySelector('.priority');
    const dueDate = document.querySelector('.due');
    const selectProjectList = document.querySelector('#selectProject');

    closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        taskDialog.close();
    });

    addTaskBtn.addEventListener('click', (event) => {
        event.preventDefault();
        createObject(title, description, dueDate, priority, selectProjectList);
        taskDialog.close();
    });


};


(function createProjectDialog() {
    // Buttons
    const newProjBtn = document.createElement('button');
    const closeBtn = document.createElement('button');
    const addProjBtn = document.createElement('button');
    const delProj = document.createElement('button');

    // Dialog
    const projDialog = document.createElement('dialog');
    const projForm = document.createElement('form');
    const labelName = document.createElement('label');
    const inputName = document.createElement('input');
    const labelDesc = document.createElement('label');
    const inputDesc = document.createElement('input');
    const formElements = [labelName, inputName, labelDesc, inputDesc, addProjBtn];

    // ClassLists
    projDialog.classList.add('projDialog');
    projForm.classList.add('projForm');

    // Text Content
    newProjBtn.textContent = 'New Project';
    closeBtn.textContent = 'X';
    addProjBtn.textContent = 'Add Project';
    labelName.textContent = 'Project Name:';
    labelDesc.textContent = 'Short Description:';
    delProj.textContent = 'Delete Project';

    // Buton Function
    newProjBtn.addEventListener('click', () => {
        projDialog.showModal();
    });

    closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        projDialog.close();
    });

    addProjBtn.addEventListener('click', (event) => {
        event.preventDefault();
        createProject(inputName.value, inputDesc.value);
        updateToDoProjectsList();
        projDialog.close();
    });

    // Finish Up and Append
    for (let element of formElements){
        projForm.appendChild(element);
    };

    projDialog.appendChild(closeBtn);
    projDialog.appendChild(projForm);
    sidebar.appendChild(newProjBtn);
    sidebar.appendChild(projDialog);
})();

function clearScreen () {
    while (tasks.firstChild) {
        tasks.firstChild.remove();
    }

    while (projectsDiv.firstChild) {
        projectsDiv.firstChild.remove();
    }
}

function updateScreen () {
    clearScreen();

    for (let object of toDos){
        if (object.project == selectedProject.name){
            tasks.appendChild(createTodoDiv(object));
        }
    };

    for (let project of projects){
        projectsDiv.appendChild(createProjectDiv(project));
    };
};

function updateToDoProjectsList () {
    const options = document.querySelector('#selectProject');


    while (options.firstChild){
        options.firstChild.remove();
    }
    

    for (let project of projects) {
        const option = document.createElement('option');
        option.value = `${project.name}`;
        option.textContent = `${project.name}`;

        options.appendChild(option);
    }
};

function selectProject(object) {
    selectedProject = object;
}

function setToDos(newVal) {
    toDos = newVal;
}

function removeToDo (item) {
    toDos.splice(toDos.indexOf(item), 1);
}


export {toDos, projects, tasks, removeToDo, updateScreen, clearScreen, selectProject, setToDos, updateToDoProjectsList, projectsDiv}