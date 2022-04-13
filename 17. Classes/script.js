/*
NEWTOPIC 
1. Design an class for employee which takes an id and name in  a constructor and has a salaray property 
2. Design a class for managers which has the empolyee class in it and also a department property
*/

//CASE 1
class employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error("Both id and name are mandatory");
    }
    this.id = id;
    this.name = name;
  }

  setSalary(salary) {
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
  getid() {
    return this.id;
  }
  getname() {
    return this.name;
  }
}

const emp1 = new employee(2, "harry");
console.log(emp1);
console.log(emp1.getid());
//ANSWER WE CREATED AN CLASS WITH METHODS INSIDE

//CASE 2:

class managers extends employee {
  //MANGERS CLASS USES THE PROPERTIES OF EMPLYEE CLASS
  setDepartment(name) {
    this.department = name; //SETTERS
  }
  getDapartment() {
    return this.department; //GETTERS
  }
}
const management = new managers(5, "john");
console.log(management);
management.setDepartment("development");
console.log(management.getDapartment());
