// const firstName = document.getElementById("firstName").value;
// // const lastName = document.getElementById("lastName").value;
// const description = document.getElementById("description").value;
// const assignedTo = document.getElementById("assignedTo").value;
// const dueDate = document.getElementById("dueDate").value;
// const submitButton = document.getElementById("submitButton");
// const form = document.getElementById("taskForm");
// const nameError = document.getElementById("nameError");

// class TaskManager {
//   constructor(name, description, assignedTo, dueDate) {
//     this.firstName = name,
//     this.description = description,
//     this.assignedTo = assignedTo
//   }
//   set first(value){
//     this.firstName = value;
//   }
//   set descr(value){
//     this.description = value;
//   }
//   set assigned(value){
//     this.assignedTo = value;
//   }
//   get information(){
//     return console.log(`${this.firstName} ${this.description} ${this.assignedTo}`)
//   }
// }


export const newTask = [];

export default class TaskManager {
  constructor(firstName, description, assignedTo, dueDate, status){
    this.firstName = firstName;
    this.description = description;
    this.assignedTo = assignedTo;
    this.dueDate = dueDate;
    this.status = status;
  }

  addTask(){
    newTask.push(this)
  }
  }
