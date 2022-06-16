import React from "react";
import Sidebar from "./sidebar";
import { useState } from "react";
import axios from "axios";
function ProfileOwner(props) {
  const [ownerProfile, setOwnerProfile] = useState([]);
  axios
    .get(`http://localhost:3001/ownerProfile/${props.email}`)
    .then(function (response) {
      setOwnerProfile(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div>
      <section class="bg-white dark:bg-gray-800">
        <div class="container flex flex-col py-10  lg:flex-row ">
          <Sidebar />
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1 class="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                Here are your personal details {ownerProfile.ownername}.
              </h1>

              <div class="mt-8 space-y-5">
                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <span class="mx-2">Phone:+92 {ownerProfile.ownerphone}</span>
                </p>

                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <span class="mx-2">Email: {ownerProfile.owneremail}</span>
                </p>

                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <span class="mx-2">City: {ownerProfile.ownercity}</span>
                </p>

                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <span class="mx-2">Address: {ownerProfile.owneraddress}</span>
                </p>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              class="object-cover w-72 h-full mx-auto rounded-md lg:max-w-2xl"
              src="https://imgs.search.brave.com/EW-s9vFUES_VPkbNfJEajVgFIwew_SpYDTbBV_K5y-Y/rs:fit:800:1019:1/g:ce/aHR0cHM6Ly9saWJy/YXJ5Lmtpc3NjbGlw/YXJ0LmNvbS8yMDE4/MTIyMi9ycncva2lz/c2NsaXBhcnQtYnVz/aW5lc3MtbWFuLXdv/bWFuLWNsaXAtYXJ0/LWNsaXBhcnQtYnVz/aW5lc3NwZXJzb24t/MTJlYzc1ZmY3ZWQw/Mzg0My5wbmc"
              alt="glasses photo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileOwner;
