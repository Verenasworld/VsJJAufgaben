//aufgabe 1
let counter = 0;


function incrementClick() {
    updateDisplay(++counter);
}
function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}

//Aufgabe 2

function calculation(operator){
    let n1 = parseInt(document.getElementById("number1").value);
    let n2 = parseInt(document.getElementById("number2").value);
    let result;
    switch (operator){
        case "+" :
            result = n1 + n2;
            //trainer war da !! aber so läuft es jetzt echt gut ich hab die variablen mit let deklariert und sie
            //ausserhalb meiner funktion geschrieben ich dodl

            break;
        case "-" :
             result = n1 - n2;
            break;
        case "*" :
             result = n1 * n2;
            break;
        case "/" :
             result = n1 / n2;
            break;
    }
  document.getElementById('result').innerHTML = result;
}