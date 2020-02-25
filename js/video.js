var video;
var volume;
var slider;
var rate;
var time;

//run this in Chrome!

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() {
	video.play();
	console.log("Play Video");
	volume= document.querySelector('#volume');
	console.log(volume);
	volume.innerHTML=video.volume * 100 + '%'
	
	
} 
function pauseVid() { 
	video.pause();
	console.log("Pause Video");
		
} 

function decreaseSpeed() { 
	rate=video.playbackRate * .2;
	video.playbackRate -= rate;
  	console.log("Speed is "  + video.playbackRate);
} 

function increaseSpeed() {
	rate=video.playbackRate * .25;
	video.playbackRate += rate;
	console.log("Speed is " + video.playbackRate);
} 

function skipAhead() {
	if (video.currentTime + 60 < video.duration){
		video.currentTime +=60;
	}
	else {
		video.currentTime =0;
		video.playbackRate=1;
		
	console.log("Current location is " +  video.currentTime);
	}
	}
 

function mute() { 
		if (video.muted==true) {
			video.muted=false
			document.querySelector('#mute').innerHTML= 'Mute';
			  console.log("Unmuted");
		}
		else {
			  video.muted=true;
			  document.querySelector('#mute').innerHTML='Unmute';
			  console.log("Muted");
			}
}

function changeVolume() {
	slider=document.querySelector('#volumeSlider');
	console.log(slider.value);
	video.volume=(slider.value/100);
	console.log('Volume is ' + video.volume);
	volume.innerHTML=slider.value +'%';
	
}
       

function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale")
}

function color() {
	video.classList.remove('grayscale')
	console.log("In color") 
}
