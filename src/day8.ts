export class JunctionBox {
    public x: number
    public y: number
    public z: number

    constructor(coords: string) {
        const _coords = coords.split(',')
        this.x = parseInt(_coords[0])
        this.y = parseInt(_coords[1])
        this.z = parseInt(_coords[2])
    }

    get id(): string {
        return `${this.x}, ${this.y}, ${this.z}`
    }
}

export const solutionPart1 = (input: string) => {
    const data = parserInput(input)

    return data.length
}

export const solutionPart2 = (input: string) => {
    const data = parserInput(input)

    return data.length
}

export const parserInput = (input:string): JunctionBox[] => {
    return input.trim().split("\n").map(line => {
        return new JunctionBox(line)
    }) as JunctionBox[]
}

export const euclideanDistance = (p: JunctionBox, q: JunctionBox) => {
    return Math.round(Math.sqrt(Math.pow((p.x - q.x), 2) + Math.pow((p.y - q.y), 2) + Math.pow((p.z - q.z), 2)))
}

export const collateAllDistances = (nodes: JunctionBox[]) => {
    const distances: {key: string, distance: number, nodes: string[]}[] = []
    const uniquePairs: { [key: string]: number } = {}

    for (const pNode of nodes) {
        for (const qNode of nodes) {
            if(pNode.id === qNode.id) continue

            const nodeComboName = pNode.x > qNode.x ? `${pNode.id}_${qNode.id}` : `${qNode.id}_${pNode.id}`
            if (!Object.hasOwn(uniquePairs, nodeComboName)) {
                const d = euclideanDistance(pNode, qNode)
                distances.push({
                    key: nodeComboName,
                    distance: d,
                    nodes: [pNode.id, qNode.id]
                })
                uniquePairs[nodeComboName] = d
            }
        }
    }

    return distances.sort((a, b) => a.distance - b.distance)
}