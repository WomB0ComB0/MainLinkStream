import { useState, useEffect } from 'react';
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsError, setSearchResultsError] = useState(false);

  const search = async () => {
    setSearchResultsLoading(true);
    setSearchResultsError(false);
    try {
      const response = await fetch(`/api/search?query=${searchTerm}`);
      const results = await response.json();
      setSearchResults(results);
    } catch (error) {
      setSearchResultsError(true);
    }
    setSearchResultsLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={search}>Search</button>
      {searchResultsLoading && <div>Loading...</div>}
      {searchResultsError && <div>Error</div>}
      {searchResults && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Search;