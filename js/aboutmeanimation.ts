import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const introductionTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#introduction',
        start: "top 70%"
    },
    defaults: {
        duration: 1,
        ease: "elastic.out(1, 1)"
    }
})
introductionTimeline
    .from('.introduction__header', {
        opacity: 0,
        y: "200%"
    })
    .from('.introduction__paragraph', {
        opacity: 0,
        x: "100%",
        stagger: .1,
    }, "<25%")
    .from('.introduction__img', {
        opacity: 0,
        y: "100%",
        stagger: .1,
    }, "<25%")


