const  db = require('../config/db');
const { deleteEmployee } = require('../controllers/postControllers');

class Employee{
    constructor(first_name,last_name,department){
        this.first_name = first_name;
        this.last_name = last_name;
        this.department = department
    }
    async save(){
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth()+1;
        let date = d.getDate();

        let joiningDate = `${yyyy}-${mm}-${date}`;

        let sql = `
        INSERT into employee_details(
            first_name,
            last_name,
            department,
            joing_date
        )VALUES(
            '${this.first_name}',
            '${this.last_name}',
            '${this.department}',
            '${joiningDate}'
        )
        `
        const [newEmployee , _] = await db.execute(sql);

        return newEmployee;
    }

    static findAll(){
        let sql = "SELECT * FROM employee_details;"
        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM employee_details WHERE id = ${id};`;
        return db.execute(sql);
    }

    static deleteEmployeeById(id){
        let sql = `DELETE FROM employee_details WHERE id = ${id};`;
        return db.execute(sql);
    }

    static updateEmployeeById(id,first_name,last_name,department,joing_date){
        let sql = `
        UPDATE employee_details
        SET first_name = '${first_name}',
        last_name = '${last_name}',
        department = '${department}',
        joing_date = '${joing_date}'
        WHERE
        id = ${id}
        `
        return db.execute(sql);
    }
}


module.exports = Employee;