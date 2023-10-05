// How can you make this more scalable and reusable later?

function findArmstrongNumbers(numbers) {
  let output = [];
  for (number in numbers) {
    let digits = number.toString().split("");
    const quantity_digits = digits.length;
    let arr_num = digits.map(Number);
    let sum = 0;
    for (digit of arr_num) {
      let pow = Math.pow(digit, quantity_digits);
      sum += pow;
    }
    if (sum == number) {
      output.push(Number(number));
    }
  }
  return output;
}

module.exports = findArmstrongNumbers;