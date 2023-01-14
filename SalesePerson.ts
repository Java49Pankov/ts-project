import { WageEmployee } from "./WageEmployee";

export const MIN_SALES: number = 0;
export const MIN_PERCENT: number = 0;
export const MAX_PERCENT: number = 15;

export class SalesePerson extends WageEmployee {
    constructor(id: number, name: string, birthYear: number,
        department: string, basicSalary: number, wage: number, hours: number, private _salesValue: number,
        private _percentValue: number) {
        super(id, name, birthYear, department, basicSalary, wage, hours,);
    }
    get salesValue() {
        return this._salesValue;
    }
    set salesValue(salesValue: number) {
        if (salesValue < MIN_SALES) {
            throw `wrong sales value must be more ${MIN_SALES}`
        }
        this._salesValue = salesValue;
    }
    get percentValue() {
        return this._percentValue;
    }
    set percentValue(percent: number) {
        if (percent < MIN_PERCENT || percent > MAX_PERCENT) {
            throw `wrong percent of sales must be in range [${MIN_PERCENT}-${MAX_PERCENT}]`
        }
        this._percentValue =  percent;
    }
    computeSalary(): number {
        return super.computeSalary() + (this._salesValue * this._percentValue) / 100
    }
}