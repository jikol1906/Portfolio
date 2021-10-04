import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);


const navbarButton = document.querySelector('.navbar__button') as HTMLButtonElement
const navbarButtonlines = document.querySelectorAll('.navbar__button-line') as NodeListOf<HTMLButtonElement>
const navbarContainer = document.querySelector('.navbar__list-container') as HTMLButtonElement
const navLinks = document.querySelectorAll('.navbar__link') as NodeListOf<HTMLAnchorElement>;
let navbarOpen = false;
navLinks.forEach(l => {
    l.addEventListener('click', event => {
        event.preventDefault()
        event.stopPropagation();
        const t = event.target as HTMLAnchorElement;
        const hash = t.href.substr(t.href.indexOf("#"))
        gsap.to(window, {duration: .5, scrollTo:hash, ease:"ease-in-out"});
        if(navbarOpen) {
            toggleNav()
        }
        

    })
    
})


const navBarTimeline = gsap.timeline({
    defaults: {
        duration: .2,
        ease: "easeOut"
    },
    paused: true
})

navBarTimeline
    .set(".navbar__list-container", {
        visibility: "visible",
        left:"50%"
    })
    .set(".navbar__backdrop", {
        display: "block",
    })
    .to(".navbar__backdrop", {
        opacity: 0.8,
        duration: .3
    })
    .from(".navbar__list-item", {
        x: "150%",
        opacity: 0,
        stagger: .02

    }, "-=.3")
    .from(".navbar__list-item-small", {
        y: "-150%",
        opacity: 0,
        stagger: .1

    }, "-=0.30")


navbarButton.addEventListener('click',() => {
    toggleNav()
})
navbarContainer.addEventListener('click',() => {
    toggleNav()
})



function toggleNav() {
    if (!navbarOpen) {
        navBarTimeline.play()
        navbarButtonlines.forEach(n => n.classList.toggle('open'))
        navbarOpen = true;
    } else {
        navBarTimeline.reverse()
        navbarButtonlines.forEach(n => n.classList.toggle('open'))
        navbarOpen = false;
    }
}
