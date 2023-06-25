let firstNumber = '';
let operator = '';
let secondNumber = '';
let writeOnFirst = true;
let result = 0;

const paragraph = document.querySelector('p')

function sum(a, b) {
	return (a + b).toFixed(2)
}

function subtract(a, b) {
	return (a - b).toFixed(2)
}

function multiply(a, b) {
	return (a * b).toFixed(2)
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
	if (e.target.textContent === 'C') {
		firstNumber = '';
		secondNumber = '';
		result = 0
		paragraph.textContent = ''
		writeOnFirst = true
	} else if (e.target.textContent === '=') {
		if (operator === '/' && secondNumber == 0) {
			paragraph.textContent = 'ERROR'
		} else {
			console.log(firstNumber + ' ' + parseFloat(firstNumber))
			console.log(parseFloat(secondNumber))
			let result = operate(Number(firstNumber), Number(secondNumber), operator)
			paragraph.textContent = result
			firstNumber = result.toString()
			secondNumber = '';
			operator = '';
			writeOnFirst = true
		}
	} else {
		if ((e.target.textContent === '+' ||
			e.target.textContent === '-' ||
			e.target.textContent === '/' ||
			e.target.textContent === '*') && operator === '') {
			operator = e.target.textContent
			writeOnFirst = false
			display(e.target.textContent)
		} else {
			if (writeOnFirst === true) {
				if (!(firstNumber.includes('.') && e.target.textContent === '.')) {
					firstNumber += e.target.textContent
					display(e.target.textContent)
				}
			} else {
				if (!(secondNumber.includes('.') && e.target.textContent === '.')) {
					secondNumber += e.target.textContent
					display(e.target.textContent)
				}
			}
		}
	}
}

const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
	button.addEventListener('click', handleClick)
})