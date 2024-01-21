var tl=gsap.timeline()

tl.from(".load h1,.load h2",{
    y:120,
    duration:0.7,
    delay:0.2,
    stagger:0.2
})

tl.to(".load",{
    stagger:-0.2,
    opacity:0,
    duration:3

})

tl.to("#loader",{
    top:"-100%",
    duration:1,
    ease:"power4.out"
})


var timer = document.querySelector("#timer h4")
var grow = 0
var int = setInterval(function(){
    if(grow<100){
        grow++
        timer.innerHTML = grow
    }
},20)

setTimeout(function(){
    clearInterval(int)
},3500)