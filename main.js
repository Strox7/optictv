
const slider = document.querySelector('.slider');
const innerSlider = document.querySelector('.inner-slider');
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');

let dragged = false;
let startX;
let x;

// Desktop Version

slider.addEventListener("mousedown", e => {
    dragged = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
    dragged = false;
});

slider.addEventListener("mousemove", e => {
    if (!dragged) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;

    checkProbs();

});

// Mobile Version

slider.addEventListener('touchstart', e => {
    dragged = true;
    startX = e.targetTouches[0].clientX - innerSlider.offsetLeft;

    checkProbs();

}, { passive: true });

slider.addEventListener('touchmove', e => {
    if (!dragged) return;
    x = e.targetTouches[0].clientX;

    innerSlider.style.left = `${x - startX}px`;

    checkProbs();

}, { passive: true });

prev.addEventListener('click', () => {
    let innerSliderLeft = innerSlider.style.left;
    innerSlider.style.left = parseInt(innerSliderLeft.replace('px', '')) + 265 + 'px';

    checkProbs();
});

next.addEventListener('click', () => {
    let innerSliderLeft = innerSlider.style.left;
    innerSlider.style.left = innerSliderLeft.replace('px', '') - 265 + 'px';

    checkProbs();
});

const checkProbs = () => {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0)
        innerSlider.style.left = "-10px";

    if (inner.right < outer.right)
        innerSlider.style.left = `-${inner.width - outer.width - 10}px`;
}










let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}








$(".carousl").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});











$('.client-logo').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 0,
    dots: false,
    nav: false,
    autoplay: true,
    navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
    responsive: {
        0: {
            items: 3
        },
        300: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})