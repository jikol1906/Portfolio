import './navbaranimation';
import './aboutmeanimation';
import './timelineanimation';
import './competencesanimation';
import './projectsanimation';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ctaButton = document.querySelector('.header__cta') as HTMLButtonElement;

ctaButton.addEventListener('click',() => {
    gsap.to(window, {duration: .5, scrollTo:".introduction__content", ease:"ease-in-out"});
    
})







