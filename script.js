// CHANGER LE WALLPAPER

const wp1 = document.querySelector(".wp1")
const wp2 = document.querySelector(".wp2")
const wp3 = document.querySelector(".wp3")
const wp4 = document.querySelector(".wp4")
const backgroundWp = document.querySelector("body");
const bgText = document.querySelector(".bgText")

wp1.addEventListener("click", () => {
    backgroundWp.style.backgroundImage = "radial-gradient(circle, #f9c6ff, #e2cbff, #cccfff, #b8d3ff, #73bbff)";
    backgroundWp.style.backgroundSize = "";
    bgText.style.display = "block"
});

wp2.addEventListener("click", () => {
    backgroundWp.style.backgroundImage = "url('stock img/wallpaper/wallpaper1.png')";
    backgroundWp.style.backgroundSize = "cover";
    bgText.style.display = "none"
})

wp3.addEventListener("click", () => {
    backgroundWp.style.backgroundImage = "url('stock img/wallpaper/wallpaper2.png')";
    backgroundWp.style.backgroundSize = "cover";
    bgText.style.display = "none"
})

wp4.addEventListener("click", () => {
    backgroundWp.style.backgroundImage = "url('stock img/wallpaper/wallpaper3.jpg')";
    backgroundWp.style.backgroundSize = "cover";
    bgText.style.display = "none"
})




const item1 = document.querySelector(".item1")
const item2 = document.querySelector(".item2")
const item3 = document.querySelector(".item3")
const item4 = document.querySelector(".item4")
const myWindow = document.querySelector(".myWindow")
const myWindow2 = document.querySelector(".myWindow2")
const myWindow3 = document.querySelector(".myWindow3")
const myWindow4 = document.querySelector(".myWindow4")

item1.addEventListener("click", () => {
    myWindow.style.display = "block"
});

item2.addEventListener("click", () => {
    myWindow2.style.display = "block"
})

item3.addEventListener("click", () => {
    myWindow3.style.display = "block"
})

item4.addEventListener("click", () => {
    myWindow4.style.display = "block"
})




const rightArrow = document.querySelector(".arrow")
const pp1 = document.querySelector(".pp1")
const pp2 = document.querySelector(".pp2")

rightArrow.addEventListener("click", () => {
    
})