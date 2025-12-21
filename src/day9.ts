export type Tile = {
    col: number
    row: number
}

class TileCorners {
    keys: string[] = []
    tiles: Tile[] = []
    totalTiles: number = 0

    constructor(p: Tile, q: Tile) {
        this.tiles.push(p)
        this.tiles.push(q)
        this.keys.push(`${p.col}x${p.row}_${q.col}x${q.row}`)
        this.keys.push(`${q.col}x${q.row}_${p.col}x${p.row}`)
    }
}

export const solutionPart1 = (input: string) => {
    const data = parserInput(input)

    const uniqueTiles: { [key:string]: TileCorners } = {}

    for (let i = 0; i < data.length; i++) {
        const p = data[i];

        for (let j = 0; j < data.length; j++) {
            const q = data[j];
            
            if (p.col === q.col && p.row === q.row) {
                // Same tile
                continue
            }

            const cornerCombo = new TileCorners(p, q)

            if (Object.hasOwn(uniqueTiles, cornerCombo.keys[0]) || Object.hasOwn(uniqueTiles, cornerCombo.keys[1])) {
                continue
            }

            cornerCombo.totalTiles = calculateTiles(p, q).total
            uniqueTiles[cornerCombo.keys[0]] = cornerCombo
        }
    }

    return Object.values(uniqueTiles).sort((a, b) => b.totalTiles - a.totalTiles)[0].totalTiles
}

export const solutionPart2 = (input: string) => {
    const data = parserInput(input)

    const width = [...data].sort((a, b) => b.col - a.col)[0].col
    const height = [...data].sort((a, b) => b.row - a.row)[0].row

    console.log('Width:', width, 'Height:', height)

    const grid: string[][] = []
    for (let r = 0; r < height+1; r++) {
        grid[r] = Array(width+1).fill('.')
    }

    for (let i=0; i < data.length; i++) {
        const currentTile = data[i]
        grid[currentTile.row][currentTile.col] = '#'

        if (i > 0) {
            const previousTile = data[i-1]
            drawLine(grid, previousTile, currentTile)
        }
    }
    // Last to first
    drawLine(grid, data[data.length-1], data[0])

    // Print Grid
    for (let r = 0; r < grid.length; r++) {
        console.log(grid[r].join(''))
    }

    return 0
}

export const drawLine = (grid: string[][], previousTile: Tile, currentTile: Tile) => {
    if (previousTile.col === currentTile.col) { // Vertical line
        if (currentTile.row > previousTile.row) { // Moving up
            for(let v=previousTile.row+1; v<currentTile.row; v++) {
                grid[v][currentTile.col] = 'X'
            }
        } else if (currentTile.row < previousTile.row) { // Moving Down
            for(let v=previousTile.row-1; v>currentTile.row; v--) {
                grid[v][currentTile.col] = 'X'
            }
        }
    }

    if (previousTile.row === currentTile.row) { // Horizontal line
        if (currentTile.col > previousTile.col) { // Moving right
            for(let h=previousTile.col+1; h<currentTile.col; h++) {
                grid[currentTile.row][h] = 'X'
            }
        } else if (currentTile.col < previousTile.col) { // Moving left
            for(let h=previousTile.col-1; h>currentTile.col; h--) {
                grid[currentTile.row][h] = 'X'
            }
        }
    }

    return grid
}

export const calculateTiles = (p: Tile, q: Tile): { tiles: Tile[], total: number } => {
    const tiles: Tile[] = []

    if (p.col === q.col && p.row === q.row) {
        tiles.push(p)
        return { tiles, total: 1 }
    }

    const direction: [number, number] = [0, 0] // Vertical (row), Horizontal (col)

    let width = 0
    if (p.col === q.col){
        width = 1
    } else if (p.col > q.col){
        width = p.col - q.col + 1
        direction[1] = -1
    } else {
        width = q.col - p.col + 1
        direction[1] = 1
    }

    let height = 0
    if (p.row === q.row){
        height = 1
    } else if (p.row > q.row){
        height = p.row - q.row + 1
        direction[0] = -1
    } else {
        height = q.row - p.row + 1
        direction[0] = 1
    }

    for(let r=0; r < height; r++) {
        let row = p.row
        if (direction[0] === 1) {
            row = p.row + r
        } else if (direction[0] === -1) {
            row = p.row - r
        }

        for(let c = 0; c < width; c++) {
            if (direction[1] != -1) {
                tiles.push({ row: row, col: p.col + c })
            } else {
                tiles.push({ row: row, col: p.col - c })
            }
        }
    }

    return { tiles, total: width * height }
}

export const parserInput = (input:string): Tile[] => {
    const result: Tile[] = []

    input.trim().split("\n").map(rowItem => {
        const [col, row] = rowItem.split(',')
        result.push({ col: parseInt(col), row: parseInt(row) })
    })

    return result
}
