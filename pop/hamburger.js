function toggleMenu() {
    const hamburger = document.querySelector('.hamburger2');
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('.menu');
    const content = document.querySelector('.content');
  
    hamburger.classList.toggle('active');
    overlay.style.display = (overlay.style.display === "block") ? "none" : "block";
    menu.style.left = (menu.style.left === "0px") ? "-250px" : "0";
    content.style.marginLeft = (content.style.marginLeft === "0px") ? "0" : "250px";
  
    // Update tooltip content based on the 'active' class
    const tooltipText = hamburger.classList.contains('active') ? 'Close' : 'Menu';
    hamburger.setAttribute('data-tooltip', tooltipText);
  }
  
  function closeMenu() {
    const hamburger = document.querySelector('.hamburger2');
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('.menu');
    const content = document.querySelector('.content');
  
    hamburger.classList.remove('active');
    overlay.style.display = "none";
    menu.style.left = "-250px";
    content.style.marginLeft = "0";
  
    // Update tooltip content to 'Menu' when closing
    hamburger.setAttribute('data-tooltip', 'Menu');
  }

  


  function toggleMenu1() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
}