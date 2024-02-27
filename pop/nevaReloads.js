function loadImageFromLocalStorage(imageElement, storageKey) {
    const storedImageUrl = localStorage.getItem(storageKey);
    if (storedImageUrl) {
        imageElement.setAttribute('src', storedImageUrl);
    }
}

function fetchAndCacheImage(imageElement, imageUrl, storageKey) {
    const storedImageUrl = localStorage.getItem(storageKey);
    if (storedImageUrl) {
        imageElement.setAttribute('src', storedImageUrl);
    } else {
        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                imageElement.setAttribute('src', imageUrl);
                localStorage.setItem(storageKey, imageUrl);
            })
            .catch(error => console.error('Error fetching image:', error));
    }
}

// Load and cache background image
const backgroundImage = document.getElementById('background-image');
loadImageFromLocalStorage(backgroundImage, 'backgroundImageData');
if (!backgroundImage.getAttribute('src')) {
    fetchAndCacheImage(backgroundImage, '1234-2.JPG', 'backgroundImageData');
}

// Load and cache Facebook image
const fbImage = document.getElementById('fb');
loadImageFromLocalStorage(fbImage, 'fbImageData');
if (!fbImage.getAttribute('src')) {
    fetchAndCacheImage(fbImage, 'fb1.png', 'fbImageData');
}

// Load and cache Instagram image
const instaImage = document.getElementById('insta');
loadImageFromLocalStorage(instaImage, 'instaImageData');
if (!instaImage.getAttribute('src')) {
    fetchAndCacheImage(instaImage, 'insta1.png', 'instaImageData');
}

// Load and cache Email image
const mailImage = document.getElementById('mail');
loadImageFromLocalStorage(mailImage, 'mailImageData');
if (!mailImage.getAttribute('src')) {
    fetchAndCacheImage(mailImage, 'mail1.png', 'mailImageData');
}
