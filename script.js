let result = document.getElementById('result');

function addToResult(value) {
  result.value += value;
}

function calculate(operator) {
  if (operator === '=') {
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = 'Error';
    }
  } else {
    result.value += operator;
  }
}

function clearResult() {
  result.value = '';
}

function deleteLastCharacter() {
  result.value = result.value.slice(0, -1);
}