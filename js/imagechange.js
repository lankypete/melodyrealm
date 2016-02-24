var currentId = 0;


$(document).ready(function(){
// To hid the melody realm logo
  $("a").hover(function(){
  	document.getElementById("melodyrealm").style.visibility = "hidden";
    console.log("heree");},
    			function(){
    document.getElementById("melodyrealm").style.visibility = "visible";
    console.log("andheree");}

	);
// Let's get the right picture to show up
  $('a').hover(
  function() {
  	currentId = $(this).attr('id');console.log( currentId );
  	document.getElementById(currentId+"pic").style.visibility = "visible";
  	console.log( currentId+"pic" ); },

  function() {
  	document.getElementById(currentId+"pic").style.visibility = "hidden";
  	currentId = 0; console.log(currentId);}
  );

});
