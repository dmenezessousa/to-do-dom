const button = $('#save');


button.on('click',(e) =>{
    const task = $('#task').val();
    const desc = $('#desc').val();
    const priority = $('input:radio[name=priority]:checked').val();
    console.log(priority);
    e.preventDefault();
    const newElement = "<div class='todo " + priority +" '><p>"+ task +"</p><p>"+ desc +"</p><p>"+ priority +"</p><button class='delTodo'>X</button></div>";
    $('#task-list').append(newElement);
    $('#task').val('');
    $('#desc').val('');
    console.log(newElement);
    console.log('clickei');
});


$('#task-list').on('click', '.todo .delTodo', function() {
    $(this).parent().remove();
    console.log( 'foi');
});

$('#remove-all').on('click', function() {
    $('#task-list').html('');
    console.log( 'foi');
});






