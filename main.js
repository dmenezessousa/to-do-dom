//get button element 
const button = $('#save');

//on click function to get information from input and send it to a new empty DIV
button.on('click',(e) =>{
    const task = $('#task').val();//get values from task
    const desc = $('#desc').val();//get values from description
    const priority = $('input:radio[name=priority]:checked').val();//get which radio input was clicked
    e.preventDefault();//prevent submit button to send out the page information.
    //create a new DIV and log out the values from Radio input,task and description.
    const newElement = "<div class='todo " + priority +" '><p>"+ task +"</p><p>"+ desc +"</p><p>"+ priority +"</p><button class='delTodo'>X</button></div>";
    //add the new div inside my empty div in html.
    $('#task-list').append(newElement);
    //restore task input to empty
    $('#task').val('');
    //restore description input to empty
    $('#desc').val('');
});

//function to remove one of the todo itens from my DIV.
$('#task-list').on('click', '.todo .delTodo', function() {
    $(this).parent().remove();
});

//function for the remove all button
$('#remove-all').on('click', function() {
    $('#task-list').html('');
});