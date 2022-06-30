
      console.log(submitButton)
      
      
      submitButton.addEventListener('click', stringLength);
      
      function stringLength()
      { 
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const description = document.getElementById('description').value;
        const assignedTo = document.getElementById('assignedTo').value;
        const dueDate = document.getElementById('dueDate').value;
        const submitButton = document.getElementById('submitButton');
        const form = document.getElementById('taskForm');
        let date = new Date();
        console.log(date);
        
        
        
        if (firstName.length > 8){
          alert("Please have a shorter name");
        }
      
        if (description.length < 15) {
          alert("Please have a longer description");
        }

        if (assignedTo.length < 8) {
          alert("Please have a longer name");
        }

        if (dueDate === currentDate) {
          alert("Please indicate later date");
        }
      
      }
      
     

      function displayDate() {
          let dateObject = document.getElementById('dateObject')
          let currentDate = new Date();
          let date = currentDate.getDate();
          let month = currentDate.getMonth() + 1;
          let year = currentDate.getFullYear();
          document.getElementById('dateObject').innerHTML = date + "/" + month + "/" + year;      
      }

      console.log(displayDate());
      