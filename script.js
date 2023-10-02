document.addEventListener('DOMContentLoaded', function () {
    var btn_add_id = document.getElementById('btn_add_id');
    var task_list_container_id = document.getElementById('task_list_container_id');
    var add_task_input_field_id = document.getElementById('add_task_input_field_id');
    var date_id=document.getElementById('date_id');
    var date_details_span_id=document.getElementById('date_details_span_id');
   
    date_id.value= new Date().toISOString().slice(0, 10);

    // Function to add a new task
    function add_task() {
        // Clone the task_list_container
        var newTaskContainer = task_list_container_id.cloneNode(true);
        newTaskContainer.style.display = 'inline-flex'; // Make it visible
    
        //Include date
        
        var date_details_JS=document.createElement('span');
        date_details_JS.textContent=date_id.value;
        date_details_span_id.append(date_details_JS);
         


        //Include category topic

        // Set the task description
        var para_class = newTaskContainer.querySelector('.para_class');
        para_class.textContent = add_task_input_field_id.value;
        if (para_class.textContent !== '') {
            // Append the clone to the parent container (wrapper)
            document.querySelector('.wrapper').appendChild(newTaskContainer);

            // Clear the input field after adding the task
            add_task_input_field_id.value = '';
        } else {
            alert('Please add a new task...');
        }

        // Attach the click event listener for the delete button
        var delete_btn = newTaskContainer.querySelector('.delete_span');
        delete_btn.addEventListener('click', function () {
            var confirmation = confirm('Are you sure you want to delete this task?');
            if (confirmation) {
                newTaskContainer.remove();
            }
        });

// Edit button function
var edit_btn = newTaskContainer.querySelector('.edit_span');
edit_btn.addEventListener('click', function () {
    var confirmation = confirm('Are you sure you want to Edit this task?');
    if (confirmation) {
        var task_selected = newTaskContainer.querySelector('.para_class');
        add_task_input_field_id.value = task_selected.textContent;

        add_task_input_field_id.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                task_selected.textContent = add_task_input_field_id.value;
                newTaskContainer.remove(); // Remove the current task
                document.querySelector('.wrapper').appendChild(newTaskContainer); // Append the edited task
            }
        });
    } 
    else {
        alert('Sorry, an error occurred!!!');
    }
});



    }

    // Attach the "ADD" button click event listener
    btn_add_id.addEventListener('click', add_task);

    // Attach the Enter key press event listener for the input field
    add_task_input_field_id.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            add_task();
        }
    });
});
