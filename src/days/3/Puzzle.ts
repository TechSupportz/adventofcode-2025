const getLargestInteger = (number: string): { integer: number; index: number } => {
    let largestInt = 0

    for (let numChar of number) {
        const intNumChar = parseInt(numChar)
        if (intNumChar > largestInt) largestInt = intNumChar
    }

    return {
        integer: largestInt,
        index: number.indexOf(largestInt.toString()),
    }
}

const getSmallestInteger = (number: string): { integer: number; index: number } => {
    let smallestInt = 9

    for (let numChar of number) {
        const intNumChar = parseInt(numChar)
        if (intNumChar < smallestInt) smallestInt = intNumChar
    }

    return {
        integer: smallestInt,
        index: number.indexOf(smallestInt.toString()),
    }
}

const first = (input: string) => {
    const banks = input.split("\n")
    let totalJoltage = 0

    for (let bank of banks) {
        const tensValue = getLargestInteger(bank.slice(0, -1))
        const onesValue = getLargestInteger(bank.slice(tensValue.index + 1))

        totalJoltage = totalJoltage + parseInt(`${tensValue.integer}${onesValue.integer}`)
    }

    return totalJoltage
}

const expectedFirstSolution = 357

const second = (input: string) => {
    const banks = input.split("\n")
    let totalJoltage = 0

    for (let bank of banks) {
        let joltage = ""
        let startIndex = 0

        for (let i = 0; i < 12; i++) {
            const remainingDigits = 12 - i
            const largestValue = getLargestInteger(
                bank.slice(startIndex, bank.length - remainingDigits + 1),
            )
            joltage += largestValue.integer
            startIndex = startIndex + largestValue.index + 1
        }

        totalJoltage = totalJoltage + parseInt(joltage)
    }

    return totalJoltage
}

const expectedSecondSolution = 3121910778619

export { expectedFirstSolution, expectedSecondSolution, first, second }
