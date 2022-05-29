// Бобу скучно на уроках физики, поэтому он соорудил себе ящик для игрушек, чтобы скоротать время.Ящик особенный, потому что он имеет возможность изменять гравитацию.

// В коробке несколько столбцов игрушечных кубиков, выстроенных в линию.i - й столбец содержит a_iкубы.Сначала гравитация в коробке тянет кубики вниз.Когда Боб переключает гравитацию, он начинает притягивать все кубики к определенной стороне коробки d, которая может быть либо 'L'или 'R'(левой или правой).Ниже приведен пример того, как может выглядеть коробка с кубиками до и после переключения гравитации.

// + --- +                                       +--- +
// |   |                                       |   |
//   +--- +                                       +--- +
//   +--- ++--- +     +--- +              +--- ++--- ++--- +
// |   ||   |     |   | -->        |   ||   ||   |
//     +--- ++--- +     +--- +              +--- ++--- ++--- +
//       +--- ++--- ++--- ++--- +         +--- ++--- ++--- ++--- +
// |   ||   ||   ||   |         |   ||   ||   ||   |
//         +--- ++--- ++--- ++--- +         +--- ++--- ++--- ++--- +
// Зная начальную конфигурацию кубиков в коробке, узнайте, 
// сколько кубиков окажется в каждой из n колонок после того,как Боб переключит гравитацию.

//             Примеры(ввод -> вывод:
// * 'R', [3, 2, 1, 2] -> [1, 2, 2, 3]
//   'L', [1, 4, 5, 3, 5] -> [5, 5, 4, 3, 1]

const flip = (d, a) => {
  let newArr = [];
  let arr = a.slice();
  let first = 0;
  let last = arr.length - 1;
  let temp;
  if (d === 'L') {
    while (first < last) {
      temp = arr[first];
      arr[first] = arr[last];
      arr[last] = temp;
      first++;
      last--;
    }
  } else if (d === 'R') {
    while (first < last) {
      temp = arr[first];
      arr[first] = arr[last];
      arr[last] = temp;
      first++;
      last--;
    }
  }
  return arr;
}