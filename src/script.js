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

// big image
let imageContentBig = '';
for (let i = 0; i < items.length; i++) {
    imageContentBig += `
        <div class="item">
            <img src="${items[i]}" alt="${title[i]}">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>`
};
const bigImage = document.querySelector('.big-image');
bigImage.innerHTML = imageContentBig;
document.querySelector('.item').classList.add("active");

// small image
let imageContentSmall = '';
for (let i = 0; i < items.length; i++) {
    imageContentSmall += `
        <div class="thumb">
            <img src="${items[i]}" alt="${title[i]}">
        </div>`
};
const smallImage = document.querySelector('.small-image')
smallImage.innerHTML = imageContentSmall;
document.querySelector('.thumb').classList.add("active");

// chevron up
let chevronUp = '';
chevronUp += `
    <div class="chevron up">
        <i class="fa-solid fa-chevron-up"></i>
    </div>`
smallImage.innerHTML += chevronUp;

// chevron down
let chevronDown = '';
chevronDown += `
    <div class="chevron down">
        <i class="fa-solid fa-chevron-down"></i>
    </div>`
smallImage.innerHTML += chevronDown;

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