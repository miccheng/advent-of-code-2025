export const solutionPart1 = (input: string): { invalidIds: number[], sum: number } => {
    const invalidIds: number[] = [];
    let sum = 0
    input.trim().split(',').map(range => {
        const [start, end] = range.split('-').map(Number);
        for (let id = start; id <= end; id++) {
            if (id && isEqualPalindrome(id)) {
                invalidIds.push(id)
                sum += id
            }
        }
    })

    return { invalidIds, sum }
}

export const isEqualPalindrome = (num: number): boolean => {
    const candidateId = `${num}`
    return (candidateId.length % 2 === 0 &&
        candidateId.substring(0, candidateId.length / 2) === candidateId.substring(candidateId.length / 2)
    )
}

export const solutionPart2 = (input: string): { invalidIds: number[], sum: number } => {
    const invalidIds: number[] = [];
    let sum = 0
    input.trim().split(',').map(range => {
        const [start, end] = range.split('-').map(Number);
        for (let id = start; id <= end; id++) {
            if (id && isRepeatingSequence(id)) {
                invalidIds.push(id)
                sum += id
            }
        }
    })

    return { invalidIds, sum }
}

export const isRepeatingSequence = (num: number): boolean => {
    const candidateId = num.toString();
    for(let i = 1; i <= candidateId.length; i++) {
        const pattern = candidateId.substring(0, i)
        const repeatCheck = candidateId.split(pattern)
        if(repeatCheck.length > 2 && repeatCheck.filter(k => k.length > 0).length === 0) {
            return true
        }
    }

    return false
}