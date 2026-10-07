//index.js

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const visualBtn = document.querySelectorAll('#visual_design .visual_wrap button');
const visualModal = document.querySelector('#visual_design .visual_modal');
const modalImg = document.querySelector('#visual_design .modal_content img');
const modalClose = document.querySelector('#visual_design .modal_close');
const modalContent = document.querySelector('.modal_content');
const visualImages = [
    './images/poster.jpg',
    './images/detail.png',
    './images/wedding_poster.png',
    './images/invitation_1.png',
    './images/invitation_2.png',
    './images/invitation_3.png'
];

visualBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modalImg.src = visualImages[index];
        visualModal.classList.add('on');
        document.body.style.overflow = 'hidden';
    });
});

modalClose.addEventListener('click', () => {
    visualModal.classList.remove('on');
    document.body.style.overflow = 'auto';
});

visualModal.addEventListener('click', (e) => {
    if(e.target === visualModal){
        visualModal.classList.remove('on');
        document.body.style.overflow = 'auto';
    }
});

visualBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modalImg.src = visualImages[index];
        if(index === 1){
            modalContent.classList.add('detail');
        } else {
            modalContent.classList.remove('detail');
        }
        visualModal.classList.add('on');
        document.body.style.overflow = 'hidden';
    });
});