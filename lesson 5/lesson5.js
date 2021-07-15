"use strict";

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5/6`);

// const user = "Alex";

// alert(`Hello, ${user}`);


let number = 4.6;

console.log(-4/0);
console.log('string' * 9);


// const persone = "Alex";

const bool = false;

console.log( 10 < 8);


console.log("2" === 2);

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


console.log(name);
var name = "Ivan";  //Хостинг, или всплытие переменных


// {
//     let result = 50;
// }

// console.log(result);  //прелесть такого подхода - пока мне не понятен и отличается такой особенностью

// {
//     var result = 50;
// }

// console.log(result);  //с переменной var это функция работает



// alert('Hello');

// const resul = confirm("Are u here?");
// console.log(resul);

// const answer = confirm("Вам есть 18 лет?", "");

// document.write(answer);

// console.log(answer + 5);


// const answers = [];

// answers[0] = prompt("Как вас зовут?");
// answers[1] = prompt("Какое у вас фамилие?");
// answers[2] = prompt("Сколько вам лет?");

// console.log(answers);




// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = prompt('На сколько оцените его?', '');
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


const category = 'toys';

console.log(`https:/someurl.com/${category}`);


const woman = 'Ariana';

alert(`Hello ${woman}`);



const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB  = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};


for (let i = 0; i < 2; i++) {
    const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
    secondQuestion = prompt('На сколько оцените его?', '');


    if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
        personalMovieDB.movies[firstQuestion] = secondQuestion;
        console.log('готово');
    } else {
        console.log('ошибка');
    }

}


if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
    console.log('Киноман');
} else {
    console.log('Ошибка у вас');
}
