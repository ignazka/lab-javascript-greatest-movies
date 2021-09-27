// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((element) => `${element.director}`);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramaMovies = movies.filter(function (movies) {
    const isSpielberg = movies.director === 'Steven Spielberg';
    const isDrama = movies.genre.includes('Drama');
    return isSpielberg && isDrama;
  });
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  } else {
    const averageScore = movies.reduce(function (accumulator, currentValue) {
      if (!currentValue.score) {
        currentValue.score = 0;
      }
      return accumulator + currentValue.score;
    }, 0);

    return Number((averageScore / movies.length).toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const averageScoreDrama = movies.reduce(function (acc, current) {
    if (current.genre.includes('Drama')) {
      return acc + current.score;
    } else {
      return 0;
    }
  }, 0);
  return Number((averageScoreDrama / movies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesByYear = [];
  for (let i = 0; i < movies.length; i++) {
    moviesByYear.push(movies[i]);
  }
  moviesByYear.sort(function (current, next) {
    if (current.year === next.year) {
      if (current.title < next.title) {
        return -1;
      } else if (current.title > next.title) {
        return 1;
      }
    }
    return current.year - next.year;
  });
  return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let newArr = [];
  for (let i = 0; i < movies.length; i++) {
    newArr.push(movies[i]);
  }

  newArr.sort((current, next) => (current.title < next.title ? -1 : 1));
  let only20 = newArr.reduce(function (acc, val) {
    return acc + val.title;
  }, []);

  return only20;
}

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
