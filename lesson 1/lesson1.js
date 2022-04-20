console.log(1);


// const category = "toys";

// console.log('https:someurl.com/' + category);

// const persone = "Alex";

// alert(`Hello, ${persone}`);


const category = "toys";

console.log(`https://someurl.com/${category}/5`);


const answer = +prompt('Вам есть 18 лет?' , '');

console.log(typeof(answer));


console.log(2*4 == '8');


// const isChecked = true,
//        isClose = false;
 
// console.log(isChecked && isClose);


const testin = 31;
 

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB  = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};


for (let i = 0 ; i < 2; i++) {
       const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
       secondQuestion = prompt('На сколько оцените его?', '');

       if (firstQuestion !=null && secondQuestion !=null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
              personalMovieDB.movies[firstQuestion] = secondQuestion; 
                     console.log('готово');
       } else {
              console.log('уже под заебала ошибка да?');
       }
}

const $ist = 'toys';

console.log(`https//:someurl.com/${$ist}`);


const isChecked = true,
      isClose = true;
      
console.log(isChecked && isClose);      


const zadacha$ = 5 + 5;

switch (zadacha$) {

     case 10: {
       console.log('its right');
        break;
     }  

     case 11: {
       console.log('its not right');
         break;
    }  

    case 12: {
       console.log('its not right too');
         break;
    }  

    default: {
       console.log('nothing');
         break;     
    }
};


const $lisst = 'toys';

console.log(`htpps//someurl.com/${$lisst}`);


console.log('Xenia i love u so much');

alert('Xenia i love u')