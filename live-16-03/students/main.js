/* 
LIVE CODING ":

data una lista di studenti creo una funzione per stampare in console il nome
*/

const students = [
   'mario',
   'luigi',
   'sergio',
   'cosimo',
];

function showStudents(studentsList){
   for (let i = 0; i < studentsList.length; i++){
      const student = studentsList[i];
      console.log(student);
   }
}

showStudents(students)