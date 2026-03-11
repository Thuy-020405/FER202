import React, { createContext, useReducer, useContext, useEffect, useCallback } from 'react';
import { movieReducer, initialMovieState } from '../reducers/movieReducers';
import movieApi from '../api/movieAPI';

export const MovieStateContext = createContext(initialMovieState);
export const MovieDispatchContext = createContext(null);

export const useMovieState = () => useContext(MovieStateContext);
export const useMovieDispatch = () => useContext(MovieDispatchContext);

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialMovieState);

  const fetchMovies = useCallback(async () => {
    dispatch({ type: 'START_LOADING' });
    try {
      const response = await movieApi.get('/movies');
      dispatch({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
      dispatch({ type: 'SET_MOVIES', payload: [] });
    }
  }, []);

  const fetchGenres = useCallback(async () => {
    try {
      const response = await movieApi.get('/genres');
      dispatch({ type: 'SET_GENRES', payload: response.data });
    } catch {
      dispatch({ type: 'SET_GENRES', payload: [] });
    }
  }, []);

  const confirmDelete = async (id) => {
    await movieApi.delete(`/movies/${id}`);
    fetchMovies();
  };

  const handleCreateOrUpdate = async (data, isEditing, id) => {
    if (isEditing) {
      await movieApi.put(`/movies/${id}`, data);
    } else {
      await movieApi.post('/movies', data);
    }
    dispatch({ type: 'RESET_FORM' });
    fetchMovies();
    return true;
  };

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, [fetchMovies, fetchGenres]);

  return (
    <MovieStateContext.Provider value={state}>
      <MovieDispatchContext.Provider
        value={{ dispatch, confirmDelete, handleCreateOrUpdate }}
      >
        {children}
      </MovieDispatchContext.Provider>
    </MovieStateContext.Provider>
  );
};

export default MovieProvider;