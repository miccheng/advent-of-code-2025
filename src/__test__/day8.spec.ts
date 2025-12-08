import { describe, expect, test } from 'vitest'
import { JunctionBox, solutionPart1, solutionPart2, parserInput, euclideanDistance, collateAllDistances } from '../day8'

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
        expect(solutionPart1(exampleInput)).toEqual(40);
        expect(solutionPart2("")).toEqual(0);
    })

    test('Parser', () => {
        expect(parserInput(exampleInput)).toEqual([
            { x: 162, y: 817, z: 812 },
            { x: 57, y: 618, z: 57 },
            { x: 906, y: 360, z: 560 },
            { x: 592, y: 479, z: 940 },
            { x: 352, y: 342, z: 300 },
            { x: 466, y: 668, z: 158 },
            { x: 542, y: 29, z: 236 },
            { x: 431, y: 825, z: 988 },
            { x: 739, y: 650, z: 466 },
            { x: 52, y: 470, z: 668 },
            { x: 216, y: 146, z: 977 },
            { x: 819, y: 987, z: 18 },
            { x: 117, y: 168, z: 530 },
            { x: 805, y: 96, z: 715 },
            { x: 346, y: 949, z: 466 },
            { x: 970, y: 615, z: 88 },
            { x: 941, y: 993, z: 340 },
            { x: 862, y: 61, z: 35 },
            { x: 984, y: 92, z: 344 },
            { x: 425, y: 690, z: 689 },
        ])
    })

    describe('straight line distance', () => {
        test('shortest points', () => {
            const p = new JunctionBox('162, 817, 812')
            const q = new JunctionBox('425, 690, 689')
            expect(euclideanDistance(p, q)).toEqual(317)
        })
    })

    describe('collateAllDistances', () => {
        test('list all distances between nodes', () => {
            const nodes = [
                new JunctionBox('162,817,812'),
                new JunctionBox('57,618,57'),
                new JunctionBox('906,360,560'),
                new JunctionBox('592,479,940'),
                new JunctionBox('352,342,300'),
                new JunctionBox('466,668,158'),
                new JunctionBox('542,29,236'),
                new JunctionBox('431,825,988'),
                new JunctionBox('739,650,466'),
                new JunctionBox('52,470,668'),
                new JunctionBox('216,146,977'),
                new JunctionBox('819,987,18'),
                new JunctionBox('117,168,530'),
                new JunctionBox('805,96,715'),
                new JunctionBox('346,949,466'),
                new JunctionBox('970,615,88'),
                new JunctionBox('941,993,340'),
                new JunctionBox('862,61,35'),
                new JunctionBox('984,92,344'),
                new JunctionBox('425,690,689'),
            ]
            const result = collateAllDistances(nodes)

            console.log(result.length, result)
            expect(result).not.toEqual({})

        })
    })
})
