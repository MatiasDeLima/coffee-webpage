/*############### LOADER ###############*/
onload = () => {
    const load = document.getElementById("load");

    setTimeout(() => {
        load.style.display = "none";
    }, 2500)
}

/*############### SHOW MENU ###############*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}

/*############### REMOVE MENU MOBILE ###############*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener("click", linkAction));

/*############### CHANGE BACKGROUND HEADER ###############*/
const scrollHeader = () => {
    const header = document.getElementById("header");

    if (this.scrollY >= 50) {
        header.classList.add("scroll-header")
    } else {
        header.classList.remove("scroll-header");
    }
}

window.addEventListener("scroll", scrollHeader);

/*############### MIXITUP FILTER PRODUCTS ###############*/
let mixerProducts = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */
mixerProducts.filter('.delicies')

/* Link active products */
const linkProducts = document.querySelectorAll(".products__item");

function activeProducts() {
    linkProducts.forEach(l => l.classList.remove("active-product"));
    this.classList.add("active-product")
}

linkProducts.forEach(l => l.addEventListener("click", activeProducts))
/*############### SHOW SCROLL UP ###############*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");

    if (this.scrollY >= 350) {
        scrollUp.classList.add("show-scroll")
    } else {
        scrollUp.classList.remove("show-scroll")
    }
}

window.addEventListener("scroll", scrollUp)

/*############### SCROLL SECTIONS ACTIVE LINK ###############*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)