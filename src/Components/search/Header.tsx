const Header = ({ query, type }: HeaderProps) => {
  if (query && type) {
    return (
      <h1 className="self-start heading3 text-white-800">
        Search results for &quot;{query}&quot; in <span className="capitalize">{type}</span>
      </h1>
    );
  }

  if (query) {
    return <h1 className="self-start heading3 text-white-800">Search results for &quot;{query}&quot;</h1>;
  }

  if (type) {
    return (
      <h1 className="self-start heading3 text-white-800">
        <span className="capitalize">{type}</span>
      </h1>
    );
  }

  return <h1 className="self-start heading3 text-white-800">No Results</h1>;
};

export default Header;
