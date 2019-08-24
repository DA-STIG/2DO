// marking To-do by clicking on them

$('ul').on("click", "li",function(){
//also added when an li is clicked exe code:
//we only were listening for the li laready in the ul
//and not the new ones ..so "li" for new user input todo
$(this).toggleClass('completed');
	});

//longer option:
	//un-do the check when clicking again
	//we have to compare with rgb not "gray"-value  of this.color is rgb
	// if ($(this).css('color')==="rgb(128, 128, 128)"){
	// //turn it back to black
	// $(this).css({
	// 	textDecoration: "none",
	// 	color:"black"});
	// 	else{
// 		$(this).css({
// 		//need to use textDecoration insteat of text-decoration
// 		//in JS no properties names can't have hyphens in them
// 		textDecoration: "line-through",
// 		color:"gray"})
// }
// 	})

//click on X to del to-do
//buble event when clicking on x 
$("span").on('click',"span", function(event){
	//this refers to the span
	$(this).parent().fadeOut(500, function(){
		//fadeOut doesn't remove..
		//this refers to the li..=this.parent
		$(this).remove();
	});
	//jQuery method that will stop the "buble-ing" effect
	//-stops on its tracks. not spread anymore to parents obj
	event.stopPropagation();
});
//affects all input type=text
$("input[type='text']").keypress(function(event){
	//when user press Enter code key 13
	if(event.which === 13){
		//this = input value [left side of the .keypress ]
		//grabbing  the user input for new todo
		var todoText=$(this).val();
		$(this).val("");
		//create a new input <li> and added to the todo's <ul>
		//append() can take Html el
		$("ul").append("<li><i class='fa fa-trash'></i>"+todoText+"</li>")

	}

})
	

$("#toggle-form").click(function(){
	$("input").fadeToggle();
});