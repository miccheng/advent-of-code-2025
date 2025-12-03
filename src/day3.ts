export const solutionPart1 = (input: string): number => {
    return input.trim().split("\n").reduce((acc, joltageRating) => {
        return acc + largestPossibleJoltage(joltageRating)
    }, 0)
}

export const solutionPart2 = (input: string): number => {
    return input.trim().split("\n").reduce((acc, joltageRating) => {
        return acc + largest12CellJoltage(joltageRating)
    }, 0)
}

export const largestPossibleJoltage = (input: string): number => {
    const candidates = input.split('')
    const result: { left: number, right: number } = {left: -1, right: -1}

    // Only first char LHS
    result.left = parseInt(candidates[0])

    // Check from 2nd char onwards
    for(let i = 1; i < candidates.length; i++) {
        // console.log('checking', candidates[i], 'against', result)

        const checkValue = parseInt(candidates[i])
        
        if (checkValue > result.left) {
            if (i !== (candidates.length-1)) {
                // New higher value, make this the new LHS and next char is RHS
                result.left = checkValue
                result.right = -1
            } else {
                // If this is the last char, make it the RHS value
                result.right = checkValue
            }
        } else if (result.right < 0) { // Populate RHS if its not set
            result.right = checkValue
        } else if (checkValue > result.right) {
            result.right = checkValue
        }
    }

    // console.log(result)

    return parseInt(`${result.left}${result.right}`)
}

export const largest12CellJoltage = (input: string): number => {
    // Exactly 12 chars
    if (input.length === 12) return parseInt(input)

    let output = ''
    let candidateString = input
    // console.log('Starting String', candidateString)
    for(let i = 0; i < 12; i++) {
        let nextHighestBattery = highestCellCount(candidateString, (12-output.length))
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