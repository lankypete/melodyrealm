var artistList = [
  { "name" : "puar",
   "soundcloud" : "https://soundcloud.com/puarbeats",
   "html" : "puar.html"
  },
  { "name" : "superglue",
   "soundcloud" : "https://soundcloud.com/super-glue",
   "html" : "superglue.html"
  }
];

for (var i = 0; i < artistList.length; i++) {
	$(".other-artist").append('<li><a href="'+artistList[i].html+'">'+artistList[i].name+'</a></li>');
};

for (var i = 0; i < artistList.length; i++) {
	$(".artist-name").append(artistList[i].name);
};