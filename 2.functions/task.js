function getArrayParams(...arr) {
  let min = Infinity
  let max = -Infinity
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }

    if (arr[i] < min) {
      min = arr[i]
    }

    sum += arr[i]
  }

  let avg = sum / arr.length
  avg = parseFloat(avg.toFixed(2))
  return { min: min, max: max, avg: avg }
}

getArrayParams(-99, 99, 10)
getArrayParams(1, 2, 3, -100, 10)
getArrayParams(5)

function summElementsWorker(...arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(summElementsWorker())
console.log(summElementsWorker(10, 10, 11, 20, 10))

function differenceMaxMinWorker(...arr) {
  let max = Math.max(arr)
  let min = Math.min(arr)
  let difference = max - min
  return difference
}

console.log(differenceMaxMinWorker())
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10))

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0
  let sumOddElement = 0
  let differenceEvenOdd

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
    } else {
      sumOddElement += arr[i]
    }
    differenceEvenOdd = sumEvenElement - sumOddElement
  }
  return differenceEvenOdd
}

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17))
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35))

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0
  let countEvenElement = 0
  let average

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
      countEvenElement++
    }
    average = sumEvenElement / countEvenElement
  }
  return average
}

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9))
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35))

function makeWork (arrOfArr, func) {
  const flatArray = arrOfArr.flat()
  let maxWorkerResult = Math.min(...flatArray)

  for (let i = 0; i < arrOfArr.length; i++) {
    const value = func(...arrOfArr[i])

    if (value > maxWorkerResult) {
      maxWorkerResult = value
    }
  }

  return maxWorkerResult
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]]
console.log(makeWork(arr, summElementsWorker))
console.log(makeWork(arr, differenceMaxMinWorker))
console.log(makeWork(arr, differenceEvenOddWorker))
console.log(makeWork(arr, averageEvenElementsWorker))