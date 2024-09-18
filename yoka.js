const observer = new IntersectionObserver((entries) => {
    entries.forEach ((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('visible');

        } else{entry.target.classList.remove('visible')
    }
});
});
const fadejsElements = document.querySelectorAll('.fadejs');
    fadejsElements.forEach((el) =>observer.observe(el));
    //IMAGE SLIDER
   const slides = document.querySelectorAll(".slides img");
   let slideIndex = 0;
   let intervalId = null;
   //initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);
   function initializeSlider(){
    if(slides.length > 0){
        slides [slideIndex].classList.add("displaySlide");
   intervalId = setInterval(nextSlide, 2500);

    }

    
   
}
   function showSlide(index){
    if(index >= slides.length){
slideIndex= 0;
    }
    else if(index < 0){
slideIndex = slides.length - 1;
    }
slides.forEach(slide => {
slide.classList.remove("displaySlide");
});
slides[slideIndex].classList.add("displaySlide")
   }
   function prevSlide(){

   }
   function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);

   }
