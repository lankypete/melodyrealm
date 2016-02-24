var imageNames = [
  "mr1",
  "mr2",
  "mr3",
  "artix",
  "puar"
];


for (var i = imageNames.length - 1; i >= 0; i--) {
	$(".image-change").prepend('<img id="'+imageNames[i]+'pic" src="indexpics/' + imageNames[i] + '.png">');
};

/*
$(".image-change").append('<img src="indexpics/mr1.png">');
$(".image-change").append('<img src="indexpics/mr2.png">');
$(".image-change").append('<img src="indexpics/mr3.png">');
*/
console.log("here");