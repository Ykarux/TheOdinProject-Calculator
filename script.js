let firstNumber = 0;
let operator = '+';
let secondNumber = 0;
let writeOnFirst = true;
let result = 0;

const paragraph = document.querySelector('p')

function sum(a, b) {
	return a + b
}

function subtract(a, b) {
	return a - b
}

function multiply(a, b) {
	return a * b
}

function divide(a, b) {
	return (a / b).toFixed(2)
}

function operate(a, b, operator) {
	if (operator === '+') {
		return sum(a, b)
	} else if (operator === '-') {
		return subtract(a, b)
	} else if (operator === '*') {
		return multiply(a, b)
	} else {
		return divide(a, b)
	}
}

function display(text) {
	paragraph.textContent += text
}

function handleClick(e) {
	console.log('|' + e.target.textContent + '|')
	if (e.target.textContent === 'C') {
		firstNumber = 0;
		secondNumber = 0
		result = 0
		paragraph.textContent = ''
		writeOnFirst = true
	} else if (e.target.textContent === '=') {
		if (operator === '/' && secondNumber === 0) {
			paragraph.textContent = 'ERROR'
		} else {
			let result = operate(firstNumber, secondNumber, operator)
			paragraph.textContent = result
			firstNumber = result
			secondNumber = 0;
		}
	} else {
		if (e.target.textContent === '+' ||
			e.target.textContent === '-' ||
			e.target.textContent === '/' ||
			e.target.textContent === '*') {
			operator = e.target.textContent
			writeOnFirst = false
		} else {
			if (writeOnFirst === true) {
				firstNumber += Number(e.target.textContent)
			} else {
				secondNumber += Number(e.target.textContent)
			}
		}
		display(e.target.textContent)
	}
}

const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
	button.addEventListener('click', handleClick)
})