import React, { useEffect } from "react";
import { useState } from "react";
import { RiseLoader } from "react-spinners";
import Footer from "./footer";
import { Link } from "react-router-dom";
function LandingPage(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {loading ? (
        <div className="items-center justify-center flex w-full h-screen text-center bg-gray-800 text-white text-xl">
          <ul>
            <li>
              <RiseLoader size={15.5} color="#0cbbd3" />
            </li>
            <li>Please Wait</li>
          </ul>
        </div>
      ) : (
        <section class="bg-gray-700 dark:bg-gray-800 ">
          <div class="container px-6 py-16 mx-auto text-center">
            <div class="max-w-lg mx-auto">
              <h1 class="text-3xl font-bold text-white dark:text-white md:text-4xl">
                Best Place to find your Apartments
              </h1>
              <p class="mt-6 text-white dark:text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                similique obcaecati illum mollitia.
              </p>
              <Link to={props.userLink1}>
                <button class="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-teal-600 rounded-lg hover:bg-teal-500 md:mx-0 md:w-auto focus:outline-none">
                  {props.user1} As Owner
                </button>
              </Link>
              <Link to={props.userLink2}>
                <button class="px-6 py-2 mt-6 ml-2 text-sm font-medium leading-5 text-center text-white capitalize bg-gray-900 rounded-lg hover:bg-gray-500 md:mx-0 md:w-auto focus:outline-none">
                  {props.user2} As Tenant
                </button>
              </Link>
            </div>

            <div class="flex justify-center mt-10">
              <img
                className="rounded-xl animate-pulse"
                src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
          <Footer />
        </section>
      )}
    </>
  );
}

export default LandingPage;
