//debugging uses
// let colorPicker = document.getElementById('favcolor');
// let selectedColor = colorPicker.value;
// console.log("Selected color: " + selectedColor);

// colorPicker.addEventListener('input', function() {
//     console.log("Color changed (input event): " + this.value);
//   });

//   colorPicker.addEventListener('change', function() {
//     console.log("Color changed (change event): " + this.value);
//   });


const colorPicker = document.getElementById('color-picker');


// Load saved color on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
      document.documentElement.style.backgroundColor = savedColor;
      document.body.style.backgroundColor = savedColor;
      colorPicker.value = savedColor;
    }
  });
  
  // Change background on input and save to localStorage
  colorPicker.addEventListener('input', () => {
    const chosenColor = colorPicker.value;
    document.body.style.backgroundColor = chosenColor;
    localStorage.setItem('bgColor', chosenColor);
  });