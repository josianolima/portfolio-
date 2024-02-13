const imageElement = document.querySelector('.imagem1 img');
const images = ['img/josiano.jpg'];
let currentIndex = 0;

function changeImage() {
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 2000);

