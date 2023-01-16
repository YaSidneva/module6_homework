/*Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.*/


function defOfNum(number) {
  let del = 0;
  if (number > 1000 || number < 0) {
    console.log("данные не верны");
  } else if (number === 1 || number === 0) {
    console.log(`${number} - ни простое, ни составное`);
  } else {
    for (let i = 0; i <= number; i++) {
      if (number % i === 0) {
        del++;
      }
    }
    if (del > 2) {
      console.log(`${number} - составное число`);
    } else {
      console.log(`${number} - простое число`);
    }
  }
}

defOfNum(12);
