import { beforeEach, describe, expect, test } from 'vitest'
import { Circuit, JunctionBox, solutionPart1, solutionPart2, parserInput, euclideanDistance, collateAllDistances } from '../day8'

describe('Day 8 Tests', () => {
    const exampleInput = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`

    test('Example Inputs', () => {
        expect(solutionPart1(exampleInput, 10)).toEqual(40);
        expect(solutionPart2(exampleInput)).toEqual(25272);
    })

    test('Parser', () => {
        expect(parserInput(exampleInput)).toEqual([
            { pos: '0', x: 162, y: 817, z: 812 },
            { pos: '1', x: 57, y: 618, z: 57 },
            { pos: '2', x: 906, y: 360, z: 560 },
            { pos: '3', x: 592, y: 479, z: 940 },
            { pos: '4', x: 352, y: 342, z: 300 },
            { pos: '5', x: 466, y: 668, z: 158 },
            { pos: '6', x: 542, y: 29, z: 236 },
            { pos: '7', x: 431, y: 825, z: 988 },
            { pos: '8', x: 739, y: 650, z: 466 },
            { pos: '9', x: 52, y: 470, z: 668 },
            { pos: '10', x: 216, y: 146, z: 977 },
            { pos: '11', x: 819, y: 987, z: 18 },
            { pos: '12', x: 117, y: 168, z: 530 },
            { pos: '13', x: 805, y: 96, z: 715 },
            { pos: '14', x: 346, y: 949, z: 466 },
            { pos: '15', x: 970, y: 615, z: 88 },
            { pos: '16', x: 941, y: 993, z: 340 },
            { pos: '17', x: 862, y: 61, z: 35 },
            { pos: '18', x: 984, y: 92, z: 344 },
            { pos: '19', x: 425, y: 690, z: 689 },
        ])
    })

    describe('straight line distance', () => {
        test('shortest points', () => {
            const p = new JunctionBox('0', '162, 817, 812')
            const q = new JunctionBox('1', '425, 690, 689')
            expect(euclideanDistance(p, q)).toEqual(316.90219311326956)
        })
    })

    describe('collateAllDistances', () => {
        test('list all distances between nodes', () => {
            const nodes = [
                new JunctionBox('0', '162,817,812'),
                new JunctionBox('1', '57,618,57'),
                new JunctionBox('2', '906,360,560'),
                new JunctionBox('3', '592,479,940'),
                new JunctionBox('4', '352,342,300'),
                new JunctionBox('5', '466,668,158'),
                new JunctionBox('6', '542,29,236'),
                new JunctionBox('7', '431,825,988'),
                new JunctionBox('8', '739,650,466'),
                new JunctionBox('9', '52,470,668'),
                new JunctionBox('10', '216,146,977'),
                new JunctionBox('11', '819,987,18'),
                new JunctionBox('12', '117,168,530'),
                new JunctionBox('13', '805,96,715'),
                new JunctionBox('14', '346,949,466'),
                new JunctionBox('15', '970,615,88'),
                new JunctionBox('16', '941,993,340'),
                new JunctionBox('17', '862,61,35'),
                new JunctionBox('18', '984,92,344'),
                new JunctionBox('19', '425,690,689'),
            ]
            const result = collateAllDistances(nodes)

            // console.log(result.length, result)
            expect(result).not.toEqual({})

        })
    })

    describe('Circuit', () => {
        let p: JunctionBox
        let q: JunctionBox
        let subject: Circuit
        beforeEach(() => {
            p = new JunctionBox('0', '162, 817, 812')
            q = new JunctionBox('1', '425, 690, 689')
            subject = new Circuit([p, q])
        })
        test('constructor', () => {
            expect(subject.length).toEqual(2)
        })

        test('hasNode', () => {
            expect(subject.hasNode(p)).toEqual(true)
            expect(subject.hasNode(q)).toEqual(true)
        })

        test('areSameCircuit', () => {
            expect(subject.areSameCircuit(p, q)).toEqual(true)

            const newNode = new JunctionBox('2', '431, 825, 988')
            expect(subject.areSameCircuit(newNode, p)).toEqual(false)
        })

        test('add', () => {
            subject.add(p)
            expect(subject.length).toEqual(2)

            const newNode = new JunctionBox('2', '431, 825, 988')
            subject.add(newNode)
            expect(subject.length).toEqual(3)
        })

        test('merge', () => {
            const s = new JunctionBox('2', '431, 825, 988')
            const subject2 = new Circuit([p, s])

            subject.merge(subject2)

            expect(subject.length).toEqual(3)
        })
    })
})
