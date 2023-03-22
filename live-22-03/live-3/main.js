
const students = [

   {
      name: 'Mario',
      surname: 'Rossi',
      mail: 'mario.rossi@bool.it',
      phone: '3334445678'
   },

   {
      name: 'Marco',
      surname: 'Mossi',
      mail: 'marco.mossi@bool.it',
      phone: '3334445990'
   },

   {
      name: 'Michele',
      surname: 'Grossi',
      mail: 'michele.grossi@bool.it',
      phone: '3334445123'
   },

];

console.log(students);

for (let i = 0; i < students.length; i++) {
   const thiStudent = students[i];
   students[i]['age'] = 34;
   console.log(thiStudent);
}