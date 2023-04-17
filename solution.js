const sumTwoSmallestNumbers = (number) => {
    let sorted = number.sort((x, y) => x - y)
        return sorted[0] + sorted[1]
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])) // 7
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) // 6
