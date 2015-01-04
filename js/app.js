$(document).ready(function() {

 
 function submitItems() {
 		//set todo_text variable to whatever's in the text input form
		var todo_text = $(".add_form").val();
		var price = $(".price_form").val();
		var quantity = $(".quantity_form").val();
		//append to the ul, "<li>"+todo_text+"</li>"
		if(!$.trim($('.add_form').val())) {
			console.log("please enter text");
			$(".error").show(600, function(){ $(this).delay(1000).hide(600);});
		} 
		else {
			$(".add_button").closest("#main").find("ul").append("<li>" + todo_text + " = $" + price*quantity + "</li>");
			//on pressing add, clear the form contents
			$(".add_form").val("");
			$(".price_form").val("");
			$(".quantity_form").val("");
		};
  };

	//when i press the submit button, then do a function
	$("form").on("click", ".add_button", submitItems);


//set variable 'price' for value in class=price_form
//append price to li after submitting


	//use enter key to submit
	$(document).keypress(function(e) {
	    if(e.which == 13) {
		    // submitItems;
		    submitItems();
		    e.preventDefault();
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


//sortable list items
	// $('ul').sortable({ axis: "y" });

    $( "ul" ).sortable();

	//on hover of li, append " - mark completed" inside of the li
	//if it's not already checked - ie doesn't have the completed class
	//on mouseover add li_hover class, on mouseout remove the li_hover class
	$("ul").on("mouseenter", "li", function(){
		// if ($(this).hasClass("completed")) {	
		// }
		// else {
		// 	$(this).toggleClass("li_hover");
		// 	$(this).append("<span class='mark_completed'>&nbsp; - &nbsp;(mark completed)</span>");
		// 	$(this).prepend("<i class='fa fa-navicon hamburger'></i>");
		// }

		if ($(this).not(".comple")) {
			$(this).toggleClass("li_hover");
			$(this).append("<span class='mark_completed'>&nbsp; - &nbsp;(mark completed)</span>");
			$(this).prepend("<i class='fa fa-navicon hamburger'></i>");
			console.log("asdf");
		}






	});
	$("ul").on("mouseleave", "li", function(){
		$(this).find("span").remove();
		$(this).removeClass("li_hover");
		$(this).find("i").remove();
	});






});