
// Каждый день аренды автомобиля стоит 40 долларов.Если вы арендуете автомобиль на 7 или более дней, вы получаете скидку в размере 50 долларов США.В качестве альтернативы, если вы арендуете автомобиль на 3 или более дней, вы получаете скидку в размере 20 долларов США.

// Напишите код, который выдает общую сумму за разные дни(d).

function rentalCarCost(d) {
  let a = d * 40;
  if (d >= 7) {
    return a - 50
  } else if (d >= 3) {
    return a - 20
  }
  else return a
}