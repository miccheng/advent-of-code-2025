export const solutionPart1 = (input: string): number => {
    const data = parserInput(input)

    let splitCounter = 0
    let beamDrop: number[] = [data.startingPoint]
    for(let r=0; r < data.grid.length; r++) {
        // console.log('Org Row', r, data.manifold[r])
        let splits = 0
        let row = data.grid[r]
        let nextBeamDrop: number[] = []
        for(const beamPos of beamDrop) {
            if (row[beamPos].type === NodeType.Splitter) {
                // console.log('Above the splitter is', data.manifold[r-1][beamPos])
                const leftBeam = beamPos-1
                const rightBeam = beamPos+1

                if (leftBeam > -1 && rightBeam < data.width) {
                    splitCounter++
                    splits++

                    if ([NodeType.Manifold, NodeType.Beam].includes(row[leftBeam].type)) {
                        // row[leftBeam] = '|'
                        data.grid[r][leftBeam].type = NodeType.Beam
                        if (!nextBeamDrop.includes(leftBeam)) {
                            nextBeamDrop.push(leftBeam)
                        }
                    } 
                    
                    if ([NodeType.Manifold, NodeType.Beam].includes(row[rightBeam].type)) {
                        // row[rightBeam] = '|'
                        data.grid[r][rightBeam].type = NodeType.Beam
                        if (!nextBeamDrop.includes(rightBeam)) {
                            nextBeamDrop.push(rightBeam)
                        }
                    }
                }
            } else if (row[beamPos].type === NodeType.Manifold) {
                // row[beamPos] = '?'
                data.grid[r][beamPos].type = NodeType.Beam
                nextBeamDrop.push(beamPos)
            }
        }
        beamDrop = nextBeamDrop
        // data.manifold[r] = row.join('')
        // console.log(`Splits in row ${r}: ${splits}`)
        // console.log('New Row', data.manifold[r])
    }

    return splitCounter
}

export const solutionPart2 = (input: string) => {
    const data = parserInput(input)

    return 0
}

export enum NodeType {
    Manifold = '.',
    Splitter = '^',
    Beam = '|',
}

export type Node = {
    type: NodeType
    row: number
    col: number
    bottom?: Node
    left?: Node
    right?: Node
}

export const parserInput = (input:string): { width: number, startingPoint: number, grid: Node[][] } => {
    const result: { width: number, startingPoint: number, grid: Node[][] } = {
        width: 0,
        startingPoint: 0, 
        grid: []
    }

    const rows = input.trim().split("\n")

    const startingRow = rows.shift()
    if (startingRow) {
        result.width = startingRow.length
        result.startingPoint = startingRow.indexOf('S')
    }

    for (let r=0; r < rows.length; r++) {
        const row = rows[r]
        const cells = row.split('')

        result.grid[r] = []

        for (let c = 0; c < cells.length; c++) {
            const cell = cells[c];
            switch (cell) {
                case '^':
                    result.grid[r][c] = { type: NodeType.Splitter, row: r, col: c }
                    break;
                case '|':
                    result.grid[r][c] = { type: NodeType.Beam, row: r, col: c }
                    break;
                default:
                    result.grid[r][c] = { type: NodeType.Manifold, row: r, col: c }
                    break;
            }
        }
    }

    return result
}

export const locateAllSplitters = (input: string): number[] => {
    return [...input.matchAll(/\^/g)].map(match => match.index)
}

export const locateAllTachyonBeams = (input: string): number[] => {
    return [...input.matchAll(/\|/g)].map(match => match.index)
}