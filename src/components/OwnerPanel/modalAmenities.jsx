import React from "react";
import axios from "axios";
import { useState } from "react";
export default function ModalAm(props) {
  const [Am, setAm] = useState({
    id:props.apid,
    gym: false,
    gameroom: false,
    laundry: false,
    studio: false,
    furnished: false,
  });
  const handleAmChange = (event) => {
    setAm({ ...Am, [event.target.id]: event.target.checked });
  };
  const handleAmenitiesAdd = () => {
    axios
      .post(`http://localhost:3001/Amenities/${props.apid}`, Am)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-teal-600 text-white active:bg-teal-600 font-bold uppercase px-4 py-2 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Am
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div>
                  <label class="flex items-center space-x-3 mb-3">
                    <input
                      id="gym"
                      type="checkbox"
                      name="checked-demo"
                      class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
                      onChange={handleAmChange}
                    />
                    <span class="text-gray-700 dark:text-white font-normal">
                      Gym
                    </span>
                  </label>
                  <label class="flex items-center space-x-3 mb-3">
                    <input
                      id="gameroom"
                      onChange={handleAmChange}
                      type="checkbox"
                      name="checked-demo"
                      class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent focus:outline-none"
                    />
                    <span class="text-gray-700 dark:text-white font-normal">
                      Game Room
                    </span>
                  </label>
                  <label class="flex items-center space-x-3 mb-3">
                    <input
                      id="laundry"
                      onChange={handleAmChange}
                      type="checkbox"
                      name="checked-demo"
                      class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"
                    />
                    <span class="text-gray-700 dark:text-white font-normal">
                      Laundry
                    </span>
                  </label>
                  <label class="flex items-center space-x-3 mb-3">
                    <input
                      id="studio"
                      onChange={handleAmChange}
                      type="checkbox"
                      name="checked-demo"
                      class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-yellow-500 checked:border-transparent focus:outline-none"
                    />
                    <span class="text-gray-700 dark:text-white font-normal">
                      Studio
                    </span>
                  </label>
                  <label class="flex items-center space-x-3 mb-3">
                    <input
                      id="furnished"
                      onChange={handleAmChange}
                      type="checkbox"
                      name="checked-demo"
                      class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
                    />
                    <span class="text-gray-700 dark:text-white font-normal">
                      Furnished
                    </span>
                  </label>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      handleAmenitiesAdd();
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
