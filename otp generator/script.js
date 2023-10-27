// var btn = document.querySelector("button")
// var box1 = document.querySelector(".box1")
// var box2 = document.querySelector(".box2")
// var box3 = document.querySelector(".box3")
// var box4 = document.querySelector(".box4")

// btn.addEventListener("click", function(){
//    var no1 = Math.floor(Math.random() *10)
//    var no2 = Math.floor(Math.random() *10)
//    var no3 = Math.floor(Math.random() *10)
//    var no4 = Math.floor(Math.random() *10)

//     console.log(no1)

//    box1.innerHTML = `${no1}`
//    box2.innerHTML = `${no2}`
//    box3.innerHTML = `${no3}`
//    box4.innerHTML = `${no4}`

// })

function generate(){
    var otp1 = "";
    var otp2 = "";
    var otp3 = "";
    var otp4 = "";


    for(var i= 0; i<1; i++){
        otp1+=[Math.floor(Math.random() *10)]
    }
    for(var i =0; i<1; i++){
        otp2+=[Math.floor(Math.random() *10)]
    }
    for(var i =0; i<1; i++){
        otp3+=[Math.floor(Math.random() *10)]
    }
    for(var i=0; i<1; i++){
        otp4+=[Math.floor(Math.random() *10)]
    }
    var span1 = document.querySelector(".box1")
    var span2 = document.querySelector(".box2")
    var span3= document.querySelector(".box3")
    var span4 = document.querySelector(".box4")

    span1.innerHTML = `${otp1}`
span2.innerHTML = `${otp2}`
    span3.innerHTML = `${otp3}`
    span4.innerHTML = `${otp4}`
}
