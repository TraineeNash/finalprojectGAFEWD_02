
document.querySelector(".menu__toggle").addEventListener("click", function(){
    let x = document.querySelector(".nav");
    if (x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
})