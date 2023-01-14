"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SalesePerson_1 = require("./SalesePerson");
const Company_1 = require("./Company");
const sales = new SalesePerson_1.SalesePerson(111, "Pupkin", 1995, "QA", 15000, 100, 150, 16000, 3);
const saleS = new SalesePerson_1.SalesePerson(112, "Pupkin", 1985, "QA", 27000, 100, 150, 16000, 3);
//===cheacks add employee and remove by Id====
const company = new Company_1.Company([]);
company.addEmployee(sales);
company.addEmployee(saleS);
console.log(company);
console.log(company.removeEmployee(111));
console.log(company.removeEmployee(111));
console.log(company);
console.log("=================================");
company.addEmployee(saleS);
company.addEmployee(sales);
const res = company.getEmployee(112);
console.log(res);
company.addEmployee(new SalesePerson_1.SalesePerson(111, "Vasya", 1985, "QA", 10000, 150, 120, 16000, 3));
company.addEmployee(new SalesePerson_1.SalesePerson(112, "Pupkin", 2000, "QA", 20000, 130, 180, 10000, 5));
company.addEmployee(new SalesePerson_1.SalesePerson(113, "Kirill", 1980, "QA", 30000, 120, 140, 26600, 7));
console.log("===========SORT BY SALARY======================");
const resultSalary = company.getEmployeeBySalary(8000, 50000);
resultSalary.forEach(element => console.log(element.birthYear, element.name, element.computeSalary()));
console.log("Company budget", company.computeBudget());
//# sourceMappingURL=main.js.map