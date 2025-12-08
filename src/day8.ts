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

export class Circuit {
    public nodes: { [key: string]: JunctionBox } = {}

    constructor(nodePair?: JunctionBox[]) {
        if (nodePair) {
            this.add(nodePair[0])
            this.add(nodePair[1])
        }
    }

    hasNode(node: JunctionBox): boolean {
        return Object.hasOwn(this.nodes, node.id)
    }

    areSameCircuit(pNode: JunctionBox, qNode: JunctionBox): boolean {
        return Object.hasOwn(this.nodes, pNode.id) && Object.hasOwn(this.nodes, qNode.id)
    }

    add(node: JunctionBox) {
        if (!this.hasNode(node)) {
            this.nodes[node.id] = node
        }
    }

    get length(): number {
        return Object.keys(this.nodes).length
    }
}

export const solutionPart1 = (input: string, first: number) => {
    const nodes = parserInput(input)

    const orderedPairs = collateAllDistances(nodes)

    let cableUsed = 0
    const circuits: Circuit[] = []

    for (let i=0; i < orderedPairs.length; i++) {
        if (i === 0) {
            circuits.push(new Circuit([...orderedPairs[i].nodes]))
            cableUsed++
            continue
        }

        let addedToExistingCircuit = false
        for(let c=0; c < circuits.length; c++) {
            if (circuits[c].areSameCircuit(orderedPairs[i].nodes[0], orderedPairs[i].nodes[1])) {
                addedToExistingCircuit = true
                break
            }
            if (circuits[c].hasNode(orderedPairs[i].nodes[0]) || circuits[c].hasNode(orderedPairs[i].nodes[1])) {
                circuits[c].add(orderedPairs[i].nodes[0])
                circuits[c].add(orderedPairs[i].nodes[1])
                cableUsed++
                addedToExistingCircuit = true
                break
            }
        }

        if (!addedToExistingCircuit) {
            circuits.push(new Circuit([...orderedPairs[i].nodes]))
            cableUsed++
        }

        if (cableUsed === first) {
            console.log(cableUsed)
            break
        } 
    }

    const sortedCircuits = circuits.map(c => c.length).sort((a, b) => b - a)

    console.log(JSON.stringify(sortedCircuits))

    return sortedCircuits
        .slice(0, 3)
        .reduce((acc, curr) => {
            return acc * curr
        }, 1)
}

export const solutionPart2 = (input: string) => {
    const data = parserInput(input)

    return 0
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
    const distances: {key: string, distance: number, nodes: JunctionBox[]}[] = []
    const uniquePairs: { [key: string]: number } = {}

    for (const pNode of nodes) {
        for (const qNode of nodes) {
            if(pNode.id === qNode.id) continue

            const combo1 = `${pNode.id}_${qNode.id}`
            const combo2 = `${qNode.id}_${pNode.id}`

            if (Object.hasOwn(uniquePairs, combo1) || Object.hasOwn(uniquePairs, combo2)) {
                continue
            }

            const d = euclideanDistance(pNode, qNode)
            distances.push({
                key: combo1,
                distance: d,
                nodes: [pNode, qNode]
            })
            uniquePairs[combo1] = d            
        }
    }

    // console.log(uniquePairs)

    return distances.sort((a, b) => a.distance - b.distance)
}