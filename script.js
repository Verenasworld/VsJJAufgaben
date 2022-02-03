//Task 1 onclick function
//  click .firstbtn = h3 counter +1
let counter = 0;

function incrementClick() {
    updateDisplay(++counter);
}

function updateDisplay(val) {
    document.getElementById("counter").innerHTML = val;
}

//Task 2 onclick Calc Function
//calc f take a parameter calls operator and add, sub, multi ore div the numbers you add
function calculation(operator) {
    let n1 = parseInt(document.getElementById("number1").value);
    let n2 = parseInt(document.getElementById("number2").value);
    let result;
    switch (operator) {
        case "+" :
            result = n1 + n2;
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