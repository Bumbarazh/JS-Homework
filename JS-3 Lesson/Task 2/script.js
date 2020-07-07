// создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

const car = {
    brend: 'BMW',
    modelName: 'M3',
    year: 2018
}

const house = {
    street: 'T. Shevchenko',
    number: 124,
    region: 'Shevchenko'
}

const flat = {
    stage: 3,
    rooms: 3,
    square: '65m2'
}

const user = {
    name: 'Sergiy',
    sex: 'male',
    yearOfBirth: 1994
}

const bag = {
    producer: 'Wrangler',
    material: 'leather',
    price: '354$'
}

// создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.

const knife = {
    countryProducer: 'Swizerland',
    parts: ['little knife', 'scissors', 'pliers', 'saw'],
    color: 'red',
    acsessories: {cover: 'leather', box: true}
}

const man = {
    children: ['son', 'daughter'],
    wife: {name: 'Lora', age: 29},
    property: 'house'
}

const woman = {
    husband: {job: 'plumber', uniform: true},
    mother: 'Karina',
    father: 'Stepan',
    jevelry: ['silver ring', 'gold chain']
}

const washingMachine = {
    functions: ['sanitary', 'delicates', 'daily washing'],
    maximumLoad: '6kg',
    dimenssions: {width: '65cm', height: '80cm', deepness: '52cm'}
}

const apple = {
    vitamins: ['A', 'C', 'D', 'E'],
    sort: 'Malus domestica',
    nutritionalValues: {proteins: '0.3gr', carbohydrates: '13gr', fat: '0,2gr'}
}

// При помощи for in вывести все ключи всех объектов из задания 1 и 2

for (let key in car) {
    console.log(key);
}

for (let key in house) {
    console.log(key);
}

for (let key in flat) {
    console.log(key);
}

for (let key in user) {
    console.log(key);
}

for (let key in bag) {
    console.log(key);
}

for (let key in knife) {
    console.log(key);
}

for (let key in man) {
    console.log(key);
}

for (let key in woman) {
    console.log(key);
}

for (let key in washingMachine) {
    console.log(key);
}

for (let key in apple) {
    console.log(key);
}

// При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

console.log(Object.keys(car));

console.log(Object.keys(house));

console.log(Object.keys(flat));

console.log(Object.keys(user));

console.log(Object.keys(bag));

console.log(Object.keys(knife));

console.log(Object.keys(man));

console.log(Object.keys(woman));

console.log(Object.keys(washingMachine));

console.log(Object.keys(apple));

// Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.

let arrOfCars = [
    {model: 'BMW', year: 2014, power: '135kW', color: 'black'},
    {model: 'Mercedes', year: 2004, power: '155kW', color: 'grey'},
    {model: 'Lamborghini', year: 2008, power: '235kW', color: 'yellow'},
    {model: 'Volkswagen', year: 2011, power: '145kW', color: 'blue'},
    {model: 'Fiat', year: 2019, power: '95kW', color: 'white'},
    {model: 'Toyota', year: 2012, power: '165kW', color: 'black'},
    {model: 'Ferrari', year: 2017, power: '293kW', color: 'red'},
    {model: 'Nissan', year: 2002, power: '115kW', color: 'brown'},
    {model: 'Chevrolet', year: 2016, power: '85kW', color: 'green'},
    {model: 'Skoda', year: 2007, power: '141kW', color: 'pink'}
]

// Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.

let arrOfCities = [
    {name: 'Lviv', population: '800000', contry: 'Ukraine', region: 'Lviv'},
    {name: 'Washington', population: '8000000', contry: 'USA', region: 'Columbia'},
    {name: 'Warsaw', population: '6200000', contry: 'Poland', region: 'Warsaw'},
    {name: 'Kyiv', population: '2000000', contry: 'Ukraine', region: 'Kyiv'},
    {name: 'Berlin', population: '4000000', contry: 'Germany', region: 'Berlin'},
    {name: 'London', population: '5800000', contry: 'Great Britain', region: 'London'},
    {name: 'Rome', population: '4600000', contry: 'Italy', region: 'Rome'},
    {name: 'Liublin', population: '400000', contry: 'Poland', region: 'Liublin'},
    {name: 'Beijing', population: '36000000', contry: 'China', region: 'Bejing'},
    {name: 'Tokio', population: '14000000', contry: 'Japan', region: 'Tokio'}
]

// Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let arrOfCarsTwo = [
    {model: 'BMW', year: 2014, power: '135kW', color: 'black', driver: {name: 'Kolja', age: 32, sex: 'male', experience: '3 years'}},
    {model: 'Mercedes', year: 2004, power: '155kW', color: 'grey', driver: {name: 'Andriy', age: 22, sex: 'male', experience: '1.5 years'}},
    {model: 'Lamborghini', year: 2008, power: '235kW', color: 'yellow', driver: {name: 'Vadim Stepanych', age: 44, sex: 'male', experience: '7 years'}},
    {model: 'Volkswagen', year: 2011, power: '145kW', color: 'blue', driver: {name: 'Oleg', age: 37, sex: 'male', experience: '6 years'}},
    {model: 'Fiat', year: 2019, power: '95kW', color: 'white', driver: {name: 'Anja', age: 26, sex: 'female', experience: '5 years'}},
    {model: 'Toyota', year: 2012, power: '165kW', color: 'black', driver: {name: 'Volodymyr', age: 30, sex: 'male', experience: '5 years'}},
    {model: 'Ferrari', year: 2017, power: '293kW', color: 'red', driver: {name: 'Scott', age: 46, sex: 'male', experience: '15 years'}},
    {model: 'Nissan', year: 2002, power: '115kW', color: 'brown', driver: {name: 'Nazar', age: 29, sex: 'male', experience: '4 years'}},
    {model: 'Chevrolet', year: 2016, power: '85kW', color: 'green', driver: {name: 'Oleksiy', age: 31, sex: 'male', experience: '6 years'}},
    {model: 'Skoda', year: 2007, power: '141kW', color: 'pink', driver: {name: 'Vitalina', age: 35, sex: 'female', experience: '2 years'}}
]

// проитерировать каждый массив из задания 5,6,7 при помощи while.

let i = 0;
while (i < arrOfCars.length) {
    // console.log(arrOfCars[i]);
    i++;
}

let iTwo = 0;
while (iTwo < arrOfCities.length) {
    // console.log(arrOfCities[iTwo]);
    iTwo++;
}

let iThree = 0;
while (iThree < arrOfCarsTwo.length) {
    // console.log(arrOfCarsTwo[iThree]);
    iThree++;
}

// проитерировать каждый массив из задания 5,6,7 при помощи for

for (let i = 0; i < arrOfCars.length; i++) {
    console.log(arrOfCars[i]);
}

for (let i = 0; i < arrOfCities.length; i++) {
    console.log(arrOfCities[i]);
}

for (let i = 0; i < arrOfCarsTwo.length; i++) {
    console.log(arrOfCarsTwo[i]);
}

// проитерировать каждый массив из задания 5,6,7 при помощи  for of

for (let elem of arrOfCars) {
    // console.log(elem);
}

for (let elem of arrOfCities) {
    // console.log(elem);
}

for (let elem of arrOfCarsTwo) {
    // console.log(elem);
}

// взять объекты из задания 1 и превратить каждый в json.

let carJson = JSON.stringify(car);

let houseJson = JSON.stringify(house);

let flatJson = JSON.stringify(flat);

let userJson = JSON.stringify(user);

let bagJson = JSON.stringify(bag);

let knifeJson = JSON.stringify(knife);

let manJson = JSON.stringify(man);

let womanJson = JSON.stringify(woman);

let washingMachineJson = JSON.stringify(washingMachine);

let appleJson = JSON.stringify(apple);

// взять json из задания 11 и превратить их обратно в объекты.

let carParsed = JSON.parse(carJson);

let houseParsed = JSON.parse(houseJson);

let flatParsed = JSON.parse(flatJson);

let userParsed = JSON.parse(userJson);

let bagParsed = JSON.parse(bagJson);

let knifeParsed = JSON.parse(knifeJson);

let manParsed = JSON.parse(manJson);

let womanParsed = JSON.parse(womanJson);

let washingMachineParsed = JSON.parse(washingMachineJson);

let appleParsed = JSON.parse(appleJson);

// взять массив из задания 5,в цикле перебрать его объекты превратив их в json

for (let i = 0; i < arrOfCars.length; i++) {
    JSON.stringify(arrOfCars[i]);
}

// взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

for (let i = 0; i < arrOfCities.length; i++) {
    JSON.stringify(arrOfCities[i]);
}

// взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let newArrOfCars = [];
for (let i = 0; i < arrOfCarsTwo.length; i++) {
    let arrJson = JSON.stringify(arrOfCarsTwo[i]);
    newArrOfCars[i] = arrOfCarsTwo[i];
}

// Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
