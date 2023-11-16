function changeColor() {
    document.querySelector('.introText').style.backgroundColor = getRandomBlueShade();
}

function resetColor() {
    document.querySelector('.introText').style.backgroundColor = '';
}

function getRandomBlueShade() {
    var blueShade = Math.floor(Math.random() * 100) + 156;
    return 'rgb(0, 0, ' + blueShade + ')';
}