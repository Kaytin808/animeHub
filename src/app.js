const h2 = document.querySelector('h2')
const hero = document.querySelector('.synopsis')
const animeImg = document.querySelector('.anime-img')
const buttons = document.querySelector('.button');
const episodes = document.querySelector('.episodes')
const body = document.querySelector('.body-container')

buttons.addEventListener('click', () => {
body.style.display = "none"
})
const episodeLists = [
  {
    episodes: {
      1:"https://wwwx12.gogocdn.stream/videos/hls/l-KM2sDgpG7yXAkai7x-3g/1663680056/184141/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1657688325.m3u8",
      2:"https://wwwx13.gogocdn.stream/videos/hls/2RW1EgU9MwZsAHh0sINEtA/1663680527/184472/0789fd4f049c3ca2a49b860ea5d1f456/ep.2.1657688358.m3u8",
      3:"https://wwwx17.gogocdn.stream/videos/hls/qbQt8lNu4KAk480KIuuyUQ/1663680578/184996/0789fd4f049c3ca2a49b860ea5d1f456/ep.3.1657688385.m3u8",
      4:"https://wwwx11.gogocdn.stream/videos/hls/egZ55KaNN3i_Jqs25DbvJA/1663680589/185470/0789fd4f049c3ca2a49b860ea5d1f456/ep.4.1657687813.m3u8",
      5:"https://wwwx11.gogocdn.stream/videos/hls/68vNr3MaZCJhs4i4Sj7cmQ/1663680598/186100/0789fd4f049c3ca2a49b860ea5d1f456/ep.5.1657688320.m3u8",
      6:"https://wwwx14.gogocdn.stream/videos/hls/T_jDHth9eHtoog6KXMupSw/1663680610/186433/0789fd4f049c3ca2a49b860ea5d1f456/ep.6.1657688530.m3u8",
      7:"https://wwwx18.gogocdn.stream/videos/hls/u-BtVk5BVG8cxHNcJfBQpQ/1663680640/186767/0789fd4f049c3ca2a49b860ea5d1f456/ep.7.1657688361.m3u8",
      8:"https://wwwx11.gogocdn.stream/videos/hls/xjpR6UMIbDFsHKyI7vECXA/1663680653/187170/0789fd4f049c3ca2a49b860ea5d1f456/ep.8.1657688361.m3u8",
      9:"https://wwwx14.gogocdn.stream/videos/hls/5AdGQD9QCegO2lInWfyoGA/1663680661/187373/0789fd4f049c3ca2a49b860ea5d1f456/ep.9.1657688704.m3u8",
      10:"https://wwwx16.gogocdn.stream/videos/hls/YpeDte2jnMe8aDU2Qv8phA/1663680672/187685/0789fd4f049c3ca2a49b860ea5d1f456/ep.10.1657688515.m3u8",
      11:"https://wwwx17.gogocdn.stream/videos/hls/DR2Vzf5W8FuO5ZMb7xXtMg/1663680674/188166/0789fd4f049c3ca2a49b860ea5d1f456/ep.11.1657688566.m3u8",
      12:"https://wwwx12.gogocdn.stream/videos/hls/TrSNNvbZ2d0oHcu0BzCfCw/1663680675/188381/0789fd4f049c3ca2a49b860ea5d1f456/ep.12.1657688677.m3u8",
    }
  }
]
async function getAnime(episode) {
    // var grabIt = await fetch(`https://gogoanime.herokuapp.com/vidcdn/watch/spy-x-family-episode-${episode}`,
    // { mode: "cors" });
    // var dataRet = await grabIt.json();
    // console.log(dataRet)
    // console.log(dataRet.sources[0]["file"])

    var vid = episodeLists[0].episodes[episode]
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





async function getAnimeDetails(name) {
    var grabIt = await fetch(`https://gogoanime.herokuapp.com/search?keyw=${name}`)
    var grabSynopsis = await fetch(`https://gogoanime.herokuapp.com/anime-details/${name}`)
    var synopsisParse = await grabSynopsis.json()
    var parseData = await grabIt.json();
    var title = document.querySelector('.title')
    var totalEpisodes = synopsisParse.totalEpisodes;



    h2.textContent = parseData[0]["animeTitle"];
    hero.textContent = synopsisParse.synopsis;
    title.textContent = 'Synopsis'
    animeImg.src = parseData[0]["animeImg"];
}


const searchBtn = document.getElementById('search')
const searchField = document.querySelector('.search')








// Active
var btns = document.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
  var current = document.getElementsByClassName("active");
  if (current.length > 0){ 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  
  // if (current.className === " active") {
  //   current.disabled = "disabled"
  // } 
  
    });
  }
