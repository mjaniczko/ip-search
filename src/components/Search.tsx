type SearchProps = {
  search: string;
  inputError: string;
  setSearch: (e: string) => void;
  handleClickSearch: () => void;
};

export function Search({
  search,
  inputError,
  setSearch,
  handleClickSearch,
}: SearchProps) {
  return (
    <div className="flex my-6 md:my-0 relative">
      <input
        type="text"
        name="search"
        id="search"
        className={`block w-full rounded-lg border border-gray-800 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 md:text-sm mr-4 ${
          inputError && "border-red-600"
        }`}
        placeholder="search box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {inputError && (
        <span className="absolute top-11 text-xs	text-bold text-red-600">
          {inputError}
        </span>
      )}
      <button
        onClick={handleClickSearch}
        className="h-10 px-6 font-semibold rounded-lg bg-black text-white"
        type="submit"
      >
        search
      </button>
    </div>
  );
}
