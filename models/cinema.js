const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function(){
  const results = this.films.map(function(film){
    return film.title;
  })
  return results;
}

Cinema.prototype.findByTitle = function(titleToFind){
  const result = this.films.find(function(film){
    return film.title === titleToFind;
  })
  return result;
}

// Cinema.prototype.filterByGenre = function(genreToFilter){
//   const results = this.films.filter(function(film){
//     return film.genre === genreToFilter;
//   })
//   return results;
// }

Cinema.prototype.checkIfAnyFilmsOfYear = function(yearToCheck){
  const result = this.films.some(function(film){
    return film.year === yearToCheck;
  })
  return result;
}

Cinema.prototype.checkIfAllFilmsAreOverThisLength = function(lengthToCheck){
  const result = this.films.every(function(film){
    return film.length > lengthToCheck;
  })
  return result;
}

Cinema.prototype.getTotalRunningTime = function(){
  let total = this.films.reduce(function(runningTotal, film){
    return runningTotal + film.length;
  }, 0);
  return total;
}

Cinema.prototype.filmsByProperty = function(property, value){
  const results = this.films.filter(function(film){
    return film[property] === value;
  })
  return results;
}

module.exports = Cinema;
