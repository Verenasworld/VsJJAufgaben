var counter = 0;

function incrementClick() {
    updateDisplay(++counter);
}
function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}