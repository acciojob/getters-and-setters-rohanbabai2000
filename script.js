//complete this code
class Person {
	constructor(myName, myAge){
		this.name = myName;
		this.age = myAge;
	}
	getName(){
		return this.name; 
	}
	setAge(newAge){
		this.age = newAge;
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

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
