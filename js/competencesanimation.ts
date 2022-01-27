import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


//Competence section elements
const competenceCards = document.querySelectorAll('.competences__card') as NodeListOf<HTMLDivElement>
const languageStats = document.querySelectorAll('.competences__language-stat') as NodeListOf<HTMLDivElement>


competenceCards.forEach((card,i) => {
    
        const animations = [
            {x:'40%'},
            {x:'-40%'},
        ]
    
    gsap.from(card, {
            scrollTrigger: {
                trigger:card,
                start:"-300% center",
                
            },
            ...animations[i % 2],
            ease:"power",
            scale:.5,
            opacity: 0,
            duration: .5
        })
    
        
})

languageStats.forEach(l => {
    gsap.from(l,{
        scrollTrigger: {
            trigger:l,
            start:"top 90%",
        },
        y:"90%",
        opacity: 0
    })

})
