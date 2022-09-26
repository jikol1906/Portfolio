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
        y: "100%",
        stagger: .1,
    }, "<25%")
    .from('.introduction__img', {
        opacity: 0,
        y: "100%",
        stagger: .1,
    }, "<25%")

    const downloadResumeTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".introduction__download-resume",
            start: "50% 90%",
        },
        defaults: {
            duration:1,
            ease: "elastic.out(1, 1)"
        }
    })

downloadResumeTimeline
    .to(".introduction__content", {
        "--linebreak-fade-in":100
    })
    .from(".introduction__download-resume", {
        opacity: 0,
        y: "100%",
    },"<25%")