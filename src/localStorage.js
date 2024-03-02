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

    for (let project of projects){
        if (localStorage.getItem(project) === null){
            window.localStorage.setItem(project.name, JSON.stringify(project))
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

///////////////// Old function
// function setObjects() {
//     let newProjectList = JSON.parse(window.localStorage.getItem("projectList"));

//     for (let project of newProjectList){
//         let newProject = new Project(Object.values(project)[0], Object.values(project)[1])
        
//         if (project["todos"]){
//             for (let todo of project["todos"]){
//                 let newTodo = new toDo(todo["title"], todo["description"], todo["dueDate"], todo["priority"], todo["project"]);
    
//                 newProject.pushTodo(newTodo);
//             }
//         }
        
//         newProjectPush(newProject);
//     }

// }

export {systemCheck, setObjects, populateStorage}