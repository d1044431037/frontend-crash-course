// 5-1 Event   (延續practice4)

// Get the necessary elements
const colorInput = document.getElementById('colorInput');
const addColorButton = document.getElementById('addColorButton');
const colorList = document.getElementById('colorList');

// Add event listener to the button
addColorButton.addEventListener('click', function () {
    const newColor = colorInput.value;

    // Create a new li element and set its style
    const liElement = document.createElement('li');
    liElement.style.color = newColor;
    liElement.textContent = newColor;

    // Append the new li element to the color list
    colorList.appendChild(liElement);

    // Clear the input field
    colorInput.value = '';
});
