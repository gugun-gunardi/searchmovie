import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import { setMovies, setSearchQuery, setErrorMessage } from './redux/movieSlice';
import axios from 'axios';

const API_KEY = 'efcc1952';

function App() {
  const dispatch = useDispatch();
  const { list: movies, errorMessage } = useSelector((state) => state.movies);

  const fetchMovies = async (query = 'Avengers') => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
      if (response.data.Response === 'True') {
        dispatch(setMovies(response.data.Search));
      } else {
        dispatch(setErrorMessage(response.data.Error || 'No movies found'));
      }
    } catch (error) {
      dispatch(
        setErrorMessage('Failed to fetch movies. Please try again later.')
      );
    }
  };

  const handleSearch = (query) => {
    dispatch(setSearchQuery(query));
    fetchMovies(query);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='app container-fluid'>
      .
      <div className='row pb-5'>
        <Header title='Movie Finder'>
          <Search onSearch={handleSearch} />
        </Header>
      </div>
      {errorMessage ? (
        <div className='alert alert-danger text-center mt-4' role='alert'>
          {errorMessage}
        </div>
      ) : (
        <div className='row mt-4'>
          {movies.map((movie) => (
            <div key={movie.imdbID} className='col-md-3 mb-4'>
              <Movie movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
