import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../redux/movieSlice';

const Search = ({ onSearch }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.movies.searchQuery);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    onSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className='p-1'>
      <div className='input-group '>
        <input
          type='text'
          className='form-control mr-sm-2'
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          onKeyPress={handleKeyPress}
          placeholder='Search for a movie...'
        />
        <button
          type='button'
          className='btn btn-outline-success my-2 my-sm-0'
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
