
function addInputField() {
  const container = document.getElementById('container');

  
  const input = document.createElement('input');
  input.type = 'text';


  const display = document.createElement('span');

  
  input.addEventListener('input', function() {
    display.textContent = input.value;
  });

  
  const button = document.createElement('button');
  button.textContent = 'Submit';

  
  button.addEventListener('click', function() {
    
    const value = input.value;
    console.log('Input value:', value);
  });

  
  container.appendChild(input);
  container.appendChild(display);
  container.appendChild(button);
}

document.getElementById('addInput').addEventListener('click', addInputField);
