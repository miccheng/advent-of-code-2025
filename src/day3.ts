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

    let lhs = ''
    let candidateString = input
    console.log('Starting', candidateString)
    for(let i = 0; i < 12; i++) {
        let nextHighestBattery = highestCellCount(candidateString, (12-lhs.length))
        console.log(nextHighestBattery)

        console.log('Next', `${lhs}${candidateString.substring(nextHighestBattery)}`)

        lhs = `${lhs}${candidateString[nextHighestBattery]}`
        candidateString = candidateString.substring(nextHighestBattery+1)
        console.log('LHS', lhs, 'Str', candidateString)
    }

    return parseInt(lhs)


    // // Find indexOf highest number
    // const highestCellPos = highestCellCount(input)
    // // Set 1st char as highest number
    // // let lhs = input[highestCellPos]

    // // let candidateString = input.slice(highestCellPos)
    // console.log('Candidate String', candidateString)
    // // while(true) {
    //     console.log('Foo', candidateString.substring(1))
    //     let pointer = highestCellCount(candidateString.substring(1))
    //     console.log(pointer)
    //     console.log('Candidate String', candidateString)
    //     // if (pointer < 0) break
    //     console.log(candidateString.substring(1)[pointer])

    //     lhs = `${lhs}${candidateString[pointer]}`
    //     candidateString = candidateString.substring(pointer)

    //     console.log('Candidate String', candidateString)
    //     console.log('LHS', lhs)        
    // // }

    // // console.log('Candidate String', candidateString)
    // // console.log('LHS', lhs)

    // let highestNumber = parseInt(candidateString.substring(0, 12))
    // console.log('Highest Number', highestNumber)
    // // for(let i=1; i < candidateString.length; i++) {
    // //     const num = `${lhs}${candidateString.slice(i)}`.substring(0, 12)
    // //     if (num.length < 12) break
    // //     console.log('LHS', `${lhs}_${candidateString.slice(i)}`.substring(0, 13), 'Checking:', num, 'against', highestNumber)

    // //     if (parseInt(num) > highestNumber) {
    // //         highestNumber = parseInt(num)
    // //         console.log('Adding to LHS:', candidateString[i])
    // //         lhs = `${lhs}${candidateString[i]}`
    // //     }
    // // }
    // // 92222213223325332632323212227323432113121
    // // 97432113121 x less than 12
    // // 97323432113121 (14)
    // // 973_234321131 (12)
    // // 973_343211312 (12)
    // // 973_432113121 (12)
    // // 973432113121
    // // 973432113121

    // return highestNumber
    return 0
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