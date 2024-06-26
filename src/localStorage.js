import { projects, newProjectPush } from "./index.js";
import { Project } from "./createProject.js";
import { toDo } from "./createToDo.js";


function systemCheck() {
    if (!Object.entries(localStorage)) {
        populateStorage();
    } else {
        setObjects();
    }
}

function populateStorage() {
    localStorage.removeItem("projectList");

    projectCheck();

    for (let project of projects){
        if (localStorage.getItem(project) === null){
            window.localStorage.setItem(project.name, JSON.stringify(project))
        }
    }
}

function projectCheck() {
    for (const key of Object.keys(localStorage)){
        for (const project of projects){
            if (key != project.name){
                window.localStorage.removeItem(key);
            }
        }
    }
}

function setObjects() {
    for (const [key, value] of Object.entries(localStorage)) {
        let object = JSON.parse(value);
        let newProject = new Project(object["name"], object["description"])

        if (object["todos"]){
            for (let todo of object["todos"]){
                let newTodo = new toDo(todo["title"], todo["description"], todo["dueDate"], todo["priority"], todo["project"]);

                newProject.pushTodo(newTodo);
            }
        }

        newProjectPush(newProject);
     }
}

export {systemCheck, setObjects, populateStorage}
