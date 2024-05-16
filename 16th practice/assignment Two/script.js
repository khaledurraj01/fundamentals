// function calculate() {

//   var num1 = parseFloat(document.getElementById('num1').value);
//   var num2 = parseFloat(document.getElementById('num2').value);

//   if (isNaN(num1) || isNaN(num2)) {
      
//       document.getElementById('result').innerText = "Error: Both inputs must be numbers";
//   } else {
  
//       var sum = num1 + num2;
//       var product = num1 * num2;

//       document.getElementById('result').innerText = "Sum: " + sum + ", Product: " + product;
//   }
// }

function calculate() {
  
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var num3 = parseFloat(document.getElementById('num3').value);

 
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      
      document.getElementById('result').innerText = "Error: All inputs must be numbers";
  } else {
     
      var sum = num1 + num2 + num3;
      var product = num1 * num2 * num3;

    
      document.getElementById('result').innerText = "Sum: " + sum + ", Product: " + product;
  }
}
