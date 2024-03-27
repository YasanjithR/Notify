const Search = () => {
  return (
    <div className="flex justify-center items-center h-auto sm:h-48 bg-back-gradient p-4 search-div">
      {" "}
      <>
        <input
          type="text"
          className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-96 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search..."
        />{" "}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded">
          Search
        </button>
      </>
    </div>
  );
};

export default Search;
