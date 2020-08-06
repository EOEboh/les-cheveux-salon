// for opening the nav links
function openNav(){
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("logo").style.marginLeft ="250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.3)";

}
// for closing the nav bar
function closeNav(){
    document.getElementById("sideNav").style.width = "0";

    document.getElementById("logo").style.marginLeft = "0"

    document.body.style.backgroundColor = "white";
}
// for the sliding images
let slideIndex = 0;
showSlides(slideIndex);


function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mainSlides");
    let dots = document.getElementsByClassName("dots");
    
    for (i =0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    for (i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    if (slideIndex > slides.length){ slideIndex = 1}
    
    // when the images moves, it would display
    slides[slideIndex - 1].style.display = "block";
    // when the images moves, the corresponding dot becomes "active" 
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 5000);

}
