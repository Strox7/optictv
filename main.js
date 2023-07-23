
// const slider = document.querySelector('.slider');
// const innerSlider = document.querySelector('.inner-slider');
// const prev = document.querySelector('.slider-prev');
// const next = document.querySelector('.slider-next');

// let dragged = false;
// let startX;
// let x;

// // Desktop Version

// slider.addEventListener("mousedown", e => {
//     dragged = true;
//     startX = e.offsetX - innerSlider.offsetLeft;
//     slider.style.cursor = "grabbing";
// });

// slider.addEventListener("mouseenter", () => {
//     slider.style.cursor = "grab";
// });

// slider.addEventListener("mouseup", () => {
//     slider.style.cursor = "grab";
//     dragged = false;
// });

// slider.addEventListener("mousemove", e => {
//     if (!dragged) return;
//     e.preventDefault();

//     x = e.offsetX;

//     innerSlider.style.left = `${x - startX}px`;

//     checkProbs();

// });

// // Mobile Version

// slider.addEventListener('touchstart', e => {
//     dragged = true;
//     startX = e.targetTouches[0].clientX - innerSlider.offsetLeft;

//     checkProbs();

// }, { passive: true });

// slider.addEventListener('touchmove', e => {
//     if (!dragged) return;
//     x = e.targetTouches[0].clientX;

//     innerSlider.style.left = `${x - startX}px`;

//     checkProbs();

// }, { passive: true });

// prev.addEventListener('click', () => {
//     let innerSliderLeft = innerSlider.style.left;
//     innerSlider.style.left = parseInt(innerSliderLeft.replace('px', '')) + 265 + 'px';

//     checkProbs();
// });

// next.addEventListener('click', () => {
//     let innerSliderLeft = innerSlider.style.left;
//     innerSlider.style.left = innerSliderLeft.replace('px', '') - 265 + 'px';

//     checkProbs();
// });

// const checkProbs = () => {
//     let outer = slider.getBoundingClientRect();
//     let inner = innerSlider.getBoundingClientRect();

//     if (parseInt(innerSlider.style.left) > 0)
//         innerSlider.style.left = "-10px";

//     if (inner.right < outer.right)
//         innerSlider.style.left = `-${inner.width - outer.width - 10}px`;
// }










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
            items: 1
        },
        300: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})



$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1,
            autoplay: true,
            autoplayTimeout: 2000,
        },
        600: {
            items: 3,
            autoplay: true,
            autoplayTimeout: 2000,
        },
        1000: {
            items: 5
        }
    }
})







// var className = "inverted";
// var scrollTrigger = 60;

// window.onscroll = function () {
//     // We add pageYOffset for compatibility with IE.
//     if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
//         document.getElementsByTagName("header")[0].classList.add(className);
//     } else {
//         document.getElementsByTagName("header")[0].classList.remove(className);
//     }
// };



$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("ative");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("ative");
        }
    });
});












// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});