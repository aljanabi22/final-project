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
