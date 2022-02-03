//aufgabe 1
let counter = 0;

function incrementClick() {
    updateDisplay(++counter);
}
function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}

//Aufgabe 2

let n1 = document.getElementById("number1");
let n2 = document.getElementById("number2");
let result = document.getElementById("result");

function calculation(operator){
  switch (operator){
      case "+" :
          return result = n1 + n2;
          console.log(result)
          break;
      case "-" :
          return result = n1 - n2;
          break;
      case "*" :
          return result = n1 * n2;
          break;
      case "/" :
          return result = n1 / n2;
          break;
  }


}