import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//Get project cards
const projectCards = document.querySelectorAll('.projects__card') as NodeListOf<HTMLDivElement>


projectCards.forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: card,
        x: i % 2 !== 0 ? "100%" : "-100%",
        opacity: 0,
        duration: .5
    })
})
