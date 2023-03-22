import { getRandomMatrix } from "../util/random";

export default class LifeMatrix {
    constructor(private _numbers: number[][]) { }
    get numbers() {
        return this._numbers;
    }
    nextStep(): number[][] {

        //FIX in HW #36
        const matrix = this._numbers;
        this._numbers = matrix.map((column,index )=> {
            const lastIndex=index;
            let count: number = 0;
            const lifeCellIndex = column.findIndex((number) => number == 1,index);
            if (lifeCellIndex > 0 && lifeCellIndex < matrix.length) {
                const checkingArea = matrix.slice(lifeCellIndex - 1, lifeCellIndex + 2);
                checkingArea.map(row => {
                    const rowsArea: number[] = row.slice(lifeCellIndex - 1, lifeCellIndex + 2)
                    count += rowsArea.reduce((res, num) => res + num)
                    if (count > 3 ||count<2) {
                        row[lifeCellIndex] = 0;
                    }
                    return row;
                })
            } else {
                const checkingArea = matrix.slice(lifeCellIndex, lifeCellIndex + 2);
                checkingArea.map(row => {
                    const rowsArea: number[] = row.slice(lifeCellIndex, lifeCellIndex + 2)
                    count += rowsArea.reduce((res, num) => res + num)
                    if (count > 3 || count<2) {
                        row[lifeCellIndex] = 0;
                    }
                    return row;
                })
            }
            return column;
        })

        return this._numbers;
    }
}
