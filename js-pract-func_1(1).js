/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

let a = [1, 2, true, "str", 0, 14, 11, null];
let sumEven = 0;
let sumOdd = 0;
let sumZero = 0;

function typeOfNumber() {
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] == "number") {
      if (a[i] % 2 === 0 && a[i] !== 0) {
        sumEven++;
      } else if (a[i] === 0) {
        sumZero++;
      } else {
        sumOdd++;
      }
    } else {
      console.log(a[i] + " " + "не является числом");
    }
  }

  console.log(sumEven + " - " + "количество четных элементов");
  console.log(sumOdd + " - " + "количество нечетных элементов");
  console.log(sumZero + " - " + "количество нолей");
}
typeOfNumber();
