function setResult(displayVal) {
    document.getElementById('display').innerHTML = displayVal;
}

function getResult() {
    return (document.getElementById('display').innerHTML);
}

function add(key) {
    var result = getResult();
    if (result != '0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}

function clearDisplay() {
    setResult(0);
    // setResult(document.getElementById('display').innerHTML = "");

}

function equals() {
    var result = eval(getResult()); 
    setResult(result);
}