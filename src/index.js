import css from './style.css';
import {createObject, createTodoDiv} from './createToDo.js';
import {createProjectDiv, createProject} from './createProject.js';


const tasks = document.querySelector('.tasks');
const sidebar = document.querySelector('.sidebar');
const projects = [];
const toDos = [];

// Function to load the ToDos from LocalStorage

// Call the ToDo modules


(function createToDoDialog() {
    const newTaskBtn = document.querySelector('.newTask');
    const taskDialog = document.querySelector('.taskDialog');
    const closeBtn = document.querySelector('.close');
    const addTaskBtn = document.querySelector('.taskCreate');

    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    const priority = document.querySelector('.priority');
    const dueDate = document.querySelector('.due');
    
    newTaskBtn.addEventListener('click', () => {
        taskDialog.showModal();
    });

    closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        taskDialog.close();
    });

    addTaskBtn.addEventListener('click', (event) => {
        event.preventDefault();
        createObject(title, description, dueDate, priority);
        taskDialog.close();
    });


})();

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
}

function updateScreen () {
    clearScreen();

    for (let object of toDos){
        tasks.appendChild(createTodoDiv(object));
    }
};

export {toDos, projects, updateScreen}