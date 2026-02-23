let history = [];
const historyList = document.getElementById('historyList');
const resultDisplay = document.getElementById('currentResult');

function calculate(operator) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Please enter valid numbers");
        return;
    }

    let res = 0;
    switch (operator) {
        case '+': res = n1 + n2; break;
        case '-': res = n1 - n2; break;
        case '*': res = n1 * n2; break;
        case '/': res = n2 !== 0 ? n1 / n2 : "Error (Div by 0)"; break;
    }

    resultDisplay.textContent = res;
    
    // Create a string for the history record
    const record = `${n1} ${operator} ${n2} = ${res}`;
    updateHistory(record);
}

function updateHistory(newEntry) {
    // Add to the end of the array
    history.push(newEntry);

    // If history exceeds 5, remove the oldest (first) item
    if (history.length > 5) {
        history.shift();
    }

    // DOM Dynamic Update: Clear and rebuild the list
    historyList.innerHTML = ""; 
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}