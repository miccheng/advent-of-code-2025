type dataStruct = {
    freshIngredientIDRanges: string[]
    ingredients: number[]
}

export const solutionPart1 = (input: string) => {
    const data = parserInput(input)

    const freshSet = buildFreshList(data.freshIngredientIDRanges)

    return data.ingredients.filter(item => {
        return freshSet.some(range => {
            return item >= range.min && item <= range.max
        })
    }).length
}

export const solutionPart2 = (input: string) => {
    const data = parserInput(input)
    
    const freshSet = buildFreshList(data.freshIngredientIDRanges)
    // console.log(freshSet.length)
    const normalizedRanges = normalizeRanges(freshSet)
    // console.log(normalizedRanges)
    // console.log(normalizedRanges.length)

    return normalizedRanges.reduce((acc, curr) => {
        console.log(curr, 'Num between', (curr.max - curr.min) + 1)
        acc += (curr.max - curr.min) + 1
        return acc
    }, 0)
}

export const parserInput = (input:string): dataStruct => {
    const parts = input.trim().split("\n\n")
    
    return {
        freshIngredientIDRanges: parts[0].split("\n"),
        ingredients: parts[1].split("\n").map(item => parseInt(item))
    }
}

export const buildFreshList = (input: string[]): { min: number, max: number }[] => {
    const fullRange: { min: number, max: number }[] = []

    for (const range of input) {
        let [min, max] = range.split('-').map(n=>parseInt(n))
        fullRange.push({ min, max })
    }

    return fullRange
}

export const normalizeRanges = (ranges: { min: number, max: number }[]): { min: number, max: number }[] => {
    const sortedRange = ranges.sort((a, b) => (a.min - b.min) + (a.max - b.max))

    const normalizedRanges: { min: number, max: number }[] = []
    for (const range of sortedRange) {
        if (normalizedRanges.length === 0) {
            normalizedRanges.push(range)
            continue
        }
        
        const last = normalizedRanges[normalizedRanges.length - 1]
        
        if (range.min <= last.max && range.max >= last.max) {
            normalizedRanges[normalizedRanges.length - 1].max = range.max
            continue
        }

        normalizedRanges.push(range)
    }

    return normalizedRanges
}