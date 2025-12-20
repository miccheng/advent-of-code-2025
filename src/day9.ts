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

            cornerCombo.totalTiles = calculateTiles(p, q)
            uniqueTiles[cornerCombo.keys[0]] = cornerCombo
        }
    }

    return Object.values(uniqueTiles).sort((a, b) => b.totalTiles - a.totalTiles)[0].totalTiles
}

export const solutionPart2 = (input: string) => {
    const data = parserInput(input)

    return 0
}

export const calculateTiles = (p: Tile, q: Tile): number => {
    if (p.col === q.col && p.row === q.row) {
        return 1
    }

    let width = 0
    if (p.col === q.col){
        width = 1
    } else if (p.col > q.col){
        width = p.col - q.col + 1
    } else {
        width = q.col - p.col + 1
    }

    let height = 0
    if (p.row === q.row){
        height = 1
    } else if (p.row > q.row){
        height = p.row - q.row + 1
    } else {
        height = q.row - p.row + 1
    }

    return width * height
}

export type Tile = {
    col: number
    row: number
}

export const parserInput = (input:string): Tile[] => {
    const result: Tile[] = []

    input.trim().split("\n").map(rowItem => {
        const [col, row] = rowItem.split(',')
        result.push({ col: parseInt(col), row: parseInt(row) })
    })

    return result
}
