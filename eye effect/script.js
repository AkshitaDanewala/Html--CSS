var  password = document.querySelector(".password")
var eyeoff = document.querySelector(".eyeoff")
eyeoff.onclick = function(){
    if(password.type == "password"){
        password.type = "text"
        eyeoff.src = "https://img.freepik.com/free-icon/visits_318-433036.jpg"
       
    }else{
        password.type = "password"
        eyeoff.src = "https://e7.pngegg.com/pngimages/165/9/png-clipart-computer-icons-eye-closed-eyes-cdr-people-thumbnail.png"
       

    }
}


var pg2 = document.querySelector(".pg2")
var cursor = document.querySelector(".cursor")


pg2.addEventListener("mousemove", function(dets){
    // console.log(dets.x)
    // console.log(dets.y)
// dets jo hai vo hume details deta hai ki kya kya events ho rhe hai
cursor.style.left = dets.x+"px"
cursor.style.top = dets.y+"px"

})
