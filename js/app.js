// variables

const themeSelectorBtn = document.getElementById('theme-selector-button');
let keypadBtns = Array.from(document.querySelectorAll('button'));
const display = document.querySelector('.display');
const app = document.querySelector('html')

themeSelectorBtn.addEventListener('input', () => {
  let currentValue = themeSelectorBtn.value;
  if(currentValue == 0){
    app.dataset.colormode = 'theme-1';
  } else if(currentValue == 1) {
    app.dataset.colormode = 'theme-2';
  } else {
    app.dataset.colormode = 'theme-3';
  }
})

keypadBtns.forEach(button => {
  button.addEventListener('click', (event) => {
    console.log('click');
    switch(event.target.innerHTML){
      case 'RESET':
        display.innerHTML = '';
        break;
      case 'DEL':
        if(display.innerHTML){
          display.innerHTML = display.innerHTML.slice(0, -1);
        } break;
      case '=':
        try {
          display.innerHTML = eval(display.innerHTML.replace('x', '*'));
        } catch {
          display.innerHTML = 'ERROR!'
        }
        break;
      default: 
        display.innerHTML += event.target.innerHTML;
    }
  })
})