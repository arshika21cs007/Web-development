/*when script given in head tag
$(document).ready(function() {
  alert("helloooo");
});*/

/*jQuery("h1").css("color","red");*/
/*$("h1").css("color","darkred");*/
$("h1").addClass("big-title");

/*To add multiple classes*/
$("h1").addClass("big-title margin");

/*Remove class by
   $("h1").removeClass("big-title margin");
To check whether it has class by
    console.log($("h1").hasClass("margin"));  
       O/P:-True or False*/

$("h1").text("jQuery");
/*$("h1").html("Good Bye");*/

$("a").attr("href","https://in.search.yahoo.com/?fr2=inr");
/* To see what href has,
$("a").attr("href");*/

/*In jQuery,*/
$("h1").click(function () {

   $("h1").css("color","yellow");
});

/*In JavaScript,*/
for (var i=0;i<5;i++) {
  document.querySelectorAll("button")[i].addEventListener("click",function(){
   document.querySelector("h1").style.color="purple";
  }); 
}

/*In jQuery*/
$("button").click(function() {
   $("h1").css("color","brown");

});

/*Keypress(to see which key is pressed)*/
$("input").keypress(function(event) {
   alert(event.key);
});

/*To see which key is pressed in entire document*/
$(document).keypress(function(event) {
   alert(event.key);
});

/*To change h1 when the key is pressed*/
$(document).keypress(function(event){
   $("h1").text(event.key);
});

/*To use any Events*/
$("h1").on("mouseover",function(){
   $("h1").css("color","blue");
});

$("h1").before("<button>Before</button");
$("h1").after("<button>After</button");
$("h1").prepend("<button>Prepend</button");
$("h1").append("<button>Append</button");

/*To remove all buttons
$("button").remove();


$("button").click(function() {
   $("h1").hide();
});

$("button").click(function() {
   $("h1").show();
});*/

/*To hide and show*/
$("button").click(function() {
   $("h1").toggle();
});

/*$("button").click(function() {
   $("h1").fadeOut();
});

$("button").click(function() {
   $("h1").fadeIn();
});*/

/*To fadeout and fadein*/
$("button").click(function() {
   $("h1").fadeToggle();
});

/*$("button").click(function() {
   $("h1").slideUp();
});

$("button").click(function() {
   $("h1").slideDown();
});*/

/*To slideup and slidedown*/
$("button").click(function() {
   $("h2").slideToggle();
});

/*Animate Method*/
$("button").click(function() {
   $("h2").animate({opacity:0.4}); //"20%"
});




   
