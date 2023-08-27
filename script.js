let buffer = '0';
let currenTotal = 0;
let currentSymbol;

const panel = document.querySelector('.panelText');

function buttonPressed(symbol){
    if(isNaN(symbol)){
        handleSymbol(symbol);
    }
    else{
        handleNum(symbol);
    }
    panel.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case "C":
            buffer = '0';
            currenTotal = 0;
            currentSymbol = null;
            break;
        
        case "↞":
            if(buffer.length == 1){
                buffer = '0';
            }else{
                buffer = buffer.substring(0,buffer.length-1);
            }
            break;
        
        case "=":
            if(currentSymbol == null){
                return
            }else{
                const bufferInt = parseInt(buffer);
                flushOperation(bufferInt);
            }
            break;
        
        case '+':
        case '-':
        case 'x':
        case '÷':
            currenTotal = parseInt(buffer);
            currentSymbol = symbol;
            buffer = '0';
            handleMath(symbol);
            break;
    }
}

function handleNum(number){
    const numberString = number.toString()
    if(buffer == '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function handleMath(symbol){
    const bufferInt = parseInt(buffer);
    currenTotal += bufferInt;
    currentSymbol = symbol;
}

function flushOperation(number){
    switch(currentSymbol){
        case '+':
            currenTotal += number;
            buffer = currenTotal.toString();
            currenTotal = 0;
            currentSymbol = null;
            break;
            
        case '-':
            currenTotal -= number;
            buffer = currenTotal.toString();
            currenTotal = 0;
            currentSymbol = null;
            break;
        case 'x':
            currenTotal *= number;
            buffer = currenTotal.toString();
            currenTotal = 0;
            currentSymbol = null;
            break;
        case '÷':
            currenTotal /= number;
            buffer = currenTotal.toString();
            currenTotal = 0;
            currentSymbol = null;
            break;

    }
}

function init(){
    const btn = document.querySelectorAll('.calc-button');
    btn.forEach(button => {
        button.addEventListener('click', () => {
            buttonPressed(event.target.innerText);
        })
    });
}
init();

