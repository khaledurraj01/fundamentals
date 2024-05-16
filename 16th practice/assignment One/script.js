const popupButton = document.getElementById('popupButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
const deleteButton = document.getElementById('deleteButton');
let textInputValue = "";


popupButton.addEventListener('click', function() {
    popup.style.display = 'block';
});


closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
});

deleteButton.addEventListener('click', function() {
    console.log("Deleting: " + textInputValue);
  
    document.getElementById('textInput').value = "";
});

document.getElementById('textInput').addEventListener('input', function(event) {
    
    textInputValue = event.target.value;
});