import { Employee } from "./Employee";

export class Company {
    constructor(private _arrEmployees: Employee[]) {

    }

    addEmployee(employee: Employee): void {
        if (this._arrEmployees.every(empl => empl.id !== employee.id)) {
            this._arrEmployees.push(employee);
        }
    }

    removeEmployee(valueId: number): boolean {
        let flag = false;
        this._arrEmployees = this._arrEmployees.filter(value => {
            if (value.id === valueId) {
                flag = true;
            }
        })
        return flag;
    }

    getEmployee(valueId: number): Employee | null {
        const newEmpl: Employee | undefined = this._arrEmployees.find((val: Employee) => {
            return val.id === valueId;
        })
        return (newEmpl === undefined) ? null : newEmpl;
    }

    getEmployeeBySalary(salaryFrom: number, salaryTo: number): Employee[] {
        const empl: Employee[] = this._arrEmployees.filter((empl: Employee) => {
            const salary = empl.computeSalary();
            return salary >= salaryFrom && salary <= salaryTo;
        })
        return empl.sort((a: Employee, b: Employee) => (a.birthYear > b.birthYear) ? 1 : -1)
    }

    computeBudget(): number {
        let resSum = this._arrEmployees.reduce((prevValue, curValue) => {
            return prevValue + curValue.computeSalary();
        }, 0);
        return resSum;
    }
}