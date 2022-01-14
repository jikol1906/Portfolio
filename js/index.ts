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

goToProjects.addEventListener('click',() => {
    goToProjects.blur()
    gsap.to(window, {duration: .5, scrollTo:"#projects", ease:"ease-in-out"});
    
})







