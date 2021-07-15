"use strict";

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


// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// const cat = "toys";

// console.log(`Hello,${cat}`);




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
        console.log('done');
    }  else {
        console.log('error');
        i--;
    }

    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно много фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}


const isChecked = true,
      isClose = false;
 
console.log(isChecked || isChecked);      



const $bektiki = 'toys';

console.log(`https:/someurl.com/${$bektiki}`);
      