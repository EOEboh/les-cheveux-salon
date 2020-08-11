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
// Google maps for the location
// Initialize and add the map
function initMap() {
    
    var lagos = {lat: 6.489252, lng:3.358009};
    
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: lagos});

    var marker = new google.maps.Marker({position: uluru, map: map});
  }

//   generating the random code
  function newCode(){
    let theCode = [1224, 5673, 0342,2373,7373,7436,2434, 4536, 5462];
      let randomCode = Math.floor(Math.random() * (theCode.length))
      document.getElementById('code').innerHTML = theCode[randomCode]

  }

