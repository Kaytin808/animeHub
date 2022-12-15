

const h2 = document.querySelector('h2')
const hero = document.querySelector('.synopsis')
const animeImg = document.querySelector('.anime-img')
const buttons = document.querySelector('.button');
const episodes = document.querySelector('.episodes')
const body = document.querySelector('.body-container')

buttons.addEventListener('click', () => {
body.style.display = "none"
})

// spy-x-family-episode-1
async function animeSearch(name) {
  var get = await fetch(`https://api.consumet.org/anime/gogoanime/${name}`,{ mode: "cors" });
  var it = await get.json();
  var results = it;
  console.log(results)
}

async function getAnime(episode,name) {
  var get = await fetch(`https://gogoanime.consumet.org/vidcdn/watch/${name}-episode-${episode}`,{ mode: "cors" });
  var it = await get.json();
  var results = it.sources[0]['file'];
  console.log(results)

    // console.log(dataRet.sources[0]["file"])


      const source = results;
      const video = document.querySelector('video');
      
      // For more options see: https://github.com/sampotts/plyr/#options
      // captions.update is required for captions to work with hls.js
      const player = new Plyr(video, {captions: {active: true, update: true, language: 'en'}});
      
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
    var grabIt = await fetch("https://gogoanime.herokuapp.com/anime-details/boku-no-hero-academia")
    // var grabSynopsis = await fetch(`https://gogoanime.herokuapp.com/anime-details/${name}`)
    // var synopsisParse = await grabSynopsis.json()
    var parseData = await grabIt.json();
    var title = document.querySelector('.title')
    // var totalEpisodes = synopsisParse.totalEpisodes;
  // console.log(synopsisParse)
  console.log(parseData)


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
// function checkStorage() {
//   if (localStorage.getItem("listId") != null) {
//     var val = localStorage.getItem("listId")
//     console.log(val)
//     setActive(val)
//   }
// }
// function active(id) {
//   localStorage.removeItem('listId');//clear previous data
//   localStorage.setItem("listId", id);//add data to storage
//   console.log(id);
//         }
//         function setActive(value) {
//           document.getElementById(value).classList.value = " active";
//               }