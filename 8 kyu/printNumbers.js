// Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке.Для этого нужно идти от верхней границы к нижней.То есть счётчик должен быть инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.

const printNumbers = (initialNumber) => {
  let i = initialNumber;
  while (i >= 1) {
    console.log(i);
    i = i - 1;
  }
  console.log('finished!');
};