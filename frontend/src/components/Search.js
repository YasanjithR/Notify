const Search = ()=>{

    return (
      <div className="flex justify-center items-center h-auto sm:h-48 bg-white p-4 search-div">
        {" "}
        <>
          <input
            type="text"
            className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-96"
            placeholder="Search..."
          />{" "}

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded">
            Search
          </button>
        </>
      </div>
    );


}

export default Search