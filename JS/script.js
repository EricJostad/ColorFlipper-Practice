const colors = ['green', 'red', 'rgba(133,122,200)',
    '#f15025', 'orange', 'gray'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    //get random numbr between 0-3
    const randomNumber = getRandomNum();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNum() {
    return Math.floor(Math.random() * colors.length);
}