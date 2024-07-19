
function addButtonsToCalc() {
    const mainCalc = document.querySelector(".calc");
    calcButtons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "AC", "0", "=", "/"];

    for (let i = 0; i < 4; i++) {
        const calcRow = document.createElement('div');
        for (let j = 0; j < 4; j++) {
            const btn = document.createElement('button');
            btn.textContent = calcButtons[0];
            calcButtons.shift();
            calcRow.appendChild(btn);
        }
        mainCalc.appendChild(calcRow);
    }
}

function buttonFunction() {
    const btn = document.querySelectorAll('button');
    const display = document.querySelector('#display');


    let num1 = [];
    let num2 = [];
    let opperator = "";
    let performOperation = false;
    let newLine = false;

    btn.forEach((button) => {

        button.addEventListener("click", () => {

            if (button.textContent == "AC") {
                num1 = [];
                num2 = [];
                performOperation = false;
                newLine = false;
                display.textContent = "";
            }
            else if ((["+", "-", "*", "/"].includes(button.textContent) && performOperation)) {
                if (num2.length < 1) {
                    alert("Please select a number");
                    return
                }
                let result = opperation(num1, num2, opperator);
                opperator = button.textContent;
                num1 = [];
                num1.push(result);
                num2 = [];
                display.textContent = result + opperator;
            }
            else if (button.textContent == "=") {
                let result = opperation(num1, num2, opperator);
                num1 = [];
                num1.push(result);
                num2 = [];
                display.textContent = result;
                newLine = true;
                performOperation = false;
            }
            else {
                if (["+", "-", "*", "/"].includes(button.textContent)) {
                    performOperation = true;
                    opperator = button.textContent;
                }
                else if (!performOperation) {
                    if (newLine == true) {
                        display.textContent = "";
                        num1 = [];
                        newLine = false;
                    }

                    num1.push(button.textContent);
                }
                else
                    num2.push(button.textContent);


                display.textContent += button.textContent;
            }
        })

    }
    )

}

function opperation(num1, num2, type) {
    num1 = Number(num1.join(""));
    num2 = Number(num2.join(""));

    return type == "+" ? num1 + num2 
    : type == "-" ? num1 - num2 
    : type == "*" ? num1 * num2
    : type == "/" ? num1 / num2
    : undefined;
}


addButtonsToCalc()
buttonFunction();
