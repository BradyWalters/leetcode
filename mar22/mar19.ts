export class FreqStack {
    private map:Map<number, number>
    private stack:Array<number>

    constructor() {
        this.map = new Map()
        this.stack = []
    }

    push(val: number): void {
        this.stack.push(val)

        if(!this.map.has(val)) {
            this.map.set(val, 1)
        } else {
            this.map.set(val, this.map.get(val)!! + 1)
        }
    }

    pop(): number {
        let maxIndex = this.stack.length - 1
        let maxFreq = this.map.get(this.stack[maxIndex])

        for(let i = this.stack.length - 2; i >= 0; i--) {
            if(this.map.get(this.stack[i])!! > maxFreq!!) {
                maxFreq = this.map.get(this.stack[i])
                maxIndex = i
            }
        }

        const retVal = this.stack[maxIndex]
        this.map.set(retVal, this.map.get(retVal)!! - 1)

        this.stack.splice(maxIndex, 1)

        return retVal
    }
}