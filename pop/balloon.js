document.addEventListener('DOMContentLoaded', () => {
    const balloonsContainer = document.getElementById('balloons-container');
    const numberOfBalloons = 16;

    for (let i = 1; i <= numberOfBalloons; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.innerHTML = `<img src="balloon${i}.png" alt="Balloon ${i}">`;

      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;

      balloon.style.left = `${randomX}px`;
      balloon.style.top = `${randomY}px`;
      balloon.style.animationDelay = '0.1s'; 
      balloonsContainer.appendChild(balloon);
    }
  }); 