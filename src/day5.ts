type dataStruct = {
    freshIngredientIDRanges: string[]
    ingredients: number[]
}

export const solutionPart1 = (input: string) => {
    const data = parserInput(input)

    const freshSet = buildFreshList(data.freshIngredientIDRanges)

    return data.ingredients.filter(item => {
        return freshSet.some(range => {
            return item >= range[0] && item <= range[1]
        })
    }).length
}

export const solutionPart2 = (input: string) => {
    const data = parserInput(input)

    return 0
}

export const parserInput = (input:string): dataStruct => {
    const parts = input.trim().split("\n\n")
    
    return {
        freshIngredientIDRanges: parts[0].split("\n"),
        ingredients: parts[1].split("\n").map(item => parseInt(item))
    }
}

export const buildFreshList = (input: string[]): [number, number][] => {
    const fullRange: [number, number][] = []

    for (const range of input) {
        let [min, max] = range.split('-').map(n=>parseInt(n))
        fullRange.push([min, max])
    }

    return fullRange
}

