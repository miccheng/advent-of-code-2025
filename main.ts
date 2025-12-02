import { solution as day1Solution } from './day1/day1'
import { solutionPart1 as day2Part1Solution, solutionPart2 as day2Part2Solution } from './day2/day2'

import fs from 'fs'

const inputDay1 = fs.readFileSync('./day1/input.txt', 'utf-8')
console.log('Day 1 Solution:', day1Solution(inputDay1))

const inputDay2 = fs.readFileSync('./day2/input.txt', 'utf-8')
console.log('Day 2 Solution (Part 1):', day2Part1Solution(inputDay2))
console.log('Day 2 Solution (Part 2):', day2Part2Solution(inputDay2))