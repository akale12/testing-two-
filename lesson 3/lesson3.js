"use strict";

let number = 4.6;

console.log(4/0);
console.log('string' * 9);

const persone = "Alex";

const bool = false;

console.log( 10 < 8);


console.log('2' === 2);

let halo;

console.log(halo);


// console.log(something); //null - это когда вообще ничего не существует.

let und;
console.log(und);

const $$obj = {
    name: "John", // ключ = значения ключ это name, значения - это John
    age: 25,
    isMarried: false        
};

// console.log($$obj.name);

// console.log($$obj["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[1]);

const $personee = {
    name: "Khan",
    age: 22,
    isMarried: false 
};

console.log($personee.name);

// console.log($personee["age"]);


// a = 15; 
// console.log(a);

let $number = 5;

$number = 10;
console.log($number);

const leftBorderWidth = 1;    //такой формат называется КемолКейс

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

// leftBorderWidth = 10;



const testforme = 2 * 2;

switch (testforme) {
    case 43:
        console.log('Это правильное решение');
        break;

    case 5:
        console.log('Это невереное решение');    
        break;

    case 6:
        console.log('Это тоже неверное решение');
        break;
    
    default:
        console.log('В данной задаче, нет правильного решения');
        break;
}   


const num = 100;

switch (num) {
    case 100:
        console.log('its right');
        break;
    
    case 200:
        console.log('its dont right');
        break;

    case 300:
        console.log('its dont right too');
        break;
        
    default:
        console.log('nothing dont right');
        break;    
}

console.log(name);
var name = "Ivan";  //Хостинг, или всплытие переменных


const isChecked = true,
       isClose = true;
       
console.log(isChecked && isClose);


// {
//     let result = 50;
// }

// console.log(result);  //прелесть такого подхода - пока мне не понятен но отличается такой особенностью

// {
//     var result = 50;
// }

// console.log(result);  //с переменной var это функция работает

