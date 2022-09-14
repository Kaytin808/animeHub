const animeVid = document.getElementById('anime-vid')
const h2 = document.querySelector('h2')
const hero = document.querySelector('.synopsis')
const animeImg = document.querySelector('.anime-img')
const buttons = document.querySelectorAll('button');
const button1 = document.getElementById('1')
const button2 = document.getElementById('2')
const button3 = document.getElementById('3')
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
    // console.log(parseData)
    h2.textContent = parseData.animeTitle;
    hero.textContent = parseData.synopsis;
    animeImg.src = parseData.animeImg;
}
getAnimeDetails();

function openiframe(number) {
    this.number = getAnime(number);
}
