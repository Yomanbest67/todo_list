import { getSelectedProject } from './index.js';
import { getProjectDiv } from './createProject.js';

function addSelectedClass() {
    const selectedProject = getSelectedProject();

    if (selectedProject != undefined && selectedProject != null){
        const selectedProjectDiv = getProjectDiv(selectedProject);

        if (selectedProjectDiv != null) {
            selectedProjectDiv.classList.add('selected');
        }
    }
   
}

function tasksEmptyDiv () {
    // Elements
    const taskList = document.querySelector('.tasks')
    const emptyTaskDiv = document.createElement('div');
    const emptyTaskTitle = document.createElement('h1');
    const emptyTaskDesc = document.createElement('h3');

    // ClassList
    emptyTaskDiv.classList.add('empty')

    // TextContent
    emptyTaskTitle.textContent = "This List is Empty..."
    emptyTaskDesc.textContent = "Start By Creating a Task or a Project on the left."

    // Style
    emptyTaskDiv.style.opacity = "0.5";
    emptyTaskDiv.style.color = "white";

    // Append
    emptyTaskDiv.appendChild(emptyTaskTitle);
    emptyTaskDiv.appendChild(emptyTaskDesc);

    taskList.appendChild(emptyTaskDiv);
}



export { addSelectedClass, tasksEmptyDiv }