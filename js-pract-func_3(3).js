/*Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.*/

function getArg1(arg1) {
  return function getArg2(arg2) {
    return arg1 + arg2;
  };
}

let funcArg1 = getArg1(4);
let funcArg2 = funcArg1(2);

console.log(`сумма 4 и 2 = ${funcArg2}`);
