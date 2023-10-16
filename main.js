import { Dev } from "./modules /dev.js";
import { PM } from "./modules /pm.js";
import { Employee } from "./modules /employee.js";


const dev = new Dev(1, 2000);
const pm = new PM(2, 2500);
const dev2 = new Dev(3, 2000);
console.log(dev.getJobType());
console.log(pm.getJobType());
console.log(Employee.compareSalary(dev, pm));
console.log(Employee.compareSalary(dev, dev2));

