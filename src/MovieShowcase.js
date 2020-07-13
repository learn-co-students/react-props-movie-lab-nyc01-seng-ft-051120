import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  state= {
    movies: movieData
  }
 
  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    const movies  =  this.state.movies
    return movies.map(movie=><MovieCard {...movie}/>)
  }
   

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
