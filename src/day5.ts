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

    const freshItems: number[] = []

    for(let range of freshSet) {
        for(let i = range.min; i <= range.max; i++) {
            if (!freshItems.includes(i)) freshItems.push(i)
        }
    }

    return freshItems.length
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

