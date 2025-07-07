const Search = () => {
  return (
    <div className="mt-12 text-center">
      <form className="space-y-6" action="#" method="POST">
        <div className="mt-2">
          <input
            type="text"
            name="text"
            id="search"
            autoComplete="search"
            required
            placeholder="Search for dishes or restuarants"
            className="w-lg rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-900 sm:text-sm/6"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
