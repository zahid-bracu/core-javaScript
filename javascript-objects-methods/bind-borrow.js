const person={
    fname:"Zahid",
    lname:"Rahman",
    salary:4000,
    getName:function(){
        return `${this.fname} ${this.lname}`
    },
    setSalary:function(amount,tax){
        this.salary-=amount;
        this.salary-=tax;
        return this.salary;
    }
}

// 2nd object
const newPerson={
    fname:"Ema",
    lname:"Zaman",
    salary:5000,
}
 
var newSetSalary=person.setSalary.bind(newPerson);
newSetSalary(1500,50);
console.log(newPerson);



 