const e=document.querySelector("#vimeo-player"),t=new Player(e);t.on("timeupdate",throttle((function(e){let t=e.seconds;console.log(t),localStorage.setItem("videoplayer-current-time",t)}),1e3));const o=localStorage.getItem("videoplayer-current-time");t.setCurrentTime(o).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.887ef5af.js.map
