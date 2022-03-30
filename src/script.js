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

let imageContent = '';
for (let i = 0; i < items.length; i++) {
    imageContent += `
        <div class="item">
            <img src="${items[i]}" alt="lago">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>`
};
const bigImage = document.querySelector('.big-image');
const smallImage = document.querySelector('.small-image')
bigImage.innerHTML = imageContent;
smallImage.innerHTML = imageContent;
document.querySelector('.item').classList.add("active");

let chevronUp = '';
chevronUp += `
    <div class="chevron up">
        <i class="fa-solid fa-chevron-up"></i>
    </div>`
smallImage.innerHTML += chevronUp;

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