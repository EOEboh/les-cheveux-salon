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

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let theSlides = document.getElementsByClassName('catalogueSlide');
    let theDots = document.getElementsByClassName('dot2');

    if(n > theSlides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = theSlides.length
    }
    for( i =0; i < theSlides.length; i++){
        theSlides[i].style.display = "none";
    }
    for(i = 0; i < theDots.length; i++){
        theDots[i].className = theDots[i].className.replace("active", "");
    }

    theSlides[slideIndex - 1].style.display = "block";
    theDots[slideIndex-1].className += " active";
}



