'use strict';

if (4 > 5) {
    console.log('ok!');
} else {
    console.log('Error');
}



// if(num < 49) {
//     console.log('Error');
// }  else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('ok!');
// }

// (num === 50) ? console.log('ok!') :  console.log('Error');

const task = 5 *5;

switch (task) {

    case 225: {
        console.log('это верно');
        break;
    }

    case 35: {
        console.log('неверно');
        break;
    }

    case 25: {
        console.log('это тоже неверно');
        break;
    }

    default: 
        console.log('нет правильного ответа');
        break;
}

const numm = 100;

switch (numm) {
    case 1002:
        console.log('Это правильно');
        break;

    case 200:
        console.log('Это неправильно');
        break;

    case 300:
        console.log('Это тоже неправильно');
        break;
    
    default:
        console.log('Ничего неправильно');
        break;          
}

const persone = "Alex",
      lastname = "Lampard";  

console.log(`Hello ${persone} ${lastname}`);


// const num = 50;

// switch (num) {
//     case 49:
//         console.log('dont right');
//          break;
//     case 100:
//         console.log('dont right x2');
//         break;
//     case 50:
//         console.log('OH YES BABY ITS RIGHT');
//         break;
//     default:
//         console.log('not working ur code');
//         break;        
// }


if (100 > 119) {
    console.log('its right');
} else {
    console.log('dont right');
}


if (20 > 10) {
    console.log('Это верно');
} else {
    console.log('Не верно');
}


const category = 'toys';

console.log(`https://someurl.com/${category}`);


const testing = "full test";

console.log(`My first test${testing}`);

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


    if(firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
        personalMovieDB.movies[firstQuestion] = secondQuestion;
            console.log('done');
    } else {
        console.log('error');
    }

}

const zadacha = 2+2;

switch(zadacha) {
        
    case 4: {
        console.log('its right');
            break;
    }


    case 6: {
        console.log('dont right');
            break;
    }

    case 8: {
        console.log('dont right too');
            break;
    }
     
    default: {
        console.log('nothing');
            break;
    }

}



const xenia = 25; 

    switch(xenia) {
        
        case 25: {
            console.log('да ей 25'); 
                break;
        }

        case 26: {
            console.log ('ей вроде бы не 25');
                break;
        }

        case 28: {
            console.log('ей не 25');
                break;
        }

        default: {
            console.log('а что тут происходит Бляд?');
                break;
        }        

    }
