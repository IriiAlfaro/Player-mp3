(function(window, undefined){
	var cargar = 'lista.json';
	function loadJSON() {
	    var xobj = new XMLHttpRequest();
	    xobj.overrideMimeType("application/json");
	    xobj.open('GET', cargar, true);
	    xobj.onreadystatechange = function () {
			if (xobj.readyState == 4 && xobj.status == "200") {
			// .open will NOT return a value but simply returns undefined in async mode so use a callback
			callback(xobj.responseText);
			}
	    };
	    xobj.send(null);
	  }

	  function callback(data){
	  	try{
	  		var songsList = JSON.parse(data);
	  		createList(songsList);
	  	}catch(error){
	  		console.error('ERROR JSON', error);
	  	}
	  }

	  //Valor del parametro callback
	  loadJSON(callback);

	  function createList (data) {
	  	console.log(data.songs);
	  	var list = '<ul class="reproduction-list">' ;
	  	for (var i = 0 ; i < data.songs.length; i++) {
	  		list += '<li><img src="'+ data.songs[i].imagen +'"><h2>'+ data.songs[i].name + '</h2><h3>' + data.songs[i].artist + '</h3><h4>' + data.songs[i].album +'</h4></li>';
	  	}

	  	list += '</ul>';

	  	document.getElementById('list').innerHTML = list ;
	  	console.log(list);
	  }

})(window, undefined);