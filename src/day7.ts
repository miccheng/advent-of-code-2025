export const solutionPart1 = (input: string): number => {
    const data = parserInput(input)
    const result = buildTachyonTrail(data)

    return result.splitCounter
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

export type Coord = {
    row: number
    col: number
}

export type Node = {
    type: NodeType
    row: number
    col: number
    next?: Coord
    left?: Coord
    right?: Coord
}

export type TeleporterInput = {
    width: number,
    startingPoint: number,
    grid: Node[][]
}

export const parserInput = (input:string): TeleporterInput => {
    const result: TeleporterInput = {
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

export const buildTachyonTrail = (data: TeleporterInput): { grid: Node[][], splitCounter: number } => {
    const result: { grid: Node[][], splitCounter: number } = {
        grid: data.grid,
        splitCounter: 0
    }

    let beamDrop: number[] = [data.startingPoint]
    for(let r=0; r < result.grid.length; r++) {
        let splits = 0
        let row = result.grid[r]
        let nextBeamDrop: number[] = []
        for(const beamPos of beamDrop) {
            if (row[beamPos].type === NodeType.Splitter) {
                const leftBeamPos = beamPos-1
                const rightBeamPos = beamPos+1

                if (leftBeamPos > -1 && rightBeamPos < data.width) {
                    result.splitCounter++
                    splits++

                    if ([NodeType.Manifold, NodeType.Beam].includes(row[leftBeamPos].type)) {
                        result.grid[r][leftBeamPos].type = NodeType.Beam
                        result.grid[r][beamPos].left = { row: r, col: leftBeamPos }

                        if (!nextBeamDrop.includes(leftBeamPos)) {
                            nextBeamDrop.push(leftBeamPos)
                        }
                    } 
                    
                    if ([NodeType.Manifold, NodeType.Beam].includes(row[rightBeamPos].type)) {
                        result.grid[r][rightBeamPos].type = NodeType.Beam
                        result.grid[r][beamPos].right = { row: r, col: leftBeamPos }

                        if (!nextBeamDrop.includes(rightBeamPos)) {
                            nextBeamDrop.push(rightBeamPos)
                        }
                    }
                }
            } else if (row[beamPos].type === NodeType.Manifold) {
                result.grid[r][beamPos].type = NodeType.Beam
                if (r > 0) {
                    result.grid[r-1][beamPos].next = { row: r, col: beamPos }
                }

                nextBeamDrop.push(beamPos)
            }
        }
        beamDrop = nextBeamDrop
    }

    return result
}

export const locateAllSplitters = (input: string): number[] => {
    return [...input.matchAll(/\^/g)].map(match => match.index)
}

export const locateAllTachyonBeams = (input: string): number[] => {
    return [...input.matchAll(/\|/g)].map(match => match.index)
}