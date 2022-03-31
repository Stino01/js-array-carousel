const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
]

// big and small images
let imageContentBig = '';
let imageContentSmall = '';
let currentIndexActive = 0;
for (let i = 0; i < items.length; i++) {
    let classActive = '';
    if (i === currentIndexActive) {
        classActive = 'active';
    }
    imageContentBig += `
        <div class="item ${classActive}">
            <img src="${items[i]}" alt="${title[i]}">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>`
    imageContentSmall += `
        <div class="thumb ${classActive}">
            <img src="${items[i]}" alt="${title[i]}">
        </div>`
};
document.querySelector('.big-image').innerHTML = imageContentBig;
document.querySelector('.small-image').innerHTML += imageContentSmall;

/* let currentIndex = 0;

const currentImage = document.querySelector('.item');
currentImage[currentIndex].classList.add("active");

const down = document.querySelector('.down');
down.addEventListener('click', 'goDown')
const up = document.querySelector('.up');
up.addEventListener('click', 'goUp')

function goDown() {
    currentImage[currentIndex].classList.remove("active");
    currentIndex++;
    if (currentIndex > 4) {
        currentIndex = 0
    };
    currentImage[currentIndex].classList.add("active");
};

function goUp() {
    currentImage[currentIndex].classList.remove("active");
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 4
    };
    currentImage[currentIndex].classList.add("active");
}; */