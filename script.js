let a = document.querySelector(".btn1")
let c = document.querySelector(".btn2")
let b =document.body
a.addEventListener("click",function(){
    b.style.backgroundColor = "black"
    b.style.color = "white"
    a.style.backgroundColor = "white"
    c.style.backgroundColor = "white"
    c.style.color = "black"
    a.style.color = "black"
})
c.addEventListener("click",function(){
    a.style.backgroundColor = "black"
    c.style.backgroundColor = "black"
    c.style.color = "white"
    a.style.color = "white"
    b.style.backgroundColor = "white"
    b.style.color = "black"
})