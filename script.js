var griff = document.getElementById('griff');
var gale = document.getElementById('gale');
var colette = document.getElementById('colette');
var edgar = document.getElementById('edgar');

var griffinst = new Audio();
griffinst.src = "musics/Broke-inst.ogg";

var griffvocals = new Audio();
griffvocals.src = "musics/Broke-voices.ogg";

var edgarinst = new Audio();
edgarinst.src = "musics/ShadowP-inst.ogg";

var edgarvocals = new Audio();
edgarvocals.src = "musics/ShadowP-voices.ogg";

function griffplay()
{
    edgarinst.pause();
    edgarvocals.pause();
    griffinst.play();
    griffvocals.play();
}

function edgarplay()
{
    edgarinst.play();
    edgarvocals.play();
    griffinst.pause();
    griffvocals.pause();
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