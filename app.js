const animeVid = document.getElementById('anime-vid')
const h2 = document.querySelector('h2')
const hero = document.querySelector('.synopsis')
const animeImg = document.querySelector('.anime-img')
const buttons = document.querySelectorAll('button');
const episodes = document.querySelector('.episodes')
// const button1 = document.getElementById('1')
// const button2 = document.getElementById('2')
// const button3 = document.getElementById('3')
async function getAnime(episode) {
    var grabIt = await fetch(`https://gogoanime.herokuapp.com/vidcdn/watch/spy-x-family-episode-${episode}`,
    { mode: "cors" });
    var dataRet = await grabIt.json();
    console.log(dataRet)
    var vid = dataRet.Referer
    animeVid.src = vid;
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

