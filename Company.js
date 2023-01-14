"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(_arrEmployees) {
        this._arrEmployees = _arrEmployees;
    }
    addEmployee(employee) {
        if (this._arrEmployees.every(empl => empl.id !== employee.id)) {
            this._arrEmployees.push(employee);
        }
    }
    removeEmployee(valueId) {
        let flag = false;
        this._arrEmployees = this._arrEmployees.filter(value => {
            if (value.id === valueId) {
                flag = true;
            }
        });
        return flag;
    }
    getEmployee(valueId) {
        const newEmpl = this._arrEmployees.find((val) => {
            return val.id === valueId;
        });
        return (newEmpl === undefined) ? null : newEmpl;
    }
    getEmployeeBySalary(salaryFrom, salaryTo) {
        const empl = this._arrEmployees.filter((empl) => {
            const salary = empl.computeSalary();
            return salary >= salaryFrom && salary <= salaryTo;
        });
        return empl.sort((a, b) => (a.birthYear > b.birthYear) ? 1 : -1);
    }
    computeBudget() {
        let resSum = this._arrEmployees.reduce((prevValue, curValue) => {
            return prevValue + curValue.computeSalary();
        }, 0);
        return resSum;
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map