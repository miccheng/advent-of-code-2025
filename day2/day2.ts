export const solution = (idRanges: string): { invalidIds: number[], sum: number } => {
    const invalidIds: number[] = [];
    let sum = 0
    idRanges.trim().split(',').map(range => {
        const [start, end] = range.split('-').map(Number);
        // Process the range from start to end
        for (let id = start; id <= end; id++) {
            const candidateId = `${id}`
            if (candidateId.length % 2 === 0 &&
                candidateId.substring(0, candidateId.length / 2) === candidateId.substring(candidateId.length / 2)
            ) {
                invalidIds.push(id)
                sum += id
            }
        }
    })

    return { invalidIds, sum }
}
