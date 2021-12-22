const firstname = "Alex",
      lastname = "Ivanov";
      
 console.log(`Hello ${firstname} ${lastname}`);     


 const objj = {
     a: 50
 };

 objj.a = 25;

 console.log(objj);


 const category = "toys";

 console.log(`https://someurl.com/${category}`);


 const answers = [];

 answers[0] = prompt("Как вас зовут?");
 answers[1] = prompt("Какое у вас фамилие?");
 answers[2] = prompt("Сколько вам лет?");

 console.log(answers);


 const game = 'DBD';

 console.log(game);


const testChecked = true,
      testClose = false;

      
console.log(testChecked || testClose);     



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



    if (firstQuestion !=null && secondQuestion !=null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
        personalMovieDB.movies[firstQuestion] = secondQuestion;
            console.log('готово');
    } else {
        console.log('ошибка');
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count <= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB => 30) {
        console.log('Вы киноман');
} else {
    console.log('опять ошибка заебала уже да?');
}


const testing$ = 4+4;

switch (testing$) {
    case 7: {
        console.log('это верное решение');
        break;
    }

    case 9: {
        console.log('это неверное решение');
        break;
    }

    case 10: {
        console.log('это тоже неверное решение');
        break;
    }

    default: {
        console.log('в данном примере нету верного решения')
    }
}


const isChecked = true,
      isClose = true;

 console.log(isChecked && isClose);



 const rewenie = 6+6;

 switch (rewenie) {

    case 12: {
        console.log('pravilno');
        break;
    }

    case 13: {
        console.log('ne pravilno');
        break
    }

 }




 const isChecked = true,
        isClose = true;

console.log(isChecked && isClose);




const tast = 5+5;

switch (tast) {
    
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
}



const category$ = 'toys';

console.log(`htpps://someurl.com/${category$}`);



const zadacha = 100; {

    switch (zadacha) {
        case 1010: {
            console.log('its right');
                break;
        }

        case 200: {
            console.log('dont right');
                break;
        }

        case 300: {
            console.log('dont right too');
                break;
        }

        default: {
            console.log('nothing');
                break;
        }
    }

}