export const solutionPart1 = (input: string) => {
    const data = parserInput(input)

    return data.length
}

export const solutionPart2 = (input: string) => {
    const data = parserInput(input)

    return data.length
}

export const parserInput = (input:string): { width: number, startingPoint: number, manifold: string[] } => {
    const result: { width: number, startingPoint: number, manifold: string[] } = {
        width: 0,
        startingPoint: 0, 
        manifold: []
    }

    const rows = input.trim().split("\n")

    const startingRow = rows.shift()
    if (startingRow) {
        result.width = startingRow.length
        result.startingPoint = startingRow.indexOf('S')
    }

    result.manifold = rows

    return result
}
