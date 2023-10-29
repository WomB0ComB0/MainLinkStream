import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { formUrlQuery } from '../../utils';
import { Input } from '../ui/input';
// useLocation,

const SearchForm = () => {
  const searchParams = useSearchParams();
  const navigate = useNavigate();
  // const { pathname } = useLocation();

  const [search, setSearch] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      if (search) {
        newUrl = formUrlQuery({
          params: searchParams[0],
          key: 'query',
          value: search,
        });
      } else {
        newUrl = formUrlQuery({
          params: searchParams[0],
          keysToRemove: ['query'],
        });
      }

      navigate(newUrl);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, searchParams, navigate]);

  return (
    <form className="w-full mx-auto mt-10 flex-center sm:-mt-10 sm:px-5">
      <label className="relative w-full max-w-3xl flex-center">
        <img
          src="/magnifying-glass.svg"
          className="absolute left-8"
          width={32}
          height={32}
          alt="Search icon"
          role="img"
        />
        <Input
          className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
          type="text"
          name="search"
          placeholder="Search"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SearchForm;

// Rest of the code remains the same
