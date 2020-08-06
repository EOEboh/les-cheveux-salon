let slideIndex = 0;
console.log(showSlides(slideIndex));


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
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);

}