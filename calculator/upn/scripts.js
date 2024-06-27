let stack = []; // Initialisierung des Stacks

function clearStack() {
  stack = []; // Leeren des Stacks
  updateStackDisplay(); // Stack-Anzeige aktualisieren
}

function appendToDisplay(value) {
  document.getElementById("display").value += value; // Wert an das Display anhängen
}

function enter() {
  let value = document.getElementById("display").value;
  stack.push(value); // Wert zum Stack hinzufügen
  updateStackDisplay(); // Stack-Anzeige aktualisieren
  document.getElementById("display").value = ''; // Display leeren
}

function drop() {
  if (stack.length > 0) {
    stack.pop(); // Letztes Element vom Stack entfernen
    updateStackDisplay(); // Stack-Anzeige aktualisieren
  }
}

function updateStackDisplay() {
  let stackElement = document.getElementById("stack");
  stackElement.innerHTML = '';
  for (let i = stack.length - 1; i >= 0; i--) {
    let span = document.createElement('span');
    span.textContent = stack[i];
    stackElement.appendChild(span);
    stackElement.appendChild(document.createElement('br'));
  }
}


function operate(op) {
  if (stack.length < 1) return;
  
  let b, a, result;
  
  switch (op) {
    case '+':
      if (stack.length < 2) return;
      b = stack.pop();
      a = stack.pop();
      result = a + b;
      break;
    case '-':
      if (stack.length < 2) return;
      b = stack.pop();
      a = stack.pop();
      result = a - b;
      break;
    case '*':
      if (stack.length < 2) return;
      b = stack.pop();
      a = stack.pop();
      result = a * b;
      break;
    case '/':
      if (stack.length < 2) return;
      b = stack.pop();
      a = stack.pop();
      result = a / b;
      break;
    case 'sin':
      a = stack.pop();
      result = Math.sin(a);
      break;
    case 'cos':
      a = stack.pop();
      result = Math.cos(a);
      break;
    case 'tan':
      a = stack.pop();
      result = Math.tan(a);
      break;
    case 'log':
      a = stack.pop();
      result = Math.log(a);
      break;
    case 'sqrt':
      a = stack.pop();
      result = Math.sqrt(a);
      break;
    case 'pow':
      if (stack.length < 2) return;
      b = stack.pop();
      a = stack.pop();
      result = Math.pow(a, b);
      break;
    default:
      return;
  }
  
  stack.push(result);
  updateStackDisplay();
}
