// Get a reference to the favicon link element
var favicon = document.getElementById('favicon');


favicon.addEventListener('mouseover', function() {
    favicon.href = 'balloon7.png'; 
});


favicon.addEventListener('mouseout', function() {
    favicon.href = 'balloon5.png'; 
});
