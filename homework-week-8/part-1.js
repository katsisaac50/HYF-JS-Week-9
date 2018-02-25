function createNumbersArray(start, end) {
    const numbersArray = [];
    for (let number = start; number <= end; number++) {
        numbersArray.push(number);
    }

    return numbersArray;
}

function divisibilityCheckerFactory(n) {
    const checker = x => x % n === 0;
    return checker;
}




const numbers = createNumbersArray(1, 5000);
const dividers = createNumbersArray(1, 50);

const result = dividers.map(x => {
    const filteredNumbers = numbers.filter(divisibilityCheckerFactory(x));
    return filteredNumbers.length;
});

console.log(result);

// x = 1
// >> 1000

// x = 2
// >> 500


// console.log(numbers);

// const divisibileBy3 = divisibilityCheckerFactory(3);


// console.log();
