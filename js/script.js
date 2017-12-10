var gameThemeAudio = document.getElementById("my_audio");
var gameTrailer = document.getElementById("my_video");
var accessStyleButton = document.getElementById('accessStyle');
var normalStyleButton = document.getElementById('normalStyle');

/* window.onload = function() {
	gameThemeAudio.volume=0.05;
	gameThemeAudio.stopTime=2;
	gameThemeAudio.play();
};*/

/* people compained about it, so I switched it off */

/*window.onload = function() {
	gameTrailer.volume=0.5;
	gameTrailer.play();
};
*/

function swapStyleSheet(sheet){
	document.getElementById('page-style').setAttribute('href', sheet);
	};

accessStyle.onclick = function() {
	swapStyleSheet('css/accessibility.css');
}

normalStyleButton.onclick = function() {
	swapStyleSheet('css/styles.css')
};




