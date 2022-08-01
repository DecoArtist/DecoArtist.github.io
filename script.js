var griff = document.getElementById('griff');
var gale = document.getElementById('gale');
var colette = document.getElementById('colette');
var edgar = document.getElementById('edgar');

var galeinst = new Audio();
galeinst.src = "musics/BrainW-inst.ogg";

var galevocals = new Audio();
galevocals.src = "musics/BrainW-voices.ogg";

var edgarinst = new Audio();
edgarinst.src = "musics/ShadowP-inst.ogg";

var edgarvocals = new Audio();
edgarvocals.src = "musics/ShadowP-voices.ogg";

function galeplay()
{
    edgarinst.pause();
    edgarvocals.pause();
    galeinst.play();
    galevocals.play();
}

function edgarplay()
{
    edgarinst.play();
    edgarvocals.play();
    galeinst.pause();
    galevocals.pause();
}

// var screen = document.getElementById("screen_alert");
// setInterval(() => {
// 	var e = document.documentElement;
// 	if (e.clientHeight > e.clientWidth) {
// 		return screen.style.display = "flex";
// 	} else {
// 		return screen.style.display = "none";
// 	}
// })