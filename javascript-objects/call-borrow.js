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

// 3rd object example
const anotherPerson={
    fname:"Touhid",
    lname:"Rahman",
    salary:8000,
}
 
person.setSalary.call(anotherPerson,1000,500);
console.log(anotherPerson);
