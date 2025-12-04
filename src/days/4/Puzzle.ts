const first = (input: string) => {
    const rows = input.split("\n").map(row => row.split(""))
    let accessibleRollsCount = 0

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const row = rows[rowIndex]
        for (let rowItemIndex = 0; rowItemIndex < row.length; rowItemIndex++) {
            if (row[rowItemIndex] !== "@") continue

            let adjacentRolls: any[] = []

            if (rowIndex - 1 >= 0) {
                adjacentRolls = adjacentRolls.concat([
                    rows[rowIndex - 1][rowItemIndex - 1],
                    rows[rowIndex - 1][rowItemIndex],
                    rows[rowIndex - 1][rowItemIndex + 1],
                ])
            }

            adjacentRolls = adjacentRolls.concat([row[rowItemIndex - 1], row[rowItemIndex + 1]])

            if (rowIndex + 1 <= row.length - 1) {
                adjacentRolls = adjacentRolls.concat([
                    rows[rowIndex + 1][rowItemIndex - 1],
                    rows[rowIndex + 1][rowItemIndex],
                    rows[rowIndex + 1][rowItemIndex + 1],
                ])
            }

            const adjacentRollsCount = adjacentRolls.filter(item => item === "@").length

            if (adjacentRollsCount < 4) accessibleRollsCount++
        }
    }

    return accessibleRollsCount
}

const expectedFirstSolution = 13

const second = (input: string) => {
    const rows = input.split("\n").map(row => row.split(""))
    let removedRowsCount = 0

    const removeAccessibleRolls = (rows: string[][]) => {
        const updatedRows: string[][] = []
        let accessibleRollsCount = 0

        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            const row = rows[rowIndex]
            const _newRow = []

            for (let rowItemIndex = 0; rowItemIndex < row.length; rowItemIndex++) {
                if (row[rowItemIndex] !== "@") {
                    _newRow.push(".")
                    continue
                }

                let adjacentRolls: any[] = []

                if (rowIndex - 1 >= 0) {
                    adjacentRolls = adjacentRolls.concat([
                        rows[rowIndex - 1][rowItemIndex - 1],
                        rows[rowIndex - 1][rowItemIndex],
                        rows[rowIndex - 1][rowItemIndex + 1],
                    ])
                }

                adjacentRolls = adjacentRolls.concat([row[rowItemIndex - 1], row[rowItemIndex + 1]])

                if (rowIndex + 1 <= row.length - 1) {
                    adjacentRolls = adjacentRolls.concat([
                        rows[rowIndex + 1][rowItemIndex - 1],
                        rows[rowIndex + 1][rowItemIndex],
                        rows[rowIndex + 1][rowItemIndex + 1],
                    ])
                }

                const adjacentRollsCount = adjacentRolls.filter(item => item === "@").length

                if (adjacentRollsCount < 4) {
                    accessibleRollsCount++
                    _newRow.push(".")
                } else {
                    _newRow.push("@")

				}
            }

            updatedRows.push(_newRow)
        }
        if (accessibleRollsCount === 0) return

        removeAccessibleRolls(updatedRows)
        removedRowsCount += accessibleRollsCount
    }

    removeAccessibleRolls(rows)
    return removedRowsCount
}

const expectedSecondSolution = 43

export { expectedFirstSolution, expectedSecondSolution, first, second }
