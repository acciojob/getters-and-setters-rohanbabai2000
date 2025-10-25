//complete this code
class Person {
	constructor(myName, myAge){
		this.name = myName;
		this.age = myAge;
	}
	get modifiedName(){
		return this.name; 
	}
	set newAge(age){
		this.age = age;
		return this.age;
	}
}

class Student extends Person {
	constructor(myName, myAge){
		super(myName, myAge);
		
	}
	study(){
			return myName + " is studying";
		}
}

class Teacher extends Person {
	constructor(myName, myAge){
		super(myName, myAge);
		
	}
	teach(){
		return this.name + " is teaching";
	}
}
const person = new Person ("John", 25);
console.log(person.modifiedName());
person.newAge = 30;
console.log(person.newAge());
const student = new Student ("Alice", 22);
console.log(student.study());
const teacher = new Teacher ("Bob", 40);
console.log(teacher.teach());


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
