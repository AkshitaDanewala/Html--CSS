

var container1 = document.querySelector(".container1")
var container2 = document.querySelector(".container2")
var container3 = document.querySelector(".container3")
var heart1 = document.querySelector(".heart1")
var heart2 = document.querySelector(".heart2")
var heart3 = document.querySelector(".heart3")
var redheart1 = document.querySelector(".redheart1")
var redheart2 = document.querySelector(".redheart2")
var redheart3 = document.querySelector(".redheart3")
var number1 = document.querySelector(".number1")
var number2 = document.querySelector(".number2")
var number3 = document.querySelector(".number3")


container1.addEventListener("dblclick", function(){
    heart1.style.transform = `translate(-50%, -50%) scale(1)`
    heart1.style.opacity = "0.8"
    redheart1.style.color = "red"

    setTimeout(function(){
        heart1.style.opacity = "0"
        redheart1.style.color = "white"
    
    }, 1000)


setTimeout(function(){
    heart1.style.transform = `translate(-50%, -50%) scale(0)`

},2000)
 
})


var number1likeCount = 0
function like1(){
++number1likeCount;
    number1.innerHTML =  number1likeCount

    }



 


container2.addEventListener("dblclick", function(){
    heart2.style.transform = `translate(-50%, -50%) scale(1)`
    heart2.style.opacity = "0.8"
    redheart2.style.color = "red"

setTimeout(function(){
    heart2.style.opacity = "0"
        redheart2.style.color = "white"


},1000)

setTimeout(function(){
    heart2.style.transform = `translate(-50%, -50%) scale(0)`

},2000)

})

var number2likeCount = 0
function like2(){
++number2likeCount;
    number2.innerHTML =  number2likeCount

    }




container3.addEventListener("dblclick", function(){
    heart3.style.transform = `translate(-50%, -50%) scale(1)`
    heart3.style.opacity = "0.8"
    redheart3.style.color = "red"


setTimeout(function(){
    heart3.style.opacity = "0"
        redheart3.style.color = "white"


},1000)

setTimeout(function(){
    heart3.style.transform = `translate(-50%, -50%) scale(0)`

},2000)

})

var number3likeCount = 0
function like3(){
++number3likeCount;
    number3.innerHTML =  number3likeCount

    }
