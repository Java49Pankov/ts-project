"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesePerson = exports.MAX_PERCENT = exports.MIN_PERCENT = exports.MIN_SALES = void 0;
const WageEmployee_1 = require("./WageEmployee");
exports.MIN_SALES = 0;
exports.MIN_PERCENT = 0;
exports.MAX_PERCENT = 15;
class SalesePerson extends WageEmployee_1.WageEmployee {
    constructor(id, name, birthYear, department, basicSalary, wage, hours, _salesValue, _percentValue) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._salesValue = _salesValue;
        this._percentValue = _percentValue;
    }
    get salesValue() {
        return this._salesValue;
    }
    set salesValue(salesValue) {
        if (salesValue < exports.MIN_SALES) {
            throw `wrong sales value must be more ${exports.MIN_SALES}`;
        }
        this._salesValue = salesValue;
    }
    get percentValue() {
        return this._percentValue;
    }
    set percentValue(percent) {
        if (percent < exports.MIN_PERCENT || percent > exports.MAX_PERCENT) {
            throw `wrong percent of sales must be in range [${exports.MIN_PERCENT}-${exports.MAX_PERCENT}]`;
        }
        this._percentValue = percent;
    }
    computeSalary() {
        return super.computeSalary() + (this._salesValue * this._percentValue) / 100;
    }
}
exports.SalesePerson = SalesePerson;
//# sourceMappingURL=SalesePerson.js.map