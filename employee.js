export class Employee {
    constructor(id, salary) {
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false, // Make the 'id' property immutable
            configurable: false, // Make the 'id' property not deletable
        });

        this.salary = salary;
    }

    static compareSalary(employee1, employee2) {
        if (employee1.salary > employee2.salary) {
            return `User with id ${employee1.id} has greater salary`;
        } else if (employee1.salary < employee2.salary) {
            return `User with id ${employee2.id} has greater salary`;
        } else {
            return 'salaries are equal';
        }
    }
}
