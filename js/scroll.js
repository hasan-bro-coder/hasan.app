import Lenis from '@studio-freight/lenis'

import gsap from "gsap"


const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


let els = ["#about","#home"]

els.forEach((el,i)=>{
  document.querySelector(`${el}er`).onclick= ()=>{
    lenis.scrollTo(el)
  }
})

$(window).scroll(function() {  
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    lenis.scrollTo(0)
  }
        //  {alert("bottom reached!");   }   
  
}); 

let mains = gsap.utils.toArray(".main")

mains.forEach((el,i)=>{
  gsap.to(el,{
    scrollTrigger:{
        trigger: el,
        pin: true,
        markers: true,
        start: ()=> "-=" + 100,
        end: ()=> "+=" + 800
    }
  })
})
