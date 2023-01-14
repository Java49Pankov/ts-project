"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const MIN_SALARY = 5000;
const MAX_SALARY = 50000;
class Employee {
    constructor(_id, _name, _birthYear, department, _basicSalary) {
        this._id = _id;
        this._name = _name;
        this._birthYear = _birthYear;
        this.department = department;
        this._basicSalary = _basicSalary;
        if (_basicSalary < MIN_SALARY || _basicSalary > MAX_SALARY) {
            throw `salary mast be in range [${MIN_SALARY}-${MAX_SALARY}]`;
        }
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get birthYear() {
        return this._birthYear;
    }
    get basicSalary() {
        return this._basicSalary;
    }
    set basicSalary(salary) {
        if (salary < MIN_SALARY || salary > MAX_SALARY) {
            throw `salary must be in range [${MIN_SALARY}-${MAX_SALARY}]`;
        }
        this._basicSalary = salary;
    }
}
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map