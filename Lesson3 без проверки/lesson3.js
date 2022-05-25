const firstNumber = Number(prompt('Введите первое число'));
const operator = (prompt('Введите действие +-*/'));
const secondNumber = Number(prompt('Введите второе число'));

if (operator === '+' )  {

   alert('Ваш результат'+ ':' + (firstNumber + secondNumber));

} else if (operator === '-' ) {

    alert('Ваш результат'+ ':' + (firstNumber - secondNumber));

}  else if (operator === '*' ) {

    alert('Ваш результат'+ ':' + (firstNumber * secondNumber));

}  else if (operator === '/' ){

      alert('Ваш результат'+ ':' + (firstNumber / secondNumber));

}
else {
    alert('Такой операции не существует')
}

