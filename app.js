var music=document.querySelector("#music")
var pause=document.querySelector(".fa-pause")
var play=document.querySelector(".fa-play")
var load=document.querySelector(".fa-retweet")
var range =document.querySelector("input")


range.setAttribute("min",0)
range.setAttribute("max",music.duration)

play.addEventListener("click",()=>{
    music.play()
})
pause.addEventListener("click",()=>{
    music.pause()
})
load.addEventListener("click",()=>{
    music.load()
})
range.addEventListener("input",(e)=>{
   music.currentTime=e.target.value
})