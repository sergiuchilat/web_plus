//import studentsJSON from 'db/students.json'
// https://jsoneditoronline.org/
class Students{
  constructor (students) {
    this.students = students
    
  }
  
  setStudents(students){
    this.students = students
  }
  
  prepareForView(){
    let result = [];
    for(let i = 0; i < this.students.length; i++){
      result.push(`${this.students[i].name}`)
    }
    const containerContent = result.join('<br>');
    return `Students list: <br/>
            ${containerContent}
            <hr/>
            `;
  }
}

const studentsJSON = `[
  {
    "name": "Ion",
    "age": 19,
    "mark": 8.5
  },
  {
    "name": "Petru",
    "age": 20,
    "mark": 8.7
  },
  {
    "name": "Mihai",
    "age": 22,
    "mark": 10.3
  }
]`;


let students = JSON.parse(studentsJSON);


let grupa = new Students(students);
grupa.setStudents(students);
document.getElementById('container').innerHTML = grupa.prepareForView();
