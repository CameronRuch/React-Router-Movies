import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(res => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(res.data);
        })
        .catch(err => {
          console.error('Server Error', err);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Route path="/"/>
        <MovieList movies={movieList} />
    </div>
  );
}

