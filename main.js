

const tl = gsap.timeline({onComplete:function() {
    this.restart();
}});
tl.from('.sect_1_img',{duration:1,y:'100%',ease:'slow'})
.to('.sect_1_img:nth-child(1)',{duration:2,scaleX:1.3,scaleY:1.3,ease:'slow',delay:0.5})
.to('#sect_1 .hero-heading',{opacity:1,delay:-2})
.to('.sect_1_img:nth-child(2)',{duration:2,scaleX:1.5,scaleY:1.5, y:'50px',ease:'slow',delay:-2})
.to('.sect_1_img:nth-child(3)',{duration:2,scaleX:1.5,scaleY:1.5, y:'-50px',ease:'slow',delay:-2})
.to('.sect_1_img:nth-child(4)',{duration:2,scaleX:1.5,scaleY:1.5, y:'50px',ease:'slow',delay:-2})
.to('.sect_1_img',{opacity:0})
.to('#sect_1 .hero-heading',{opacity:0})
.from('.sect_2_img',{duration:1,y:'100%',ease:'slow'})
.to('.sect_2_img:nth-child(1)',{duration:2,scaleX:1.3,scaleY:1.3,ease:'slow',delay:0.5})
.to('#sect_2 .hero-heading',{opacity:1,delay:-2})
.to('.sect_2_img:nth-child(2)',{duration:2,scaleX:1.5,scaleY:1.5, y:'50px',ease:'slow',delay:-2})
.to('.sect_2_img:nth-child(3)',{duration:2,scaleX:1.5,scaleY:1.5, y:'-50px',ease:'slow',delay:-2})
.to('.sect_2_img:nth-child(4)',{duration:2,scaleX:1.5,scaleY:1.5, y:'50px',ease:'slow',delay:-2})
.to('.sect_2_img',{opacity:0})
.to('#sect_2 .hero-heading',{opacity:0});
