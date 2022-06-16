import React from "react";

function Filter(props) {
  return (
    <div className="flex">
      <div className="ml-2 mt-2">
        <label class=" relative h-32 w-32">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
          <input
            id="location"
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-12l border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Location"
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="ml-2 mt-2">
        <label class=" relative h-32 w-32">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
          <input
            id="price"
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-12l border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Price"
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="ml-2 mt-2">
        <label class=" relative h-32 w-32">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
          <input
            id="rooms"
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-12l border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Rooms"
            type="text"
            name="search"
          />
        </label>
      </div>

      <button class="px-2 py-1 ml-2 mt-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-black focus:ring-opacity-80">
        Filter
      </button>
    </div>
  );
}

export default Filter;
