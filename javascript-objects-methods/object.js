const person={
    // declare & set variable value
    fname:"Zahid",
    lname:"Rahman",
    salary:4000,
    getName:function(){
        return `${this.fname} ${this.lname}`
    },
    setSalary:function(amount){
        this.salary-=amount;
        return this.salary;
    }
}
console.log(person.getName);
console.log(person.setSalary(150));
console.log(person.salary);
