
var section = document.querySelector(".section")
var pg1 = document.querySelector(".pg1")
var pg2 = document.querySelector(".pg2")
var pg3 = document.querySelector(".pg3")
var pg4 = document.querySelector(".pg4")

let changePhoto = 1

setInterval(function(){
        if(changePhoto === 0){
            pg1.style.top = "0%"
            pg2.style.zIndex = 99
            pg4.style.zIndex = 80
            pg2.style.top = "-100%"
            changePhoto = 1
        }else if(changePhoto === 1){
            pg2.style.top = "0%"
            pg3.style.zIndex = 99
            pg1.style.zIndex = 80
            pg3.style.top = "-100%"
            changePhoto = 2
        }else if(changePhoto === 2){
            pg3.style.top = "0%"
            pg4.style.zIndex = 99
            pg2.style.zIndex = 80
            pg4.style.top = "-100%"
            changePhoto = 3
        }else if( changePhoto === 3){
            pg4.style.top = "0%" 
            pg1.style.zIndex = 99
            pg3.style.zIndex = 80
            pg1.style.top = "-100%"
            changePhoto = 0
        }
    },2000)