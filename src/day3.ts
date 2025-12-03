export const solutionPart1 = (input: string): number => {
    return input.trim().split("\n").reduce((acc, joltageRating) => {
        return acc + largestCellJoltage(joltageRating, 2)
    }, 0)
}

export const solutionPart2 = (input: string): number => {
    return input.trim().split("\n").reduce((acc, joltageRating) => {
        return acc + largestCellJoltage(joltageRating, 12)
    }, 0)
}

export const largestCellJoltage = (input: string, numCells: number): number => {
    // Exactly 12 chars
    if (input.length === numCells) return parseInt(input)

    let output = ''
    let candidateString = input
    // console.log('Starting String', candidateString)
    for(let i = 0; i < numCells; i++) {
        let nextHighestBattery = highestCellCount(candidateString, (numCells-output.length))
        // console.log('Next highest battery position', nextHighestBattery)
        // console.log('Next', `${output}${candidateString.substring(nextHighestBattery)}`)

        output = `${output}${candidateString[nextHighestBattery]}`
        candidateString = candidateString.substring(nextHighestBattery+1)
        // console.log('output', output, 'candidate string', candidateString)
    }

    return parseInt(output)
}

export const highestCellCount = (input: string, minimumLength=12): number => {
    const nums = ['9', '8', '7', '6', '5', '4', '3', '2', '1']
    for (const n of nums) {
        const pos = input.indexOf(n)
        if (pos > -1 && (input.length - pos) >= minimumLength) {
            return input.indexOf(n)
        }
    }

    return -1
}