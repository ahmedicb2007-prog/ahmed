const students={
    studentdata: [
        { id: 1, name: 'John Doe', marks: 20 },
        { id: 2, name: 'Jane Smith', marks: 22 },
        { id: 3, name: 'Bob Johnson', marks: 18 },
        { id: 4, name: 'Alice Brown', marks: 25},
        { id: 5, name: 'Charlie Davis', marks: 19 }
    ],
    averageMarks: function() {
        let totalMarks = 0;
        for (let i = 0; i < this.studentdata.length; i++) {
            totalMarks += this.studentdata[i].marks;
        }
        return totalMarks / this.studentdata.length;
    },
    highestMarks: function() {
        let highest = this.studentdata[0].marks;
        for (let i = 1; i < this.studentdata.length; i++) {
            if (this.studentdata[i].marks > highest) {
                highest = this.studentdata[i].marks;
            }
        }
        return highest;
    },
    passedStudents: function() {
        let passed = [];
        for (let i = 0; i < this.studentdata.length; i++) {
            if (this.studentdata[i].marks >= 20) {
                passed.push(this.studentdata[i]);
            }
        }
        return passed;
    },   
    lowestMarks: function() {
        let lowest = this.studentdata[0].marks;
        for (let i = 1; i < this.studentdata.length; i++) {
            if (this.studentdata[i].marks < lowest) {
                lowest = this.studentdata[i].marks;
            }
        }        
        return lowest;  
    },
    map: function() {
        let mappedData = this.studentdata.map(student => {
            return { id: student.id, name: student.name, marks: student.marks };
        });
        return mappedData;
    },
    filter: function() {
        let filteredData = this.studentdata.filter(student => student.marks >= 20);
        return filteredData;
    },
    sorted: function() {
        let sortedData = this.studentdata.sort((a, b) => a.marks - b.marks);
        return sortedData;
    }     
}
console.log(students.averageMarks());
console.log(students.highestMarks());
for (let i = 0; i < students.studentdata.length; i++) {
    console.log(students.studentdata[i].id+" "+students.studentdata[i].name+" "+students.studentdata[i].marks);
}
for(let i=0; i<students.studentdata.length; i++){
    if(students.studentdata[i].marks>=20){
        console.log(students.studentdata[i].name+" has passed the exam.");
}
}
console.log(students.lowestMarks());
for (let i = 0; i < students.studentdata.length; i++) {
    console.log(students.map()[i].id+" "+students.map()[i].name+" "+students.map()[i].marks);
}   
for (let i = 0; i < students.filter().length; i++) {
    console.log(students.filter()[i].id+" "+students.filter()[i].name+" "+students.filter()[i].marks);
}
for (let i = 0; i < students.sorted().length; i++) {
    console.log(students.sorted()[i].id+" "+students.sorted()[i].name+" "+students.sorted()[i].marks);
}