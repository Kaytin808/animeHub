import loadSpy from "./app";
const test = document.getElementById('test')
test.addEventListener('click', () => {
    window.open('/dist/homePage.html', '_self')
})
loadSpy();