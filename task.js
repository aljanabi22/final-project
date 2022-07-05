const firstName = document.getElementById("firstName").value;
// const lastName = document.getElementById("lastName").value;
const description = document.getElementById("description").value;
const assignedTo = document.getElementById("assignedTo").value;
const dueDate = document.getElementById("dueDate").value;
const submitButton = document.getElementById("submitButton");
const form = document.getElementById("taskForm");
const nameError = document.getElementById("nameError");
class taskManager {
  constructor(name, description, assignedTo) {
    this.firstName = name;
    this.description = description;
    this.assignedTo = assignedTo;
  }
}
//  const taskName = document.getElementById("taskName").value;
// // // const lastName = document.getElementById("lastName").value;
//  const description = document.getElementById("description").value;
//  const assignedTo = document.getElementById("assignedTo").value;
//  const dueDate = document.getElementById("dueDate").value;
//  const submitButton = document.getElementById("submitButton");
//  const form = document.getElementById("taskForm");
//  const nameError = document.getElementById("nameError");
class TaskManager {
  constructor(id = 0) {
      const description = document.getElementById("description").value;
      const assignedTo = document.getElementById("assignedTo").value;
      const dueDate = document.getElementById("dueDate").value;
      const submitButton = document.getElementById("submitButton");
      const form = document.getElementById("taskForm");
      const nameError = document.getElementById("nameError");
      const taskName = document.getElementById("taskName").value;
    this.infoARR = [];
    this.id = id;
  }
     addInfo (taskName, description, assignedTo, dueDate) {
        const info = {
        id: this.id++,
       taskName: this.taskName,
       description: this.description,
       assignedTo: this.assignedTo,
       dueDate: this.dueDate
      }
      this.infoARR.push(info);
      console.log(`Property id: ${info.id}\n our name is ${info.taskName}\n desciption is ${info.description}\n this is assigned to ${info.assignedTo}\n and it is due by ${info.dueDate}`);
      return info
  }
}
const taskManager = new TaskManager(0);
console.log(taskManager);
let prop1 = taskManager.addInfo();
let prop2 = taskManager.addInfo();
console.log(prop1);
console.log(prop2);
//------------------------------------------------------------------------------ 2nd method
// class TaskManager {
//   constructor(taskName, description, assignedTo, dueDate){
//       this._id = TaskManager.incrementId();
//       this._taskName = taskName;
//       this._description = description;
//       this._assignedTo = assignedTo;
//       this._dueDate = dueDate;
//       this._taskArray = [];
//       this.addTask();
//   }
//   static incrementId() {
//       if (!this.latestId) {
//           this.latestId = 1;
//       } else {
//           this.latestId++;
//       }
//       return this.latestId;
//   }
//   addTask(){
//       this._taskArray.push(this)
//   };
//------------------------------------------------------------------------------------------- 3rd method
//class TaskManager {
//constructor(id = 0) {
//       this.id = id;
//       this.tasks = [];
//   }
//
//   addTask(obj) {
//
//       // 1.) Unique ID
//       this.id++;
//
//       // 2.) Add the task
//       this.tasks.push(obj);
//
//       // 3.) Print HTML
//       let text = '';
//       for (let i = 0; i < this.tasks.length; i++) {
//           text += 'this.tasks[' + i + '].name= ' + this.tasks[i].name;
//           text += 'this.tasks[' + i + '].description= ' + this.tasks[i].description;
//           text += 'this.tasks[' + i + '].assignedTo= ' + this.tasks[i].assignedTo;
//           text += 'this.tasks[' + i + '].dueDate= ' + this.tasks[i].dueDate;
//       }
//       console.log(text);
//
//       return;
//   }
//
// }
//
// // 3.) Create a instance of TaskManager.
// const listOfTask = new TaskManager;
//
//
// // 4.) Add Task
// function verifyInputAdd() {
//
//   // 1.) Capture this information from your Form
//   const userInputTask1 = {
//       name: 'Homework',
//       description: 'Some description here',
//       assingtto: 'Daniel',
//       duedate: '4/7/2022',
//       status: 'to-do',
//   }
//   console.log('userInputTask1.name= ' + userInputTask1.name);
//   console.log('userInputTask1.description= ' + userInputTask1.description);
//   console.log('userInputTask1.assingtto= ' + userInputTask1.assignedTo);
//   console.log('userInputTask1.duedate= ' + userInputTask1.dueDate);
//
//   // 2.) Verify information
//
//   // 3.) Add the task
//   listOfTask.addTask(userInputTask1);
//
// };
//