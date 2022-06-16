import React from "react";
import axios from "axios";
import { useState } from "react";
export default function ModalAddAp(props) {
  const [AddAp, setAddAp] = useState({
    location: "",
    rooms: "",
    price: "",
    floors: "",
    description: "",
    washrooms: "",
  });
  const handleAddApChange = (event) => {
    setAddAp({ ...AddAp, [event.target.id]: event.target.value });
  };
  const handleApartmentAdd = () => {
    axios
      .post(`http://localhost:3001/Apartments/${props.ownerEmail}`, AddAp)
      .then(function (response) {
        console.log("ho gaya add");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
    <div className="flex align-middle">
      <button
        className="px-5  py-3 text-sm font-medium text-white bg-gray-800 rounded-br-full"
        type="button"
        onClick={() => {
            setShowModal(true);
        }}
        >
        +Add New Apartment
      </button>
          </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add New Apartment</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="mb-3 pt-0 flex justify-cente text-slate-900">
                    Description
                    <input
                      id="description"
                      type="text"
                      placeholder="DESCRIPTION"
                      onChange={handleAddApChange}
                      className="px-24 ml-4 py-3 placeholder-slate-300 text-slate-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-slate-300 focus:ring w-full"
                    />
                  </div>
                  <div className="mb-3 pt-0 flex justify-cente text-slate-900">
                    Floors
                    <input
                      id="floors"
                      onChange={handleAddApChange}
                      type="text"
                      placeholder="FLOORS"
                      className="px-24 ml-4 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-slate-300 focus:ring w-full"
                    />
                  </div>
                  <div className="mb-3 pt-0 flex justify-cente text-slate-900">
                    Rooms
                    <input
                      id="rooms"
                      onChange={handleAddApChange}
                      type="text"
                      placeholder="ROOMS"
                      className="px-24 ml-4 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-slate-300 focus:ring w-full"
                    />
                  </div>
                  <div className="mb-3 pt-0 flex justify-cente text-slate-900">
                    Location
                    <input
                      id="location"
                      onChange={handleAddApChange}
                      type="text"
                      placeholder="LOCATION"
                      className="px-24 ml-4 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow-sm shadow outline-none focus:outline-slate-300 focus:ring w-full"
                    />
                  </div>
                  <div className="mb-3 pt-0 flex justify-cente text-slate-900">
                    Rent
                    <input
                      id="price"
                      onChange={handleAddApChange}
                      type="text"
                      placeholder="RENT"
                      className="px-24 ml-4 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow-sm shadow outline-none focus:outline-slate-300 focus:ring w-full"
                    />
                  </div>
                  <div className="mb-3 pt-0 flex justify-cente text-slate-900">
                    Washrooms
                    <input
                      id="washrooms"
                      onChange={handleAddApChange}
                      type="text"
                      placeholder="RENT"
                      className="px-24 ml-4 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow-sm shadow outline-none focus:outline-slate-300 focus:ring w-full"
                    />
                  </div>
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
                    type="submit"
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => {
                      setShowModal(false);
                      handleApartmentAdd();
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
