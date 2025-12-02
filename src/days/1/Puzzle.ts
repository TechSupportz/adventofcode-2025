const first = (input: string) => {
    // R = add, L = subtract
    const inputSplit = input.split("\n")
    let currentNum = 50
    let zeroCount = 0

    const rotateDial = (direction: string, number: number) => {
        // console.log(direction, number)
        let _tempNum = currentNum

        if (direction === "R") {
            _tempNum = currentNum + number
        }

        if (direction === "L") {
            _tempNum = currentNum - number
        }

        currentNum = _tempNum % 100
    }

    inputSplit.forEach(instruction => {
        const instructionChar = instruction.split("")
        rotateDial(instructionChar[0], parseInt(instructionChar.slice(1).join("")))

        if (currentNum === 0) {
            zeroCount += 1
        }
    })

    return zeroCount
}

const expectedFirstSolution = 3

const second = (input: string) => {
    const inputSplit = input.split("\n")
    let currentNum = 50
    let zeroCount = 0

    const rotateDial = (direction: string, number: number) => {
        let _tempNum = currentNum

        if (direction === "R") {
            _tempNum = currentNum + number
        }

        if (direction === "L") {
            _tempNum = currentNum - number
        }

        if (_tempNum <= 0 && currentNum > 0) {
            zeroCount = zeroCount + 1
        }

        zeroCount = zeroCount + Math.floor(Math.abs(_tempNum) / 100)

        if (_tempNum < 0) {
            _tempNum = 100 + (_tempNum % 100)
            currentNum = _tempNum === 100 ? 0 : _tempNum
        } else {
            currentNum = _tempNum % 100
        }

    }

    inputSplit.forEach(instruction => {
        const instructionChar = instruction.split("")
        rotateDial(instructionChar[0], parseInt(instructionChar.slice(1).join("")))
    })

    return zeroCount
}

const expectedSecondSolution = 6

export { expectedFirstSolution, expectedSecondSolution, first, second }
