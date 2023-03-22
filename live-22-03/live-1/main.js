
const bike = {
   price: 100,
   model: 'mountain',
   colr: ['red', 'blue'],
   brand: 'AAA'
};

bike.type = 'electric';
bike['size'] = 28;

bike.size = 26;


for (const key in bike) {
   console.log(bike[key]);
   console.log(key);
}


console.log(bike);