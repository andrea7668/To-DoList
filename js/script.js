var container = document.querySelector('.container'); //get the container div from the DOM

document.getElementById('submit').addEventListener('click', function () { //add an event listener to the submit button
    var newWindow = window.open('addTask.html', 'newWindow', 'width=600, height=400'); //open a new window and set the width and height of the window

    newWindow.document.write('<h2>Add Task</h2>'); //add a title to the new window
    newWindow.document.write('<input type="text" name="task" id="task" placeholder="Enter Task">'); //add a text input to the new window
    newWindow.document.write('<input type="date" name="date" id="date" placeholder="Enter Date">'); //add a date input to the new window
    newWindow.document.write('<input type="button" name="submit" id="submit" value="Submit">'); //add a submit button to the new window

    newWindow.document.getElementById('submit').addEventListener('click', function () { //add an event listener to the submit button
        if (newWindow.document.getElementById('task').value == '' || newWindow.document.getElementById('date').value == '') { //check if the user has entered a task and a date
            newWindow.alert('Please enter a task and a date'); 
            return;
        }

        var task = newWindow.document.getElementById('task').value; //get the task from the text input in the new window
        var newTask = document.createElement('div'); //create a new div element
        newTask.classList.add('task'); //add the class 'task' to the new div element
        newTask.id = 'newTask'; //add the id 'newTask' to the new div element 
        container.appendChild(newTask); //add the new div element to the container div

        var date = newWindow.document.getElementById('date').value; //get the date from the date input in the new window
        var newDate = document.createElement('div'); //create a new div element
        newDate.classList.add('date'); //add the class 'date' to the new div element
        newDate.id = 'newDate'; //add the id 'newDate' to the new div element
        date = date.split('-'); //split the date into an array
        date = date[2] + '/' + date[1] + '/' + date[0]; //set the date to the format dd/mm/yyyy
        newDate.innerHTML = task + ' ' + date; //add the task and the date to the new div element
        newDate.style.position = 'relative'; //set the position of the date
        newDate.style.top = '5px';
        newTask.appendChild(newDate); //add the new div element to the newTask div

        var newCheckbox = document.createElement('input'); //create a new input element
        newCheckbox.type = 'checkbox'; //set the type of the input element to checkbox
        newCheckbox.name = 'task'; //set the name of the input element to task
        newCheckbox.value = 'task'; //set the value of the input element to task
        newCheckbox.id = 'task'; //set the id of the input element to task
        newCheckbox.style.position = 'relative'; //set the position of the checkbox 
        newCheckbox.style.bottom = '10px';
        newCheckbox.style.right = '20px';
        newTask.appendChild(newCheckbox); //add the new input element to the newTask div
        
        newWindow.close(); //close the new window after the user has entered a task and a date

        newCheckbox.addEventListener('click', function () { //add an event listener to the checkbox
            if (newCheckbox.checked) {
                container.removeChild(this.parentNode); //remove the selected task from the container div
                newCheckbox.checked = false; //uncheck the checkbox
            }
        });

    });

});