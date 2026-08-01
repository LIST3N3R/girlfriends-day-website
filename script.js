function showMessage() {

    document.getElementById("loveMessage").style.display = "block";

    // play background music
     document.getElementById("bgMusic").play();

    const photos = document.querySelectorAll(".photo");

    photos.forEach((photo,index) => {

        setTimeout(() => {

            photo.classList.add("show");

        },700*index);

    });

}

function createHeart(){

 const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (Math.random() * 25 + 15) + "px";

    heart.style.animationDuration = (Math.random() * 3 + 4)+ "s";

    document.body.appendChild(heart);

    setTimeout(() =>{

        heart.remove();

    },7000);

}

setInterval(createHeart, 300);
function unlockWebsite(){

    const password = document.getElementById("password").value;

    if(password === "010126 Valerie"){

        document.getElementById("lockScreen").style.display = "none";

        document.getElementById("website").style.display = "block";

    }

    else{

        document.getElementById("error").innerHTML =
        "❌ Wrong password ❤️";

    }

}