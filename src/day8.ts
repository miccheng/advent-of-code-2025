export class JunctionBox {
    public pos: string
    public x: number
    public y: number
    public z: number

    constructor(pos: string, coords: string) {
        const _coords = coords.split(',')
        this.pos = pos
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
    private counter = 0

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
            this.counter++
        }
    }

    merge(circuit: Circuit) {
        Object.keys(circuit.nodes).map(key => {
            this.add(circuit.nodes[key])
        })
    }

    get length(): number {
        return this.counter
    }
}

export const solutionPart1 = (input: string, first: number) => {
    const nodes = parserInput(input)

    const orderedPairs = collateAllDistances(nodes)
    // console.log('Ordered Distances', JSON.stringify(orderedPairs.map(item=> [`${item.nodes[0].pos} - ${item.nodes[0].id}`, `${item.nodes[1].pos} - ${item.nodes[1].id}`, item.distance]  ), null, 2))

    const circuits: Circuit[] = []

    for (let i=0; i < first; i++) {
        if (i === 0) {
            circuits.push(new Circuit([...orderedPairs[i].nodes]))
            continue
        }

        let addedToExistingCircuit: number[] = []
        for(let c=0; c < circuits.length; c++) {
            if(circuits[c] == undefined) {
                continue
            }
            if (circuits[c].areSameCircuit(orderedPairs[i].nodes[0], orderedPairs[i].nodes[1])) {
                addedToExistingCircuit.push(c)
                break
            } else if (circuits[c].hasNode(orderedPairs[i].nodes[0]) || circuits[c].hasNode(orderedPairs[i].nodes[1])) {
                circuits[c].add(orderedPairs[i].nodes[0])
                circuits[c].add(orderedPairs[i].nodes[1])
                addedToExistingCircuit.push(c)
            }
        }

        if (addedToExistingCircuit.length === 0) {
            circuits.push(new Circuit([...orderedPairs[i].nodes]))
        } else if (addedToExistingCircuit.length === 2) {
            // Merge Circutis
            const [first, second] = addedToExistingCircuit

            circuits[first].merge(circuits[second])
            delete circuits[second]
        }
    }

    const sortedCircuits = circuits.filter(item=> item != undefined).sort((a, b) => b.length - a.length)

    // console.log(JSON.stringify(sortedCircuits, null, 2))

    return sortedCircuits
        .slice(0, 3)
        .reduce((acc, curr) => {
            return acc * curr.length
        }, 1)
}

export const solutionPart2 = (input: string) => {
    const nodes = parserInput(input)

    const orderedPairs = collateAllDistances(nodes)
    // console.log('Ordered Distances', JSON.stringify(orderedPairs.map(item=> [`${item.nodes[0].pos} - ${item.nodes[0].id}`, `${item.nodes[1].pos} - ${item.nodes[1].id}`, item.distance]  ), null, 2))

    const circuits: Circuit[] = []

    let evaluatingPair: JunctionBoxPair | null = null
    for (let i=0; i < orderedPairs.length; i++) {
        evaluatingPair = orderedPairs[i]
        // console.log('Looping:', i, evaluatingPair)
        if (i === 0) {
            circuits.push(new Circuit([...evaluatingPair.nodes]))
            continue
        }

        let addedToExistingCircuit: number[] = []
        for(let c=0; c < circuits.length; c++) {
            if(circuits[c] == undefined) {
                continue
            }
            if (circuits[c].areSameCircuit(evaluatingPair.nodes[0], evaluatingPair.nodes[1])) {
                addedToExistingCircuit.push(c)
                break
            } else if (circuits[c].hasNode(evaluatingPair.nodes[0]) || circuits[c].hasNode(evaluatingPair.nodes[1])) {
                circuits[c].add(evaluatingPair.nodes[0])
                circuits[c].add(evaluatingPair.nodes[1])
                addedToExistingCircuit.push(c)
            }
        }

        if (addedToExistingCircuit.length === 0) {
            circuits.push(new Circuit([...evaluatingPair.nodes]))
        } else if (addedToExistingCircuit.length === 2) {
            // Merge Circutis
            const [first, second] = addedToExistingCircuit

            circuits[first].merge(circuits[second])
            delete circuits[second]
        }

        const activeCircuits = circuits.filter(item => item !== undefined)
        // console.log('Number of Circuits:', activeCircuits)
        if(activeCircuits.length === 1 && activeCircuits[0].length === nodes.length && i > 10) {
            break
        }
    }

    if (evaluatingPair) {
        // console.log('Evaluating Pair', evaluatingPair)
        return evaluatingPair.nodes[0].x * evaluatingPair.nodes[1].x 
    }

    return 0
}

export const parserInput = (input:string): JunctionBox[] => {
    return input.trim().split("\n").map((line, index) => {
        return new JunctionBox(`${index}`, line)
    }) as JunctionBox[]
}

export const euclideanDistance = (p: JunctionBox, q: JunctionBox) => {
    return Math.sqrt(Math.pow((p.x - q.x), 2) + Math.pow((p.y - q.y), 2) + Math.pow((p.z - q.z), 2))
}

export type JunctionBoxPair = {
    keys: string[]
    distance: number
    nodes: JunctionBox[]
}

export const collateAllDistances = (nodes: JunctionBox[]): JunctionBoxPair[] => {
    const distances: JunctionBoxPair[] = []
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
                keys: [ combo1, combo2 ],
                distance: d,
                nodes: [pNode, qNode]
            })
            uniquePairs[combo1] = d            
        }
    }

    // console.log('Distances', Object.values(uniquePairs).sort((a, b) => a - b))

    return distances.sort((a, b) => a.distance - b.distance)
}
