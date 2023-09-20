import useSearch from "@hooks/useSearch";

const SearchInput = () => {
  const { handleChange, searchValue, clearSearchInput } = useSearch();

  return (
    <div className="relative h-full w-full">
      <input
        onChange={handleChange}
        name="search-input"
        className="input"
        type="text"
        value={searchValue}
        placeholder="Search pictures by tag..."
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-black focus:outline-primary-500">
        {searchValue.length > 0 ? (
          <img
            className="h-full w-full"
            onClick={clearSearchInput}
            src="/assets/svg/close.svg"
            alt="Delete icon"
          />
        ) : (
          <img
            className="h-full w-full"
            src="/assets/svg/searchIcon.svg"
            alt="Search icon"
          />
        )}
      </span>
    </div>
  );
};

export default SearchInput;
