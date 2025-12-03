import fs from 'fs'
import path from 'path'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// import { solution as day1Solution } from './day1'
// const inputDay1 = fs.readFileSync(path.join(__dirname, '/inputs/day1.txt'), 'utf-8')
// console.log('Day 1 Solution:', day1Solution(inputDay1))

// import { solutionPart1 as day2Part1Solution, solutionPart2 as day2Part2Solution } from './day2'
// const inputDay2 = fs.readFileSync(path.join(__dirname, '/inputs/day2.txt'), 'utf-8')
// console.log('Day 2 Solution (Part 1):', day2Part1Solution(inputDay2))
// console.log('Day 2 Solution (Part 2):', day2Part2Solution(inputDay2))

import { solutionPart1 as day3Part1Solution, solutionPart2 as day3Part2Solution } from './day3'
const inputDay3 = fs.readFileSync(path.join(__dirname, '/inputs/day3.txt'), 'utf-8')
console.log('Day 3 Solution (Part 1):', day3Part1Solution(inputDay3))
console.log('Day 3 Solution (Part 2):', day3Part2Solution(inputDay3))

