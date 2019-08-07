document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');


    buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
            const command = button.getAttribute("command"),
                  buttonValue = button.getAttribute("value");

            switch (command) {
                case 'del':
                    clearDisplay();
                    break;
                case 'add-symbol':
                    addSymbol(buttonValue);
                    break;
                case 'execute':
                    execute();
                    break;
                case 'add-symbol':
                    addSymbol(buttonValue);
                    break;
                case 'del-last':
                    delLast();
                    break;
            }
        });
    });
});


function delLast() {
    const display = document.querySelector(".calculator__display");
    display.textContent = display.textContent.slice(0, -1);

}

function execute() {
    const display = document.querySelector(".calculator__display");
    display.textContent = eval(display.textContent);
}
    

function addSymbol(sym) {
    const display = document.querySelector(".calculator__display");
    display.textContent = display.textContent + sym;
}

function clearDisplay() {
    const display = document.querySelector(".calculator__display");
    display.textContent = '';
}