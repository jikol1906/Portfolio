import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let theLine;
let circles;

const events = document.querySelectorAll('.timeline__event') as NodeListOf<HTMLDivElement>;

const line = document.querySelector('.timeline__line') as HTMLDivElement;


    theLine = line.querySelector('#tline') as SVGGeometryElement
    circles = line.querySelectorAll('[id^=tcirc]') as NodeListOf<SVGGeometryElement>

    gsap.set(theLine, {
        strokeDashoffset: Math.floor(theLine.getTotalLength()) + 1,
        strokeDasharray: Math.floor(theLine.getTotalLength()) + 1
    })

    gsap.to(theLine, {
        scrollTrigger: {
            trigger: theLine,
            start: "top 70%",
            end: "bottom 70%",
            scrub: .5,
        },
        ease: 'linear',
        strokeDashoffset: "0",
        duration: .4
    })

    circles.forEach((circle, i) => {

        gsap.from(circle, {
            scrollTrigger: {
                trigger: events[i],
                start: "50% 70%",
                end: "50% 70%",
                scrub: .5,
            },
            opacity:0,
            scale: .4,
            duration: .2,
            transformOrigin: 'center',
        })
    })
    


// lines.forEach((line, i : number) => {
//     gsap.set(line, {
//         strokeDashoffset: Math.floor(line.getTotalLength()) + 1 ,
//         strokeDasharray: Math.floor(line.getTotalLength()) + 1 ,
//     })



//     const tlLine = gsap.timeline({
//         scrollTrigger: {
//             trigger: line,
//             start: "top center",
//             markers: true,
//             end:"90% center",
//             scrub:.5,
//         },
//         defaults: {
//             ease: "ease-in-out"
//         }
//     })


//     tlLine
//     .to(line, {
//         strokeDashoffset: "0",
//         duration: .4
//     })

//     .from(circles[i], {
//         opacity:0,
//         x: i % 2 === 0 ? '-20px' : '20px',
//         duration: .4,
//         transformOrigin: "center"
//     })



// })

// events.forEach((e,i) => {
//     gsap.from(e,{
//         scrollTrigger: {
//             trigger: e,
//             start: "20% 60%",
//             toggleActions: "play none none reverse",
//             // markers:true
            

//         },
        
//         x:i % 2 === 0 ? "10%" : "-10%",
//         opacity: 0,
//         duration:0.4
//     })
// })