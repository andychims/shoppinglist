$(document).ready(function() {

 
 function submitItems() {
 		//set todo_text variable to whatever's in the text input form
		var todo_text = $(".add_form").val();
		//append to the ul, "<li>"+todo_text+"</li>"
		$(".add_button").closest("#main").find("ul").append("<li>" + todo_text + "</li>");
		//on pressing add, clear the form contents
		$(".add_form").val("");
  };

	//when i press the submit button, then do a function
	$("form").on("click", ".add_button", submitItems);




//use enter key to submit
	$(document).keypress(function(e) {
	    if(e.which == 13) {
		    // submitItems;
		    e.preventDefault();
		    submitItems();
		    
		}
	});




	//on clicking the li, cross out the text using class=completed
	$("ul").on("click", "li", function(event){
		$(this).toggleClass("completed");
	});


	//on clicking the clear all button, find li's with completed class, and delete them
	//on clicking clear-all button
	$(".clear_it").on("click", function () {
		$("ul .completed").remove();
	});
		// find li with completed class, delete them



//*** this isn't working on newly made li's!
//on hover of li, append " - mark completed" inside of the li
	//if it's not already checked - ie doesn't have the completed class
	//on mouseover add li_hover class, on mouseout remove the li_hover class
		$("ul").on("mouseover", "li", function(event){
			$(this).addClass("li_hover");
			$(this).append("<span class='mark_completed'>&nbsp; - &nbsp;(mark completed)</span>");
		});
		$("ul").on("mouseout", "li", function(event){
			$(this).find("span").remove();
		});
	//if it does have the completed class, don't do anything


//trying out hover, but this doesn't work on newly-created li's
// $( "li" ).hover(
//   function() {
//     $( this ).append( $( "<span class='mark_completed'>&nbsp; - &nbsp;(mark completed)</span>" ) );
//   }, function() {
//     $( this ).find( "span:last" ).remove();
//   }
// );


});