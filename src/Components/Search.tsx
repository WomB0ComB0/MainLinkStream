import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Links } from '../constants';
import CardContainer from './CardContainer';
import { SearchIcon } from './browser/icons/index';
import FeaturedContainer from './FeaturedContainer';
import { Section } from './semantics/index';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    setSearchParams({ q: newValue }, { replace: true });
  };
  // eslint-disable-next-line max-len
  const filteredLinks = Links.filter((link) => link.name.toLowerCase().includes(searchValue.toLowerCase()));
  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.history.pushState(null, '', `?q=${searchValue}`);
  };
  return (
    <div className="">
      <div className="">
        <form
          role="search"
          onSubmit={handleSearchSubmit}
          autoComplete="on"
          className="flex items-center justify-center max-w-2xl px-3 py-1 mx-auto space-x-2 transition-transform bg-blue-300 min-w-fit rounded-xl"
        >
          <SearchIcon />
          <input
            aria-label="Search links"
            placeholder="Search"
            type="search"
            value={searchValue}
            onChange={handleSearchChange}
            className="flex-1 bg-transparent border-none outline-none focus:ring-0 focus:border-transparent"
          />
        </form>
      </div>
      <div className="flex items-center justify-center mt-5">
        <FeaturedContainer />
      </div>
      <Section className="mt-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-[20px] space-y-[24px] w-full ml-auto mr-auto">
          {filteredLinks.map((link) => (
            <CardContainer
              key={link.id}
              id={link.id}
              name={link.name}
              description={link.description}
              link={link.link}
              image={link.sourceSVG}
              featured={link.featured}
              type={link.type}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};
export default Search;
