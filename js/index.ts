import './navbaranimation';
import './aboutmeanimation';
import './timelineanimation';
import './competencesanimation';
import './projectsanimation';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const [getToKnowMe,goToProjects] = document.querySelectorAll('.header__cta') as NodeListOf<HTMLButtonElement>;

getToKnowMe.addEventListener('click',() => {
    getToKnowMe.blur()
    gsap.to(window, {duration: .5, scrollTo:"#introduction", ease:"ease-in-out"});
    
})

document.querySelectorAll("*[data-fade-in-bottom]").forEach(h => {    
    gsap.from(h, {
        scrollTrigger:{
            trigger:h
        },
        ease: "elastic.out(1, 1)",
        duration:2.5,
        opacity: 0,
        y:"100px"
    })
})


goToProjects.addEventListener('click',() => {
    goToProjects.blur()
    gsap.to(window, {duration: .5, scrollTo:"#projects", ease:"ease-in-out"});
    
})







