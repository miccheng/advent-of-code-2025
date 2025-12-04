export const solutionPart1 = (input: string) => {
    return input.trim().split("\n").reduce((acc, lineInput) => {
        return acc + 0
    }, 0)
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