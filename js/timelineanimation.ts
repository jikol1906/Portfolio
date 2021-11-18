import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let lines;
let circles;

const events = document.querySelectorAll('.timeline__event') as NodeListOf<HTMLDivElement>;

const line = document.querySelector('.timeline__line') as HTMLDivElement;


    lines = line.querySelectorAll('[id^=tline]') as NodeListOf<SVGGeometryElement>
    circles = line.querySelectorAll('[id^=tcirc]') as NodeListOf<SVGGeometryElement>
    


lines.forEach((line, i) => {
    gsap.set(line, {
        strokeDashoffset: Math.floor(line.getTotalLength()) + 1 ,
        strokeDasharray: Math.floor(line.getTotalLength()) + 1 ,
    })



    const tlLine = gsap.timeline({
        scrollTrigger: {
            trigger: line,
            start: "top center",
            end:"90% center",
            scrub:.1,
            
        },
        defaults: {
            ease: "ease-in-out"
        }
    })


    tlLine
    .to(line, {
        strokeDashoffset: "0",
        duration: .4
    })

    .from(circles[i], {
        scale: 0,
        opacity:0,
        duration: .1,
        transformOrigin: "center"
    })



})

events.forEach((e,i) => {
    gsap.from(e,{
        scrollTrigger: {
            trigger: e,
            start: "20% center",
            toggleActions: "play none none reverse",
            // markers:true
            

        },
        
        x:i % 2 === 0 ? "10%" : "-10%",
        opacity: 0,
        duration:0.4
    })
})