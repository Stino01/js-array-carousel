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


const down = document.querySelector('.down');
const up = document.querySelector('.up');

function goDown() {
    const imgs = document.getElementsByClassName('item');
    imgs[currentIndexActive].classList.remove('active');
    const thumbs = document.getElementsByClassName('thumb');
    thumbs[currentIndexActive].classList.remove('active');

    if (currentIndexActive === 4) {
        currentIndexActive = 0;
    } else {
        currentIndexActive++;
    }
    
    imgs[currentIndexActive].classList.add('active');
    thumbs[currentIndexActive].classList.add('active');
}

function goUp() {
    const imgs = document.getElementsByClassName('item');
    imgs[currentIndexActive].classList.remove('active');
    const thumbs = document.getElementsByClassName('thumb');
    thumbs[currentIndexActive].classList.remove('active');

    if (currentIndexActive === 0) {
        currentIndexActive = items.length -1;
    } else {
        currentIndexActive--;
    }
    
    imgs[currentIndexActive].classList.add('active');
    thumbs[currentIndexActive].classList.add('active');
}

down.addEventListener('click', goDown)
up.addEventListener('click', goUp)