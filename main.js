console.log(submitButton);

// submitButton.addEventListener("click", stringLength);

document.getElementById("taskForm").addEventListener("submit", (e) => {
  validateTaskForm(e);
});

function validateTaskForm(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  // const lastName = document.getElementById("lastName").value;
  const description = document.getElementById("description").value;
  const assignedTo = document.getElementById("assignedTo").value;
  const dueDate = document.getElementById("dueDate").value;
  const submitButton = document.getElementById("submitButton");
  const form = document.getElementById("taskForm");
  const nameError = document.getElementById("nameError");
  let date = new Date();
  console.log(date);

  let messages = [];
  if (firstName.value.length <= 0) {
    messages.push("Please enter Name");
  }

  if (firstName.value.length < 8) {
    messages.push("Name must be at least 8 characters");
  }

  if (description.value === "" || description.value == null) {
    messages.push("Please enter a task description");
  }

  if (description.value.length <= 15) {
    messages.push("Please have a longer description");
  }

  if (assignedTo.value.length <= 0) {
    messages.push("Please fill the field");
  }

  if (assignedTo.value.length < 8) {
    messages.push("Please have a longer description");
  }

  if (dueDate === currentDate) {
    messages.push("Please indicate later date");
  }

  nameError.innerHTML = messages.join(`, `);
}

function displayDate() {
  let dateObject = document.getElementById("dateObject");
  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  document.getElementById("dateObject").innerHTML =
    date + "/" + month + "/" + year;
}

console.log(displayDate());
