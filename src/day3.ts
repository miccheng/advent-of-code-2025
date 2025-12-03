export const solutionPart1 = (input: string): number => {
    return input.trim().split("\n").reduce((acc, joltageRating) => {
        return acc + largestPossibleJolatage(joltageRating)
    }, 0)
}

export const largestPossibleJolatage = (input: string): number => {
    const candidates = input.split('')
    const result: { left: number, right: number } = {left: -1, right: -1}

    const firstTwo = candidates.slice(0, 2)
    result.left = parseInt(firstTwo[0])
    result.right = parseInt(firstTwo[1])

    for(let i = 2; i < candidates.length; i++) {
        // console.log('checking', candidates[i], 'against', result)

        const checkValue = parseInt(candidates[i])
        
        if (checkValue > result.left) {
            if (i !== (candidates.length-1)) {
                // New higher value, make this the new LHS and next char is RHS
                result.left = checkValue
                result.right = parseInt(candidates[i+1])
                i++
            } else {
                // If this is the last char, make it the RHS value
                result.right = checkValue
            }
        } else if (checkValue > result.right) {
            result.right = checkValue
        }
    }

    // console.log(result)

    return parseInt(`${result.left}${result.right}`)
}