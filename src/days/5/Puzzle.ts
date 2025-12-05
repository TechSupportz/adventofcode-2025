const first = (input: string) => {
    const [freshIDInput, availableIDInput] = input.split("\n\n")

    const freshIDList = freshIDInput
        .split("\n")
        .map(range => range.split("-").map(id => parseInt(id)))
    const availableIDList = availableIDInput.split("\n").map(id => parseInt(id))

    let freshCount = 0

    for (let availableID of availableIDList) {
        for (let freshIDRange of freshIDList) {
            if (availableID >= freshIDRange[0] && availableID <= freshIDRange[1]) {
                freshCount++
                break
            }
        }
    }

    return freshCount
}

const expectedFirstSolution = 3

const second = (input: string) => {
    const [freshIDInput, _] = input.split("\n\n")

    const freshIDRangeList = freshIDInput
        .split("\n")
        .map(range => range.split("-").map(id => parseInt(id)))

    freshIDRangeList.sort((a, b) => a[0] - b[0])

    let mergedFreshIDRangeList: number[][] = []

    for (let i = 0; i < freshIDRangeList.length; i++) {
        const currentRange = freshIDRangeList[i]

        if (mergedFreshIDRangeList.length === 0) {
            mergedFreshIDRangeList.push(currentRange)
            continue
        }

        const latestMergedRange = mergedFreshIDRangeList.at(-1)
        if (!latestMergedRange) continue

        if (currentRange[0] <= latestMergedRange[1] && currentRange[1] > latestMergedRange[1]) {
            mergedFreshIDRangeList[mergedFreshIDRangeList.length - 1] = [
                latestMergedRange[0],
                currentRange[1],
            ]
        } else if (currentRange[0] <= latestMergedRange[1]) {
            continue
        } else {
            mergedFreshIDRangeList.push(currentRange)
        }
    }

    return mergedFreshIDRangeList.reduce((prev, current) => prev + (current[1] - current[0]) + 1, 0)
}

const expectedSecondSolution = 14

export { expectedFirstSolution, expectedSecondSolution, first, second }
