var video = document.getElementById('videoMedia');
var source = document.createElement('source');

source.setAttribute('src', "content/japan.mp4");

video.appendChild(source);
video.play();

var video = document.getElementById('videoMedia');

document.querySelector('video').playbackRate=0.60;
document.querySelector('video').play();

// Time function

function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById("time").innerHTML =
    h + ":"+ m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i){
    if (i < 10) (i = "0" + i); // 0 zu Nummer hinzufügen, wenn sie unter 10 sind
    return i;
}
