var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2")
var form = document.querySelector(".form")
var signup = document.querySelector(".signup")
var login = document.querySelector(".login")

btn2.addEventListener("click",function(){
    form.style.transform = "translatex(30vmax)"
    login.style.top = `100%`
    login.style.display = "none"
})
btn1.addEventListener("click",function(){
    form.style.transform = "translatex(-2vmax)"
    login.style.top = `0`
    login.style.display = "initial"
    login.style.display = "flex"


})