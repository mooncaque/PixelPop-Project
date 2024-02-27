const svgElement = document.getElementById('my-svg');
const storedSvgData = localStorage.getItem('mySvgData');
if (storedSvgData) {
    svgElement.innerHTML = storedSvgData;
} else {

    fetch('pixelpop123.svg')
    .then(response => response.text())
    .then(svgData => {

        localStorage.setItem('mySvgData', svgData);

        svgElement.innerHTML = svgData;
    })

    .catch(error => console.error('Error fetching SVG:', error));
    
}
