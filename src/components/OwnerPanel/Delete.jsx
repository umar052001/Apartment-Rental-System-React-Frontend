import React from "react";
import axios from "axios";

function Delete(props) {
  const handleApartmentDelete = () => {
    axios
      .delete(`http://localhost:3001/Apartments/${props.apid}`)
      .then(function (response) {
        console.log("ho gaya delete ab maaf krr ");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <button
        onClick={handleApartmentDelete}
        type="button"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-6 py-2 mb-2 mr-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Delete
      </button>
    </div>
  );
}

export default Delete;
