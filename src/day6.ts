export const solutionPart1 = (input: string) => {
    const data = parserInput(input)

    // console.log('Values for 1st row', data.values[0].length)
    // console.log('Operations', data.operations.length)

    const sheet: number[][] = []

    for(let i=0; i < data.values.length; i++){
        for(let n=0; n < data.values[i].length; n++ ) {
            if (!sheet[n]) sheet[n] = []
            sheet[n].push(parseInt(data.values[i][n]))
        }
    }

    let result = 0

    // console.log(sheet)
    // console.log('Sheet numbers', sheet.length)

    for(let k=0; k < data.operations.length; k++) {
        let initialValue = data.operations[k] === '+' ? 0 : 1
        const output = sheet[k].reduce((acc, value) => {
            if (data.operations[k] === '+') {
                acc += value
            } else if (data.operations[k] === '*') {
                acc = acc * value
            }
            return acc
        }, initialValue)

        console.log('Running Operation', data.operations[k], 'on', sheet[k], 'Output', output)

        result += output
    }

    return result
}

export const solutionPart2 = (input: string) => {
    const data = parserInput(input)

    return 0
}

export const parserInput = (input:string) => {
    const result: {values: string[][], operations: string[]} = {
        values: [],
        operations: []
    }
    const rows = input.split("\n")
    const opsRow = rows.pop()

    rows.map(row => {
        const matches = row.match(/(\d+)/g)
        if (matches) {
            result.values.push(matches)
        }
    })

    const operations = opsRow?.match((/[\+\*]/g))
    if (operations) {
        result.operations = operations
    }

    return result
}
