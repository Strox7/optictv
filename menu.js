
const Navtoglle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
const textb = document.querySelector(".textb")
const rod = document.querySelector(".rod-btn")

const var1 = false
Navtoglle.addEventListener('click', function () {
    links.classList.toggle("show-links")
    if (links.classList.contains("show-links")) {
        rod.style.display = 'block'
        Navtoglle.style.display = 'none'
    }
    else {
        rod.style.display = 'none'
        Navtoglle.style.display = 'block'
    }


    // if (MegaMenu.classList.contains("show-mega")) return MegaMenu.classList.toggle('show-mega')
    // textb.classList.add("texta")
    if (links.classList.contains("show-links")) return textb.classList.add("texta")
    else textb.classList.remove("texta")


})



rod.addEventListener('click', function () {
    links.classList.remove("show-links")
    if (links.classList.contains("show-links")) {
        rod.style.display = 'block'
        Navtoglle.style.display = 'none'
    }
    else {
        rod.style.display = 'none'
        Navtoglle.style.display = 'block'
    }
    if (MegaMenu.classList.contains("show-mega")) {
        MegaMenu.classList.toggle('show-mega')
    }
    if (MegaMenu.classList.contains("show-mega")) {
        textb.classList.remove("texta")
    }

    if (links.classList.contains("show-links")) return textb.classList.add("texta")
    else textb.classList.remove("texta")

})


const Forwade = document.querySelector(".forwade-btn")
const MegaMenu = document.querySelector(".mega-menu")
const Removetoggle = document.querySelector(".remove-btn")
const ActiveL = document.querySelector(".active-l")

// MegaMenu.classList.add('trans')

ActiveL.addEventListener('click', function () {
    MegaMenu.classList.toggle('show-mega')

})

// Forwade.addEventListener('click', function () {
//     MegaMenu.classList.toggle('show-mega')

// })


Removetoggle.addEventListener('click', function () {
    MegaMenu.classList.remove('show-mega')
})

MegaMenu.addEventListener('click', function () {
    MegaMenu.classList.toggle('show-mega')
})


const OffClod = document.querySelector(".offclod")
const OffSlod = document.querySelector(".offslod")
const OffMlod = document.querySelector(".offmlod")




OffClod.addEventListener('click', function () {
    textb.classList.remove("texta")
    if (links.classList.contains("show-links")) return links.classList.toggle("show-links")
})



OffSlod.addEventListener('click', function () {
    textb.classList.remove("texta")
    if (links.classList.contains("show-links")) return links.classList.toggle("show-links")
})

OffMlod.addEventListener('click', function () {
    textb.classList.remove("texta")
    if (links.classList.contains("show-links")) return links.classList.toggle("show-links")
})














