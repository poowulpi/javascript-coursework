// Problem 1: Student Roster

class Student {
    constructor(firstName, lastName, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    getAverage() {
        if (this.grades.length === 0) {
            return 0;
        }

        let total = 0;

        for (let grade of this.grades) {
            total += grade;
        }

        return Number((total / this.grades.length).toFixed(1));
    }

    getLetterGrade() {
        const average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }

    addGrade(grade) {
        this.grades.push(grade);
    }
}


// Test Student class

let student1 = new Student("Alice", "Johnson", [92, 88, 95, 78]);

console.log(student1.getFullName());
console.log(student1.getAverage());
console.log(student1.getLetterGrade());

student1.addGrade(100);

console.log(student1.getAverage());
console.log(student1.getLetterGrade());

let student2 = new Student("Bob", "Smith", [65, 72, 58]);

console.log(student2.getFullName());
console.log(student2.getAverage());
console.log(student2.getLetterGrade());


// Part B: Roster class

class Roster {
    constructor(courseName) {
        this.courseName = courseName;
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    getHonorRoll() {
        return this.students.filter(function(student) {
            return student.getAverage() >= 90;
        });
    }

    getClassAverage() {
        if (this.students.length === 0) {
            return 0;
        }

        let total = 0;

        for (let student of this.students) {
            total += student.getAverage();
        }

        return Number((total / this.students.length).toFixed(1));
    }

    findStudent(lastName) {
        const student = this.students.find(function(student) {
            return student.lastName === lastName;
        });

        return student || null;
    }
}


// Test Roster class

let cs101 = new Roster("Intro to Computer Science");

cs101.addStudent(new Student("Alice", "Johnson", [92, 88, 95, 78]));
cs101.addStudent(new Student("Bob", "Smith", [65, 72, 58]));
cs101.addStudent(new Student("Carol", "Davis", [95, 91, 97, 93]));

console.log(cs101.getClassAverage());
console.log(cs101.getHonorRoll().length);
console.log(cs101.findStudent("Smith").getFullName());
console.log(cs101.findStudent("Nobody"));