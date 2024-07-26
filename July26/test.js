//Activity 1 :Class Defintion

//Task-1

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    
    greeting(){
        return `Hello ${this.name} and ${this.age}`;
    }
    updateAge(age){
        return `Your updated age= ${this.age=age}`
    }
}

const p1=new Person("sagar",20);
console.log(p1.greeting());

//Task-2

console.log(p1.updateAge(30));
console.log(p1.greeting());

//Activity 2: Class inheritance

//Task-3,4

class Student extends Person {
  constructor(name,age,studentId) {
    super(name,age);
    this.studentId = studentId;
  }
  getStudentId() {
    return `Your Student Id is ${this.studentId}`;
  }
  greeting() {
    return `Hello ${this.name} and ${this.age} and ${this.studentId}`;
  }
}

const s1=new Student("sagar",20,"5605");
console.log(s1.getStudentId());
console.log(s1.greeting());

//Activity 3: Static Methods and Properties

//Task-5:
class Person2{
    static greeting(){
        return "Hello ,Welcome to static method";
    }
}
console.log(Person2.greeting());

//Task-6:

class Student1{
    static studentCount=0;

    constructor(name){
        this.name=name;
        Student1.studentCount++;
    }
    static getTotalStudents(){
        return Student1.studentCount;
    } 
}

const s2=new Student1("sagar");
const s3=new Student1("naman");
const s4=new Student1("tejas");
console.log(`Total Number of students are: ${Student1.getTotalStudents()}`);

//Activty 4: Getters and setters

//Task-7:

//By using get set we can call that method by just referencing

class Person1{
    constructor(fname,lname){
        this.firstName=fname;
        this.lastName=lname;
    }
    get Name(){
        return `Your name is ${this.firstName} ${this.lastName}`
    }
    //setter always takes only one parameter
    set Name(name){
        const[fname,lname]=name.split(' ');
        this.firstName=fname;
        this.lastName=lname;
        return `Your update name is ${this.firstName} ${this.lastName}`
    }
}
const p2=new Person1("sagar","singh");
console.log(p2.Name);

//Task 8:

p2.Name="John Doe"

console.log(p2.Name);





