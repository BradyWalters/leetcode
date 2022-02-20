export function removeCoveredIntervals(intervals: number[][]): number {
    let reduced = new Array<Array<number>>()
    let current = intervals.shift()

    while(current != undefined) {
        let covered = false

        for(let i = 0; i < intervals.length && !covered; i++) {
            if(intervals[i][0] <= current[0] && current[1] <= intervals[i][1]) {
                covered = true
            }
        }

        for(let i = 0; i < reduced.length && !covered; i++) {
            if(reduced[i][0] <= current[0] && current[1] <= reduced[i][1]) {
                covered = true
            }
        }

        if(!covered) {
            reduced.push(current)
        }

        current = intervals.shift()
    }

    return reduced.length
};