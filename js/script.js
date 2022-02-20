let inputBox = document.querySelector('.input-box');
let textarea = inputBox.querySelector('textarea');
let signalNum = inputBox.querySelector('.signal_num');

textarea.addEventListener('keyup', () => {
  let valLenght = textarea.value.length;
  signalNum.innerText = valLenght;

  (valLenght > 0) ? inputBox.classList.add('active') : inputBox.classList.remove('active');
  (valLenght > 100) ? inputBox.classList.add('error') : inputBox.classList.remove('error');
})