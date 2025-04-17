// Get image array from localStorage
const stored = localStorage.getItem('imageGallery');
//use json.parse: parsing string into array
const images = stored ? JSON.parse(stored) : [];

const container = document.getElementById('image-container');

// If an image exists at index 0, display it
if (images.length > 0 && images[0]) {
  const img = document.createElement('img');
  img.src = images[0];
  container.appendChild(img);
} else {
  // Fallback message or image
  const fallback = document.createElement('p');
  fallback.textContent = 'No image found in localStorage.';
  container.appendChild(fallback);
}


function addImageToGallery(path) {
    const stored = localStorage.getItem('imageGallery');
    const gallery = stored ? JSON.parse(stored) : [];
  
    gallery.push(path);
    localStorage.setItem('imageGallery', JSON.stringify(gallery));
  }