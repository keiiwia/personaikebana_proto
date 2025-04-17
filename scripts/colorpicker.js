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

colorPicker.addEventListener('input', () => {
  const hex = colorPicker.value;
  const rgb = hexToRgb(hex);
  localStorage.setItem('chosenColorRGB', JSON.stringify(rgb));
});

// Helper: Convert HEX to RGB
function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}