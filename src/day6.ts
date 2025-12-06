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

        // console.log('Running Operation', data.operations[k], 'on', sheet[k], 'Output', output)

        result += output
    }

    return result
}

export const solutionPart2 = (input: string) => {
    const data = parserInput(input)

    // console.log(data)

    let result = 0
    for(let i=0; i < data.operations.length; i++) {
        let colResult = data.operations[i] === '+' ? 0 : 1
        // console.log('Column', i)
        for(let n=data.colWidth[i]-1; n > -1; n--) {
            let numStr = ''
            for(let r=0; r < data.values.length; r++) {
                numStr += data.values[r][i][n]
            }

            // console.log('Num', numStr)

            switch(data.operations[i]){
                case '+':
                    colResult += parseInt(numStr)
                    break
                case '*':
                    colResult *= parseInt(numStr)
                    break
            }
        }
        result += colResult
    }

    return result
}

export const parserInput = (input:string) => {
    const result: {values: string[][], operations: string[], colWidth: number[]} = {
        values: [],
        operations: [],
        colWidth: []
    }

    const rows = input.split("\n")

    const opsRow = rows.pop()
    if (opsRow) {
        const operations = opsRow?.match((/[\+\*]/g))
        if (operations) {
            result.operations = operations
        }
    
        for (let i = 0; i < opsRow.length; i++) {
            const char = opsRow[i];
            if (['+', '*'].includes(char)) {
                result.colWidth.push(1)
                if (i > 0) {
                    result.colWidth[result.colWidth.length-2] -= 1
                }
            }
            else if (char === ' ') {
                result.colWidth[result.colWidth.length - 1] += 1
            }
        }
    }

    rows.map(row => {
        let pointer = 0
        const matches: string[] = []
        for (let k=0; k < result.colWidth.length; k++) {
            matches.push(row.substring(pointer, pointer + result.colWidth[k]))
            pointer += result.colWidth[k] + 1
        }
        
        result.values.push(matches)
    })

    return result
}
