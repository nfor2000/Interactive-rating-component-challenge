const submitBtn = document.querySelector(".submit-btn")
const ImageContainer = document.querySelector(".rating-image")
const texto = document.querySelector("#text")
const title = document.querySelector("#title")
const image = document.querySelector("#image")
const numBers = document.querySelector(".number") 
const num = document.querySelectorAll(".num-btn")
const num1 = document.querySelector(".num1")
const num2 = document.querySelector(".num2")
const num3 = document.querySelector(".num3")
const num4 = document.querySelector(".num4")
const num5 = document.querySelector(".num5")

submitBtn.addEventListener("click",function(){
    image.style.display = "none"
    let newImage = document.createElement("img")
    newImage.src = "images/illustration-thank-you.svg"
    newImage.classList.add("image-style")
    ImageContainer.append(newImage)
    const newBtn = document.createElement("button")
    newBtn.innerHTML = `You selected ${JSON.parse(localStorage.getItem("Value"))} out of 5`
    newBtn.classList.add("newbtn")
    ImageContainer.append(newBtn)
    ImageContainer.classList.add("style")
    texto.style.textAlign = "center"
    title.style.textAlign = "center"
    title.textContent = "Thank you!"
    texto.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
    submitBtn.style.display = "none"
    numBers.style.display = "none"
    
})
num1.addEventListener("click" ,function(){
    let value = 1
    localStorage.setItem("Value",JSON.stringify(value))
})
num2.addEventListener("click" ,function(){
    let value = 2
    localStorage.setItem("Value",JSON.stringify(value))
})
num3.addEventListener("click" ,function(){
    let value = 3
    localStorage.setItem("Value",JSON.stringify(value))
})
num4.addEventListener("click" ,function(){
    let value = 4
    localStorage.setItem("Value",JSON.stringify(value))
})
num5.addEventListener("click" ,function(){
    let value = 5
    localStorage.setItem("Value",JSON.stringify(value))
})