var buttons = document.querySelectorAll('button');
var display = document.querySelector('.display');

buttons.forEach(function(button) {

    button.addEventListener('click', () => {
        var result = button.value;
        if(result === '=') {
                display.value = eval(display.value)
        } else if(result === 'C') {
            display.value = "";
        } else {
            display.value += result
        }
    })
})