import { projects, newProjectPush } from "./index.js";
import { Project } from "./createProject.js";
import { toDo } from "./createToDo.js";


function systemCheck() {
    if (!localStorage.getItem("projectList")) {
        populateStorage();
    } else {
        setObjects();
    }
}

function populateStorage() {
    window.localStorage.setItem("projectList", JSON.stringify(projects));
}

function setObjects() {
    let newProjectList = JSON.parse(window.localStorage.getItem("projectList"));

    for (let project of newProjectList){
        let newProject = new Project(Object.values(project)[0], Object.values(project)[1])
        
        if (project["todos"]){
            for (let todo of project["todos"]){
                let newTodo = new toDo(todo["title"], todo["description"], todo["dueDate"], todo["priority"], todo["project"]);
    
                newProject.pushTodo(newTodo);
            }
        }
        
        newProjectPush(newProject);
    }

}

export {systemCheck, setObjects, populateStorage}