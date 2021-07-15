"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};


const firstQuestion = prompt('Один из последних просмотренных фильмов?', '');
const secondQuestion = prompt('На сколько оцените его?', '');
const thirdQuestion = prompt('Один из последних просмотренных фильмов?', '');
const fourthQuestion = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstQuestion] = secondQuestion;
personalMovieDB.movies[secondQuestion] = fourthQuestion;

console.log(personalMovieDB);



const task = 5 + 5;


switch (task) {
   case 8: 
      console.log('Это неверно');
      break;

    case 9: 
      console.log('Это тоже неверно');
      break;
      
   case 10: 
      console.log('Это верно');
      break; 

   default: 
      console.log('В данном примере нету ответа');
      break      
}



