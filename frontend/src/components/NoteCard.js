const NoteCard = ({ onClick }) => {
  return (
    <div className="container mx-auto p-5 notes-main">
      <div class="flex flex-wrap -mx-4">
        {/* <!-- First card --> */}
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          {/* <!-- Your NoteCard component or template goes here --> */}
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-2">Note Title 1</h2>
            <p class="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed auctor felis nec mi laoreet, at hendrerit sapien
              tempor.
            </p>
            <div class="flex justify-end">
              <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
                Delete
              </button>
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"  onClick={onClick} >
                Update
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Second card --> */}
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          {/* <!-- Your NoteCard component or template goes here --> */}
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-2">Note Title 2</h2>
            <p class="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed auctor felis nec mi laoreet, at hendrerit sapien
              tempor.
            </p>
            <div class="flex justify-end">
              <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
                Delete
              </button>
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Update
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Third card --> */}
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          {/* <!-- Your NoteCard component or template goes here --> */}
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-2">Note Title 3</h2>
            <p class="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed auctor felis nec mi laoreet, at hendrerit sapien
              tempor.
            </p>
            <div class="flex justify-end">
              <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
                Delete
              </button>
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Update
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Fourth card --> */}
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          {/* <!-- Your NoteCard component or template goes here --> */}
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-2">Note Title 4</h2>
            <p class="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed auctor felis nec mi laoreet, at hendrerit sapien
              tempor.
            </p>
            <div class="flex justify-end">
              <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
                Delete
              </button>
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Update
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Fourth card --> */}
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          {/* <!-- Your NoteCard component or template goes here --> */}
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-2">Note Title 4</h2>
            <p class="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed auctor felis nec mi laoreet, at hendrerit sapien
              tempor.
            </p>
            <div class="flex justify-end">
              <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
                Delete
              </button>
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Update
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Fourth card --> */}
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          {/* <!-- Your NoteCard component or template goes here --> */}
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-2">Note Title 4</h2>
            <p class="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed auctor felis nec mi laoreet, at hendrerit sapien
              tempor.
            </p>
            <div class="flex justify-end">
              <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
                Delete
              </button>
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Update
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Fourth card --> */}
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          {/* <!-- Your NoteCard component or template goes here --> */}
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-2">Note Title 4</h2>
            <p class="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed auctor felis nec mi laoreet, at hendrerit sapien
              tempor.
            </p>
            <div class="flex justify-end">
              <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
                Delete
              </button>
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard
