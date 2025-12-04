export const solutionPart1 = (input: string) => {
    const grid = gridParser(input)
    const rows = grid.length
    const cols = grid[0].length

    let result = 0

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if (grid[r][c] === '@') {
                const neighbourCoords = getNeighbours(c, r, cols, rows)
                const neighbourRolls = neighbourCoords.reduce((acc, curCell) => {
                    if (grid[curCell.row][curCell.col] === '@') acc += 1
                    return acc
                }, 0)
                if (neighbourRolls < 4) {
                    result++
                }
            }
        }
    }

    return result
}

export const solutionPart2 = (input: string) => {
    return input.trim().split("\n").reduce((acc, lineInput) => {
        return acc + 0
    }, 0)
}

export const gridParser = (input: string): string[][] => {
    const grid: string[][] = []

    if (input.length === 0) return grid

    for(const row of input.trim().split("\n")) {
        grid.push(row.split(''))
    }

    return grid
}

export const getNeighbours = (col: number, row: number, width: number, height: number): ({col: number, row: number})[] => {
    return [
        { col: col-1, row: row-1 }, { col: col, row: row-1 }, { col: col+1, row: row-1 },
        { col: col-1, row: row },                             { col: col+1, row: row },
        { col: col-1, row: row+1 }, { col: col, row: row+1 }, { col: col+1, row: row+1 },
    ].filter( (cell) => cell && cell.col > -1 && cell.row > -1 && cell.col < width && cell.row < height )
}
