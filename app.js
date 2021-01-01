//rgb(0,255,0)
//backgroundColor:rgb(0,0,0);


//random rgb color generator function
const randomC = () => {
    let red = Math.floor(Math.random() * (255 + 1))
    let green = Math.floor(Math.random() * (255 + 1))
    let blue = Math.floor(Math.random() * (255 + 1))
    let rgb = `rgb(${red}, ${green}, ${blue})`
    return rgb;
};

const button = document.querySelector('#btn');
const h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
    document.body.style.backgroundColor = randomC();
    h1.innerText = randomC();
})

