//Author: Zhayida Haishan

"use sprict";

window.onload = init;

function init(){
    const addBtn = document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subBtn");
    const multiplyBtn = document.getElementById("multBtn");
    const divideBtn = document.getElementById("divBtn");
    const clearBtn = document.getElementById("clearBtn");

    addBtn.onclick = onAddBtnClicked;
    subtractBtn.onclick = onSubtractBtnClicked;
    multiplyBtn.onclick = onMultiplyBtnClicked;
    divideBtn.onclick = onDivideBtnClicked;
    clearBtn.onclick = onClearBtnClicked;
}

function onAddBtnClicked(){
    const number1Field = Number(document.getElementById("number1Field").value);
    const number2Field = Number(document.getElementById("number2Field").value);
    const messagePara = document.getElementById("messagePara");
     
    if (isNaN(number1Field) || isNaN(number2Field)) {
        messagePara.innerHTML = "Input is not a number!";
        return;
    }
    const result = number1Field + number2Field;
    document.getElementById("answerField").value = result;

    messagePara.innerHTML = "";
}

function onSubtractBtnClicked(){
    const number1Field = Number(document.getElementById("number1Field").value);
    const number2Field = Number(document.getElementById("number2Field").value);
    const messagePara = document.getElementById("messagePara");
     
    if (isNaN(number1Field) || isNaN(number2Field)) {
        messagePara.innerHTML = "Input is not a number!";
        return;
    }
    const result = number1Field - number2Field;
    document.getElementById("answerField").value = result;

    messagePara.innerHTML = "";
}

function onMultiplyBtnClicked(){
    const number1Field = Number(document.getElementById("number1Field").value);
    const number2Field = Number(document.getElementById("number2Field").value);
    const messagePara = document.getElementById("messagePara");
     
    if (isNaN(number1Field) || isNaN(number2Field)) {
        messagePara.innerHTML = "Input is not a number!";
        return;
    }
    const result = number1Field * number2Field;
    document.getElementById("answerField").value = result;

    messagePara.innerHTML = "";
}

function onDivideBtnClicked(){
    const number1Field = Number(document.getElementById("number1Field").value);
    const number2Field = Number(document.getElementById("number2Field").value);
    const messagePara = document.getElementById("messagePara");
     
    if (isNaN(number1Field) || isNaN(number2Field)) {
        messagePara.innerHTML = "Input is not a number!";
        return;
    }
    const result = number1Field * number2Field;
    document.getElementById("answerField").value = result;

    messagePara.innerHTML = "";
}

function onClearBtnClicked() {
    document.getElementById("number1Field").value = "";
    document.getElementById("number2Field").value = "";
    document.getElementById("answerField").value = "";
}