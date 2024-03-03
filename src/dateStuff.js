import { isEqual, isAfter, isBefore, parse, format } from "date-fns";
import { toDo } from "./createToDo";


function getCurrentDate() {
    const date = format(new Date(), "yyyy-MM-dd");
    return date;
}

function sortByDate (todoList) {
    
    return todoList.sort((a, b) => 
    parse(a.dueDate, "yyyy-mm-dd", new Date()) - parse(b.dueDate, "yyyy-MM-dd", new Date()));
    
}

//// Not Date-Related but will leave here due to similarity;

function sortByPriority(todoList) {

    return todoList.sort((a, b) => a.priority - b.priority);

}

function checkDueDate (todo) {
    
    if (todo.dueDate){
        const todoDateParsed = todo.dueDate;


        if (isBefore(todoDateParsed, getCurrentDate())) {
            return 'overdue';
        } else if (isEqual(todoDateParsed, getCurrentDate())) {
            return 'today';
        } else { return 'due'; }

        
    }
    
}

function uniqueID() {

    return Math.floor(Math.random() * Date.now())

}

export { getCurrentDate, sortByDate, sortByPriority, uniqueID, checkDueDate }