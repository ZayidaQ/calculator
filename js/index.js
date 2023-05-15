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
    //find HTML elements
    const number1Field = Number(document.getElementById("number1Field").value);
    const number2Field = Number(document.getElementById("number2Field").value);
    const messagePara = document.getElementById("messagePara");

    // check to see of user inputs were invalid
    if (isNaN(number1Field) || isNaN(number2Field)) {
        messagePara.innerHTML = "One or more of your input values are invalid";
        return; // exit the addBtnClicked function
    }

    const answer = number1Field + number2Field;
    const answerField = document.getElementById("answerField");
    answerField.value = answer;

    // clear any previous error message
    messagePara.innerHTML = "";
}

function onSubtractBtnClicked(){
    //find HTML elements
    const number1Field = Number(document.getElementById("number1Field").value);
    const number2Field = Number(document.getElementById("number2Field").value);
    const messagePara = document.getElementById("messagePara");

    // check to see of user inputs were invalid
    if (isNaN(number1Field) || isNaN(number2Field)) {
        messagePara.innerHTML = "One or more of your input values are invalid";
        return; // exit the addBtnClicked function
    }

    const answer = number1Field - number2Field;
    const answerField = document.getElementById("answerField");
    answerField.value = answer;

    // clear any previous error message
    messagePara.innerHTML = "";
}

function onMultiplyBtnClicked(){
    //find HTML elements
    const number1Field = Number(document.getElementById("number1Field").value);
    const number2Field = Number(document.getElementById("number2Field").value);
    const messagePara = document.getElementById("messagePara");

    // check to see of user inputs were invalid
    if (isNaN(number1Field) || isNaN(number2Field)) {
        messagePara.innerHTML = "One or more of your input values are invalid";
        return; // exit the addBtnClicked function
    }

    const answer = number1Field * number2Field;
    const answerField = document.getElementById("answerField");
    answerField.value = answer;

    // clear any previous error message
    messagePara.innerHTML = "";
}

function onDivideBtnClicked(){
    //find HTML elements
    const number1Field = Number(document.getElementById("number1Field").value);
    const number2Field = Number(document.getElementById("number2Field").value);
    const messagePara = document.getElementById("messagePara");

    // check to see of user inputs were invalid
    if (isNaN(number1Field) || isNaN(number2Field)) {
        messagePara.innerHTML = "One or more of your input values are invalid";
        return; // exit the addBtnClicked function
    }

    const answer = number1Field / number2Field;
    const answerField = document.getElementById("answerField");
    answerField.value = answer;

    // clear any previous error message
    messagePara.innerHTML = "";
}

function onClearBtnClicked() {
    document.getElementById("number1Field").value = "";
    document.getElementById("number2Field").value = "";
    document.getElementById("answerField").value = "";
}