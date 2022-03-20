export function minDominoRotations(tops: number[], bottoms: number[]): number {
    const topCount = new Array(6).fill(0)
    const bottomCount = new Array(6).fill(0)

    for(let i = 0; i < tops.length; i++) {
        topCount[tops[i] - 1]++
    }

    for(let i = 0; i < bottoms.length; i++) {
        bottomCount[bottoms[i] - 1]++
    }

    const viable = []
    for(let i = 0; i < topCount.length; i++) {
        if(topCount[i] + bottomCount[i] >= tops.length) {
            viable.push(i + 1)
        }
    }

    if(viable.length === 0) return -1

    for(let v = 0; v < viable.length; v++) {
        const n = viable[v]
        
        if(topCount[n - 1] > bottomCount[n - 1]) {
            let rotations = 0
            for(let i = 0; i < tops.length; i++) {
                if(tops[i] !== n) {
                    if(bottoms[i] === n) {
                        rotations++
                    } else {
                        rotations = -1
                        break
                    }
                }
            }

            if(rotations !== -1) return rotations
        } else {
            let rotations = 0
            for(let i = 0; i < bottoms.length; i++) {
                if(bottoms[i] !== n) {
                    if(tops[i] === n) {
                        rotations++
                    } else {
                        rotations = -1
                        break
                    }
                }
            }

            if(rotations !== -1) return rotations
        }
    }

    return -1
};