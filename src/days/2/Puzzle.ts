const first = (input: string) => {
    const ranges = input.split(",").map(range => range.split("-").map(rangeID => parseInt(rangeID)))
    let invalidSum = 0

    for (const range of ranges) {
        for (let i = range[0]; i < range[1] + 1; i++) {
            const idString = i.toString()
            const idLength = idString.length

            if (idLength % 2 !== 0) {
                continue
            }

            const front = idString.slice(0, idLength / 2)
            const back = idString.slice(idLength / 2)

            if (front === back) {
                invalidSum = invalidSum + i
            }
        }
    }

    return invalidSum
}

const expectedFirstSolution = 1227775554

const second = (input: string) => {
    const ranges = input.split(",").map(range => range.split("-").map(rangeID => parseInt(rangeID)))
    let invalidSum = 0

    for (const range of ranges) {
        for (let i = range[0]; i < range[1] + 1; i++) {
            const idString = i.toString()
            const idLength = idString.length

            if ((idString + idString).indexOf(idString, 1) !== idLength) invalidSum = invalidSum + i
        }
    }

    return invalidSum
}

const expectedSecondSolution = 4174379265

export { expectedFirstSolution, expectedSecondSolution, first, second }
