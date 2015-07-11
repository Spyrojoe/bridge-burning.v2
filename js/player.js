$(document).ready(function(){
	var tracks = [
		"audio/allmylife.mp3",
		"audio/timeslikethese.mp3",
		"audio/myhero.mp3"
	];
	var player = document.getElementById("player");
	var activeTrack = tracks[0];
	loadTrack(activeTrack);

	console.log(tracks.indexOf(activeTrack));

	$("#forward").click(function(e){
		e.preventDefault();
		skipForward();
	});

	$("#back").click(function(e){
		e.preventDefault();
		skipBack();
	});

	$("#playlist a").click(function(e){
		e.preventDefault();
		alert($("#playlist a").index($(this)));

	});

	function skipForward(){
		var index = tracks.indexOf(activeTrack);
		if(index >= 0 && index < tracks.length - 1){
			var nextItem = tracks[index + 1];
			activeTrack = nextItem;
			loadTrack(activeTrack);
		} else if (index = tracks.length - 1){
			activeTrack = tracks[0];
			loadTrack(activeTrack);
		}
		player.play();
		return activeTrack;
	}

	function skipBack(){
		index = tracks.indexOf(activeTrack);
		if(index > 0){
			var nextItem = tracks[index - 1];
			activeTrack = nextItem;
			loadTrack(activeTrack);
		} else {
			var last = tracks.length - 1;
			activeTrack = tracks[last];
			loadTrack(activeTrack);
		}
		player.play();
		return activeTrack;
	}

	function loadTrack(track){
		$("#source").attr("src", track);
		player.load();
	}

	function switchByPlaylist(listItem){
		console.log(listItem.index());
	}

});