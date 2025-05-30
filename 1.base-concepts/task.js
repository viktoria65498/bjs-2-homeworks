"use strict"

function solveEquation(a, b, c) {
  let arr = []
  let d = b**2 - 4 * a * c

  if (d === 0) {
    arr = [-b / (2 * a)]
  } else if (d > 0) {
    arr = [(- b + Math.sqrt(d) ) / (2 * a), (- b - Math.sqrt(d) ) / (2 * a)]
  }
  return arr
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12
  let loanBody = amount - contribution
  let monthlyPayment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)))
  let totalAmount = monthlyPayment * countMonths
  let rounded = Number(totalAmount.toFixed(2))
  return rounded
}

console.log(solveEquation())
console.log(calculateTotalMortgage())