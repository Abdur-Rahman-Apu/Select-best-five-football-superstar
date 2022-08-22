function getValueById(inputId) {
    const field = document.getElementById(inputId);
    const fieldValueString = field.value;
    const fieldValue = parseInt(fieldValueString);
    return fieldValue;
}

function setTextById(inputId, value) {
    const textField = document.getElementById(inputId);
    textField.innerText = value;
}