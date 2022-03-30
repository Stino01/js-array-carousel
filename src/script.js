const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

let imageContent = '';
for (let i = 0; i < items.length; i++) {
    imageContent += `
        <div class="item">
            <img src="${items[i]}" alt="lago">
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
