import React from "react";
import { useState } from "react";
import axios from "axios";
function GetAmenities(props) {
  const [amenities, setAmenities] = useState([]);
  props.ownerData.map((data) => {
    axios
      .get(`http://localhost:3001/Amenities/${data.apartmentid}`)
      .then(function (response) {
        setAmenities(response.data);
        console.log(amenities);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return <div>{amenities.id}</div>;
}

export default GetAmenities;
