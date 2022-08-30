/*feedback alert*/
function feedback()
{
   window.alert("Thank You For Your Feedback.");
}

/*for slideshow*/
var slideshow_1 = document.getElementById("slideshow_1");
slideshow_1.currentSlideIndex = 1;
show(slideshow_1.currentSlideIndex, slideshow_1);

var slideshow_2 = document.getElementById("slideshow_2");
slideshow_2.currentSlideIndex = 1;
show(slideshow_2.currentSlideIndex, slideshow_2);

var slideshow_3 = document.getElementById("slideshow_3");
slideshow_3.currentSlideIndex = 1;
show(slideshow_3.currentSlideIndex, slideshow_3);

var slideshow_4 = document.getElementById("slideshow_4");
slideshow_4.currentSlideIndex = 1;
show(slideshow_4.currentSlideIndex, slideshow_4);

var slideshow_5 = document.getElementById("slideshow_5");
slideshow_5.currentSlideIndex = 1;
show(slideshow_5.currentSlideIndex, slideshow_5);

var slideshow_6 = document.getElementById("slideshow_6");
slideshow_6.currentSlideIndex = 1;
show(slideshow_6.currentSlideIndex, slideshow_6);

function previousSlide(i, slideshow) {
  show(slideshow.currentSlideIndex += i, slideshow);
}

function currentSlide(i, slideshow) {
  show(slideshow.currentSlideIndex = i, slideshow);
}

function show(i, slideshow) {
  
  var j;
  var slide = slideshow.getElementsByClassName("mySlides");
  var dotnum = slideshow.getElementsByClassName("dot");
  if (i > slide.length) 
  {
      slideshow.currentSlideIndex = 1
  }    
  if (i < 1) 
  {
      slideshow.currentSlideIndex = slide.length
  }
  for (j = 0; j < slide.length; j++) 
  {
      slide[j].style.display = "none";  
  }
  for (j = 0; j < dotnum.length; j++) 
  {
      dotnum[j].className = dotnum[j].className.replace(" active", "");
  }
  slide[slideshow.currentSlideIndex-1].style.display = "block";  
  dotnum[slideshow.currentSlideIndex-1].className += " active";
}


