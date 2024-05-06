/*const container= document.querySelector(".image-container");

const prev=document.querySelector(".prev")
const next=document.querySelector(".next");
prev.style.display="None";
next.style.display="None";

const headerPic=document.getElementsByClassName("brain");
const pics=["al.jpg", "optimus.jpg" ,"clint.jpg", "arnold.jpg", "amit.jpg", "clark.jpg"];
let x=0;

headerPic.style.display="none";

/*
function changeImage() {
    headerPic.src = "pics/" + pics[x]; 
    x = (x + 1) % pics.length; 
}

setInterval(changeImage, 1000);

// Call the changeImage function initially to set the initial image


prev.addEventListener("click", ()=>{
    x=x+45;
    updateGallery();
});

next.addEventListener("click", ()=>{
    x=x-45;
    updateGallery();
})
*/

const container= document.querySelector(".image-container");

const prev=document.querySelector(".prev")
const next=document.querySelector(".next");
prev.style.display="None";
next.style.display="None";
let y=0

function updateGallery(){
    y=y+45;
    container.style.transform= `perspective(1000px) rotateY(${y}deg)`
}

setInterval(updateGallery,2000);

