// The `movies` dataay from the file `src/data.js`.
const movies = require('./data');
console.log('movies: ', movies);



// Iteration 1: All directors? - Get the dataay of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the dataay of directors.
// How could you "clean" a bit this dataay and make it unified (without duplicates)?
//function getAllDirectors() {}
console.log('----------------------------------------------------------------------------------');
const getAllDirectors = movies.map((movies)=>{
  return `${movies.director}`
});

//console.log(getAllDirectors)
  let uniqueDirectors = [];
  getAllDirectors.forEach((element) => {
      if (!uniqueDirectors.includes(element)) {
          uniqueDirectors.push(element);
      }
  });
  
 // console.log(uniqueDirectors);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//function howManyMovies() {}

const howManyMovies = movies.filter(movie => movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama'));
console.log(`Steven Spielberg directed ${howManyMovies.length} movies in the genre Drama that are in the top 250 of all time!`);



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function avgScore(data){
  const scoreSum = data.reduce((aScore, currentMovie) => 
  {
    return aScore + currentMovie.score;
  }, 0);
  let total = scoreSum / data.length;
  return total.toFixed(2);
};
console.log(avgScore(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovie = arr.filter(movie => movie.genre.includes('Drama'));
  const scoreSum = dramaMovie.reduce((aScore, currentMovie) => 
  {
    return aScore + currentMovie.score;
  }, 0);
  let total = scoreSum / arr.length;
  return total.toFixed(2);
  };
console.log(dramaMoviesScore(movies));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(arr) {
const getYear = arr.sort(function (a, b) {
  return a.year - b.year;
})
return getYear.reverse()
};
//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(alfabet) {
  const sortAlfa = alfabet.sort (function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
  })
  const result = sortAlfa.splice(0,20)
  return result;
}
  console.log(orderAlphabetically(movies))









































// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
//function bestYearAvg() {}



// The following is required to make unit tests work.
// Environment setup. Do not modify the below code. 
/*if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
*/