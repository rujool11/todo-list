
function randomFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1) + min);
};
    
const changeTheme = () => {
    let currentInt = document.querySelector('body').style.backgroundImage.charAt(24);
    let randInt = randomFromInterval(1,10);
    while (currentInt===randInt) {
        randInt = randomFromInterval(1,10);
    }
    let url = './assets/images/img' + randInt + '.jpg';
    document.querySelector('body').style.backgroundImage = `url('${url}')`;
};

export { changeTheme };