var video = document.getElementById('videoMedia');

document.querySelector('video').playbackRate=0.60;
document.querySelector('video').play();


var video = document.getElementById('videoMedia');
var source = document.createElement('source');

source.setAttribute('src', 'content/japan.mp4');

video.appendChild(source);
video.play();

function changeVideo() {
    source.setAttribute('src', 'content/sunny_road.mp4');
}