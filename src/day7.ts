export const solutionPart1 = (input: string): number => {
    const data = parserInput(input)

    let splitCounter = 0
    let beamDrop: number[] = [data.startingPoint]
    for(let r=0; r < data.manifold.length; r++) {
        // console.log('Org Row', r, data.manifold[r])
        let row = data.manifold[r].split('')
        let nextBeamDrop: number[] = []
        for(const beamPos of beamDrop) {
            if (row[beamPos] === '^') {
                // console.log('Above the splitter is', data.manifold[r-1][beamPos])
                const leftBeam = beamPos-1
                const rightBeam = beamPos+1

                if (leftBeam > -1 && rightBeam < data.width) {
                    splitCounter++

                    if (row[leftBeam] === '.') {
                        row[leftBeam] = '|'
                        if (!nextBeamDrop.includes(leftBeam)) {
                            nextBeamDrop.push(leftBeam)
                        }
                    } 
                    
                    if (row[rightBeam] === '.') {
                        row[rightBeam] = '|'
                        if (!nextBeamDrop.includes(rightBeam)) {
                            nextBeamDrop.push(rightBeam)
                        }
                    }
                }
            } else if (row[beamPos] === '.') {
                row[beamPos] = '?'
                nextBeamDrop.push(beamPos)
            }
        }
        beamDrop = nextBeamDrop
        data.manifold[r] = row.join('')
        // console.log('New Row', data.manifold[r])
    }

    return splitCounter
}

export const solutionPart2 = (input: string) => {
    const data = parserInput(input)

    return 0
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

export const locateAllSplitters = (input: string): number[] => {
    return [...input.matchAll(/\^/g)].map(match => match.index)
}

export const locateAllTachyonBeams = (input: string): number[] => {
    return [...input.matchAll(/\|/g)].map(match => match.index)
}