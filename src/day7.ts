export const solutionPart1 = (input: string): number => {
    const data = parserInput(input)
    const result = buildTachyonTrail(data)

    // console.log(drawTree(result.grid))

    return result.splitCounter
}

export const solutionPart2 = (input: string) => {
    const data = parserInput(input)
    const result = buildTachyonTrail(data)

    // console.log(drawTree(manifolds.grid))
    // return quantumTraversal(data.startingPoint, manifolds.grid)

    return result.pathwayCount
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

export const buildTachyonTrail = (data: TeleporterInput): { grid: Node[][], splitCounter: number, pathwayCount: number } => {
    const result: { grid: Node[][], splitCounter: number, pathwayCount: number } = {
        grid: data.grid,
        splitCounter: 0,
        pathwayCount: 0
    }
    const pathwayCounters: Record<number, number> = { [data.startingPoint]: 1 }
    let beamDrop: number[] = [data.startingPoint]
    for(let r=0; r < result.grid.length; r++) {
        let splits = 0
        let row = result.grid[r]
        let nextBeamDrop: number[] = []
        for(const beamPos of beamDrop) {
            if (row[beamPos].type === NodeType.Splitter) {
                if (r > 0 && result.grid[r-1][beamPos].type === NodeType.Beam) {
                    result.grid[r-1][beamPos].next = { row: r, col: beamPos }
                }
                const leftBeamPos = beamPos-1
                const rightBeamPos = beamPos+1

                if (leftBeamPos > -1 && rightBeamPos < data.width) {
                    result.splitCounter++
                    splits++

                    if ([NodeType.Manifold, NodeType.Beam].includes(row[leftBeamPos].type)) {
                        result.grid[r][leftBeamPos].type = NodeType.Beam
                        result.grid[r][beamPos].left = { row: r, col: leftBeamPos }
                        
                        if (!pathwayCounters[leftBeamPos]) {
                            pathwayCounters[leftBeamPos] = pathwayCounters[beamPos]
                        } else {
                            pathwayCounters[leftBeamPos] += pathwayCounters[beamPos]
                        }

                        if (!nextBeamDrop.includes(leftBeamPos)) {
                            nextBeamDrop.push(leftBeamPos)
                        }
                    } 
                    
                    if ([NodeType.Manifold, NodeType.Beam].includes(row[rightBeamPos].type)) {
                        result.grid[r][rightBeamPos].type = NodeType.Beam
                        result.grid[r][beamPos].right = { row: r, col: rightBeamPos }

                        if (!pathwayCounters[rightBeamPos]) {
                            pathwayCounters[rightBeamPos] = pathwayCounters[beamPos]
                        } else {
                            pathwayCounters[rightBeamPos] += pathwayCounters[beamPos]
                        }

                        if (!nextBeamDrop.includes(rightBeamPos)) {
                            nextBeamDrop.push(rightBeamPos)
                        }
                    }

                    delete pathwayCounters[beamPos]
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

    result.pathwayCount = Object.values(pathwayCounters).reduce((acc, curr) => acc + curr, 0)

    return result
}

export const quantumTraversal = (startingPoint: number, tachyonTrail: Node[][]): number => {
    const result: Coord[] = []

    let current: Coord = { row: 0, col: startingPoint }

    let counter: number = 0

    const traverse = (node: Coord) => {
        // result.push(node)
        if (
            tachyonTrail[node.row][node.col].next === undefined &&
            tachyonTrail[node.row][node.col].left === undefined &&
            tachyonTrail[node.row][node.col].right === undefined
        ) counter++
        if (tachyonTrail[node.row][node.col].next) traverse(tachyonTrail[node.row][node.col].next!)
        if (tachyonTrail[node.row][node.col].left) traverse(tachyonTrail[node.row][node.col].left!)
        if (tachyonTrail[node.row][node.col].right) traverse(tachyonTrail[node.row][node.col].right!)
    }

    traverse(current)

    // console.log(result)

    return counter
}

export const drawTree = (tachyonTrail: Node[][]) => {
    return tachyonTrail.map(row => {
        return row.map(cell => {
            return cell.type.toString()
        }).join('')
    }).join("\n")
}

export const locateAllSplitters = (input: string): number[] => {
    return [...input.matchAll(/\^/g)].map(match => match.index)
}

export const locateAllTachyonBeams = (input: string): number[] => {
    return [...input.matchAll(/\|/g)].map(match => match.index)
}