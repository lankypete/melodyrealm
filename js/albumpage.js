var albums = [
	{"name" : "Melody⊙Realm I",
	"initials" : "M.R. I",
	"id" : "mr1",
	"embed" : '<iframe  height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/150529780&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>'
	},
	{"name" : "Melody⊙Realm II",
	"initials" : "M.R. II",
	"id" : "mr2",
	"embed" : '<iframe height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/171018536&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>'
	},
	{"name" : "Melody⊙Realm III",
	"initials" : "M.R. III",
	"id" : "mr3",
	"embed" : '<iframe height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/195089503&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>'
	}
];
console.log('hi');

var linkId = localStorage.linkId; //getter
console.log(linkId);

var albumArrayGrab;
for (var i = 0; i < albums.length; i++) {
	if(linkId == albums[i].id){
		albumArrayGrab = i;
		i = albums.length;
	};
};


window.onload = function() {
    $("a.albumlink").click(function() {
      linkId = this.id;
      localStorage.setItem("linkId", linkId); //setter
      console.log(linkId);
    });
  }
//home page ie class .albums-list
if ($(".albums-list")[0])
{
  for (var i = albums.length - 1; i >= 0; i--) {
	$(".albums-list").prepend('<li><a class="albumlink" id="'+albums[i].id+'" href="albumpages/albumpage.html">'+albums[i].initials+'</a></li>')
  };
};

if ($(".other-albums")[0])
{
  for (var i = albums.length - 1; i >= 0; i--) {
	$(".other-albums").prepend('<li><a class="albumlink" id="'+albums[i].id+'" href="albumpage.html">'+albums[i].initials+'</a></li>')
  };
};

if ($(".soundcloud-album")[0])
{
	$(".soundcloud-album").prepend(albums[albumArrayGrab].embed);
};

if ($(".alby-title")[0])
{
	$(".alby-title").prepend(albums[albumArrayGrab].name);
};

if ($(".album-art")[0])
{
	$(".album-art").prepend('<img src="albumart/'+linkId+'.png" alt="melody realm art">');
};


