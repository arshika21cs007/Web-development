//can give for one button also
/*document.querySelector(".btns").addEventListener("click",handleclick);
function handleclick() {
	alert("I got clicked");
}


//using loops to work like above
var noofbuttons=document.querySelectorAll(".drum").length;
for( var i=0;i<noofbuttons;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		alert("I got Clicked");
	});					

}*/
//when button pressed
var noofbuttons=document.querySelectorAll(".drum").length;
for( var i=0;i<noofbuttons;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		var buttonInnerHTML=this.innerHTML;
		makesound(buttonInnerHTML);
		buttonAnimation(buttonInnerHTML);
		
	});					

}
//when key pressed
document.addEventListener("keypress",function(event) {
	makesound(event.key);
	buttonAnimation(event.currentkey);
});
function makesound(key) {
   switch(key) {
		  case "a":
		  	var crash= new Audio("sounds/crash.mp3");
		  	crash.play();
		  break;
		case "k":
		  	var kick= new Audio("sounds/kick-bass.mp3");
		  	kick.play();
		  break;
		case "r":
		  	var snare= new Audio("sounds/snare.mp3");
		  	snare.play();
		  break;
		case "s":
		  	var tom1= new Audio("sounds/tom-1.mp3");
		  	tom1.play();
		  break;
		case "h":
		  	var tom2= new Audio("sounds/tom-2.mp3");
		  	tom2.play();
		  break;
		case "m":
		  	var tom3= new Audio("sounds/tom-3.mp3");
		  	tom3.play();
		  break;
		case "e":
		  	var tom4= new Audio("sounds/tom-4.mp3");
		  	tom4.play();
		  break;
		default:console.log(buttonInnerHTML);
		}
	}
/*Call back function
document.addEventListener("keypress",respondtokey(event));
	function respondtokey(event){
		alert("key was pressed");
	
	}*/
function buttonAnimation(currentkey) {
	var activeButton = document.querySelector("."+ currentkey);
	activeButton.classList.add("pressed");
 
	setTimeout(function() {
		activeButton.classList.remove("pressed");

	},100);
}