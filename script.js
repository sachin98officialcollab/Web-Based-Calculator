
function append(value) {
    document.getElementById("answerarea").value += value;
}
function clearDisplay() {
    document.getElementById("answerarea").value = "";
}
function calculate() {
    try {
        document.getElementById("answerarea").value = eval(document.getElementById("answerarea").value);
    } catch {
        document.getElementById("answerarea").value = "Error";
    }
}