const firstName = document.getElementsByClassName('firstName');
const lastName = document.getElementsByClassName('lastName');
const description = document.getElementsByClassName('description');
const assignedTo = document.getElementsByClassName('assignedTo');
const dueDate = document.getElementsByClassName('dueDate');
const submitButton = document.getElementsByClassName('submitButton');


submitButton.addEventListener('click', stringlength(firstName,6,8));

//firstName.addEventListener('click', stringlength())

// Required(firstName, lastName) {
//     var txtControl = firstName;
//     var string = lastName.value;
//     var spaceCount;
//     if (txtControl.value == '') {
//     alert('Enter ' + this.lastName + '.' );
//     txtControl.focus();
//     return false;
//     }
// }


// function validateForm() {
//     let firstNameValue = firstName.value;
//     let lastNameValue = lastName.value;

//     if ((firstNameValue && !lastNameValue) || (!firstNameValue && lastNameValue)) {
//         return false;
//     } 
//     return true;
//     alert('please');
//     }


function stringlength(firstName, minlength, maxlength)
{ 
var field = firstName.value; 
var mnlen = minlength;
var mxlen = maxlength;

if(field.length<mnlen || field.length> mxlen)
{ 
alert("Please input the userid between " +mnlen+ " and " +mxlen+ " characters");
return false;
}
else
{ 
alert('Your userid have accepted.');
return true;
}
}