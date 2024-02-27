window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").classList.add("scrolled");
    document.querySelector(".logo svg").classList.add("scrolled");
	document.querySelector(".menu").classList.add("scrolled");
	document.querySelector(".hamburger2").classList.add("scrolled");
	document.querySelector(".hamburger2 div").classList.add("scrolled");
	
  } else {
    document.querySelector("header").classList.remove("scrolled");
    document.querySelector(".logo svg").classList.remove("scrolled");
	document.querySelector(".menu").classList.remove("scrolled");
	document.querySelector(".hamburger2").classList.remove("scrolled");
	document.querySelector(".hamburger2 div").classList.remove("scrolled");
	
  }
}