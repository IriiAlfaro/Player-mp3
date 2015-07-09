
(function(window, undefined){
	
	var audio = undefined;
	var loop = false;
	var volumeValue = 0.5;
	var durationElement = undefined;
	var currentTimeElement = undefined;
	var currentVolumeElement = undefined;

	function init(){
		audio = document.createElement('audio');
		audio.setAttribute('src', '/audio/1.mp3');
		audio.durationchange = duration;
		audio.volume = volumeValue; // 50%

		durationElement = document.getElementById('duration');
		currentTimeElement= document.getElementById('currentTime');
		currentVolumeElement= document.getElementById('currentVolume');

		// audio events
		audio.addEventListener('durationchange', setDuration);
		audio.addEventListener('timeupdate',setCurrentTime);
		setVolume();
		setCurrentTime();
		console.log(audio.paused);
	}

	function play(){
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}
	};

	// var playing = !audelem.paused;
	// 	if(playing){
	// 		audio.play();
	// 		audio.setAttribute('loop', '');
	// 		button.classList.add('active');
	// 	}else{
	// 		audio.removeAttribute('loop');
	// 		button.classList.remove('active');
	// 	}

	function repeat(button){
		loop = !loop;
		if(loop){
			audio.setAttribute('loop', '');
			button.classList.add('active');
		}else{
			audio.removeAttribute('loop');
			button.classList.remove('active');
		}
	};

	function volume(plus){
		if(plus){
			volumeValue += 0.01
		}else{
			volumeValue -= 0.01
		}
		if(volumeValue > 1){
			volumeValue = 1;
		}else if(volumeValue < 0){
			volumeValue = 0;
		}
		audio.volume = volumeValue;
		setVolume();
	};

	function setDuration(){
		durationElement.innerHTML = Math.floor(audio.duration);
	};

	function setCurrentTime(){
		currentTimeElement.innerHTML = Math.floor(audio.currentTime*1000);
	}

	function setVolume(){
		currentVolumeElement.innerHTML =  Math.round(audio.volume*100) ;
	}

	// Javascript Class using Revealing Module Pattern
	window.Player = function(){
		

		// Revealing Module Pattern
		return {
			init: init(),
			play: 	play,
			repeat: repeat,
			volume: volume,
		};
	}

})(window, undefined);