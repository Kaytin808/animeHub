const h2 = document.querySelector('h2')
const hero = document.querySelector('.synopsis')
const animeImg = document.querySelector('.anime-img')
const buttons = document.querySelectorAll('button');
const episodes = document.querySelector('.episodes')




async function getAnime(episode) {
    var grabIt = await fetch(`https://gogoanime.herokuapp.com/vidcdn/watch/spy-x-family-episode-${episode}`,
    { mode: "cors" });
    var dataRet = await grabIt.json();
    console.log(dataRet.sources[0]["file"])
    var vid = dataRet.sources[0]["file"]
      const source = vid;

      const video = document.querySelector('video');
      
      // For more options see: https://github.com/sampotts/plyr/#options
      // captions.update is required for captions to work with hls.js
      const player = new Plyr(video, {captions: {active: true, update: true, language: 'en'}});
      
      player.quality = '1080'
      if (!Hls.isSupported()) {
        video.src = source;
      } else {
        // For more Hls.js options, see https://github.com/dailymotion/hls.js
        const hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(video);
        window.hls = hls;
        
        // Handle changing captions
        player.on('languagechange', () => {
          // Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
          setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
        });
      }
    
          // Expose player so it can be used from the console
      window.player = player;
    }





async function getAnimeDetails() {
    var grabIt = await fetch("https://gogoanime.herokuapp.com/anime-details/spy-x-family")
    var parseData = await grabIt.json();
    var title = document.querySelector('.title')
    // console.log(parseData)
    h2.textContent = parseData.animeTitle;
    hero.textContent = parseData.synopsis;
    title.textContent = 'Synopsis'
    animeImg.src = parseData.animeImg;
}
getAnimeDetails();

function openiframe(number) {
    this.number = getAnime(number);
}

// Active
var btns = document.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
  var current = document.getElementsByClassName("active");
  if (current.length > 0){ 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  this.disabled = "disabled"
    });
  }
