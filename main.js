const pics=["al.jpg", "optimus.jpg" ,"clint.jpg", "arnold.jpg", "amit.jpg", "clark.jpg"];
const header=document.querySelector(".brain");
let x=0;



function changeImage() {
    header.src = "pics/" + pics[x]; 
    x = (x + 1) % pics.length; 
}

setInterval(changeImage, 1000);