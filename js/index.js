// Your code goes here
const mainNav = document.querySelector(".main-navigation");
const secondImg = document.querySelector(".img-content");
const signUpBtn = document.querySelector(".btn");

window.addEventListener("load", e => {
    alert("There are 10 Easter Eggs, Can you find them all? Hint: Photograph. 1/10")
});

secondImg.addEventListener("click", e => {
    alert("WOW! You found the easiest one lolololol! Hint: UFO's do this. 2/10")
});

mainNav.addEventListener("mouseover", e => {
    alert("UFO's hover lolol! Hint: click, click. 3/10")
})

document.addEventListener("dblclick", e => {
    alert("That hint was too good! xD! Hint: Sign me up! 4/10")
})

signUpBtn.addEventListener("mouseover", e => {
    alert("Mouse overrr!!! Hint: Move out 5/10")
})

signUpBtn.addEventListener("mouseout", e => {
    alert("Mouse Outtt!! That was a handout lol Hint: 6/10")
})