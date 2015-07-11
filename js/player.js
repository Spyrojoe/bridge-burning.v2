function Song(title, album, year, audioUrl, coverUrl){
	this.title = title;
	this.album = album;
	this.year = year;
	this.audioUrl = audioUrl;
	this.coverUrl = coverUrl;
}
$(document).ready(function(){
	var tracks = [											// Lose this array and retreive URL's via Song objects
		"audio/allmylife.mp3",
		"audio/timeslikethese.mp3",
		"audio/myhero.mp3"
	];
	var player = document.getElementById("player");
	var activeTrack = tracks[0];
	loadTrack(activeTrack);

	function Song(title, album, year, audioUrl, coverUrl){
		this.title = title;
		this.album = album;
		this.year = year;
		this.audioUrl = audioUrl;
		this.coverUrl = coverUrl;
	}

	 myHero = new Song("My Hero", "The Colour and the Shape", 1997, "audio/myhero.mp3", "img/colorshape.jpg");


	var allMyLife = {										// Create Song objects with a constructor, pass key/value pairs with JSON (probably?)
		title : "All My Life",
		album : "One by One",
		audioUrl : "audio/allmylife.mp3",
		coverUrl : "img/onebyone.jpg",
		year : 2002
	}

	var timesLikeThese = {
		title : "Times Like These",
		album : "One by One",
		audioUrl : "audio/onebyone.mp3",
		coverUrl : "img/colorshape.jpg",
		year : 2002
	}

	/*var myHero = {
		title : "My Hero",
		album : "The Colour and the Shape",
		audioUrl : "audio/myhero.mp3",
		coverUrl : "img/colorshape.jpg",
		year : 1997
	}*/

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

	function skipForward(){									// Rewrite methods to iterate to audioUrl value of the next Song object 
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

	function skipBack(){									// Rewrite methods to iterate to "audio" value of the previos Song object 
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