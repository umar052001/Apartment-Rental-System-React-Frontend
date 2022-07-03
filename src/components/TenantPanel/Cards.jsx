import React from "react";
import axios from "axios";
import { useState } from "react";
import { img } from "./apartments";
import { Link } from "react-router-dom";

function Cards() {
  const [tenantData, setTenantData] = useState([]);
  const [searchLoc, setSearchLoc] = useState("");
  const [searchDes, setSearchDes] = useState("");
  const handleChangeLoc = (event) => {
    setSearchLoc(event.target.value);
  };
  const handleChangeDes = (event) => {
    setSearchDes(event.target.value);
  };
  axios
    .get("http://localhost:3001/tenantPanel")
    .then(function (response) {
      setTenantData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <div className="flex">
        <div className="flex">
          <div className="ml-2 mt-2">
            <label class=" relative h-32 w-32">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
              <input
                onChange={handleChangeLoc}
                id="location"
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-12l border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Location"
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="ml-2 mt-2">
            <label class=" relative h-32 w-32">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
              <input
                onChange={handleChangeDes}
                id="location"
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-12l border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Description"
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-2 ml-2">
        {tenantData
          .filter((data) => {
            if (searchLoc === "" || searchDes === "") {
              return data;
            } else if (
              data.loc.toLowerCase().includes(searchLoc.toLowerCase())
            ) {
              return data;
            } else if (
              data.description.toLowerCase().includes(searchDes.toLowerCase())
            ) {
              return data;
            }
            return 0;
          })
          .map((data, key) => {
            return (
              <Link
                to="#"
                class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={img[key]}
                  alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.description}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <li>Location: {data.loc}</li>
                    <li>Rooms: {data.rooms}</li>
                    <li>Washrooms: {data.washrooms}</li>
                    <li>Floors: {data.floors}</li>
                    <li>Furnished: {data.furnished}</li>
                    <li>Gym: {data.gym}</li>
                    <li>Studio: {data.studio}</li>
                    <li>Laundry: {data.laundry}</li>
                    <li>Game Room: {data.gameroom}</li>
                    <li>Contact: {data.owneremail}</li>
                    <li>Rent: {data.price}$</li>
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default Cards;
