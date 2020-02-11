//import studentsJSON from 'db/students.json'
// https://jsoneditoronline.org/
class Students{
  constructor () {
    this.students = []
  }
  loadData(url){
    
    fetch(url)
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => {
        console.log(this.students)
        for(const student in data){
          this.students.push(data[student])
        }
      })
  }
  
  prepareForView(){
    let result = [];
    console.log(this.students)
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

let grupa = new Students();
grupa.loadData('http://localhost:3000/students');
document.getElementById('container').innerHTML = grupa.prepareForView();
