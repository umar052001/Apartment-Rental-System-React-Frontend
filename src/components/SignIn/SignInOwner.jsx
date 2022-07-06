import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignInOwner = (props) => {
  const { setIsSignedIn, setIsOwner } = props;
  const { SignIn, setSignIn } = props;
  const handleChange = (event) => {
    setSignIn({ ...SignIn, [event.target.id]: event.target.value });
  };
  const handleOwnerSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signinOwner", SignIn)
      .then(function (response) {
        if (response.status === 200) {
          setIsSignedIn(true);
          setIsOwner(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <div className="bg-gray-700 px-14 py-16 ">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-white sm:text-3xl">
            Get started today as Owner
          </h1>

          <p className="max-w-md mx-auto mt-4 text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            onSubmit={handleOwnerSubmit}
            action=""
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl shadow-gray-500 bg-white"
          >
            <p className="text-lg font-medium">Sign in to your account</p>

            <div>
              <label for="email" className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-1">
                <input
                  onChange={handleChange}
                  type="email"
                  id="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label for="password" className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-1 mb-4">
                <input
                  onChange={handleChange}
                  type="password"
                  id="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Sign in
            </button>

            <p className="text-sm text-center text-gray-500">
              No account?
              <Link className="underline" to="/">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default SignInOwner;
