const displayInput = document.getElementById('display');
let screenValue = '';
document.getElementById('btn-container').addEventListener('click', (e) => {
  const number = e.target.innerText;
  if (e.target.tagName.toLowerCase() !== 'div') {
    if (isNaN(number)) {
    }
    if (number === 'C') {
      screenValue = '';
      displayInput.value = screenValue;
    } else if (number === '<') {
      displayInput.value = displayInput.value.slice(0, -1);
    } else if (number === '=') {
      displayInput.value = eval(screenValue);
    } else if (number === '√') {
      displayInput.value = '√' + screenValue;
      screenValue = Math.sqrt(screenValue);
    } else {
      screenValue = screenValue + number;
      displayInput.value = screenValue;
      console.log(screenValue);
    }
  }
});
