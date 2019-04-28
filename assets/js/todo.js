// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
    console.log($(this).parent()[0]);
    $(this).parent().fadeOut(500, function(){
        //Written here to wait for full fadeOut then called else if it was outside doesnot wait for fadeOut r
        // $(this) here is the element on which it is called meaning li here as li is parent of span
        $(this).remove();
    });
    //stops bubbling of events by parent  
    event.stopPropagation();
});

//to create new Todo
$("input[type='text']").on("keypress", function(event){
    if(event.which === 13) {
        // grabbing new Todo text from input
        var todoText = $(this).val();
        //reseting the current input field
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText +"</li>");

    }
});

$('.fa-pencil-alt').on("click", function(){
    $("input[type='text']").fadeToggle();
});
