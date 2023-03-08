const tag = document.createElement("script");
tag.src - "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
// https://mine-it-record.tistory.com/495

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_insertbefore2

function onYouTubePlayerAPIReady() {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8",
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
