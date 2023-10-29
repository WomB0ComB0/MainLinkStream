import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { formUrlQuery } from '../../utils/index';

const links = ['all', 'Development', 'Socials', 'Networking', 'Design', 'Learning'];

const Filters = () => {
  const [active, setActive] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleFilter = (link: string) => {
    let newUrl = '';

    if (active === link) {
      setActive('');

      newUrl = formUrlQuery({
        params: searchParams,
        keysToRemove: ['category'],
      });
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParams,
        key: 'category',
        value: link.toLowerCase(),
      });
    }

    navigate(newUrl);
  };

  return (
    <ul className="flex w-full max-w-full gap-2 py-12 overflow-auto text-white-800 body-text no-scrollbar sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ? 'gradient_blue-purple' : ''
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
