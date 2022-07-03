import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import RegisterOwner from "./components/registerOwner";
import RegisterTenant from "./components/registerTenant";
import SignInOwner from "./components/SignInOwner";
import SignInTenant from "./components/SignInTenant";
import Error from "./components/Error";
import OwnerPanel from "./components/OwnerPanel/ownerPanel";
import { useState } from "react";
import Navbar from "./components/navbar";
import Navbar2 from "./components/Navbar2";
import ProfileOwner from "./components/OwnerPanel/ProfileOwner";
import axios from "axios";
import GetAmenities from "./components/OwnerPanel/displayAmenities";
import TenantPanel from "./components/TenantPanel/tenantPanel";
import TenantProfile from "./components/TenantPanel/tenantProfile";
function App(props) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [SignIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  // Getting data for owner Panel
  const [ownerData, setOwnerData] = useState([]);
  axios
    .get(`http://localhost:3001/ownerPanel/${SignIn.email}`)
    .then(function (response) {
      setOwnerData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div>
      {isSignedIn ? (
        <Navbar2
          button="SignOut"
          setIsSignedIn={setIsSignedIn}
          isOwner={isOwner}
        />
      ) : (
        <Navbar button="Sign In" />
      )}

      <Routes>
        <Route path="/tenantPanel" element={<TenantPanel />} />
        <Route
          path="/profileTenant"
          element={<TenantProfile email={SignIn.email} />}
        />
        <Route path="/amenities" element={<GetAmenities ownerData />} />
        <Route
          path="/profileOwner"
          element={<ProfileOwner email={SignIn.email} />}
        />
        <Route
          path={`/ownerPanel`}
          element={<OwnerPanel ownerData={ownerData} email={SignIn.email} />}
        />
        <Route path="*" element={<Error />} />
        <Route
          exact
          path="/"
          element={
            <LandingPage
              user1="Register"
              userLink1="registerOwner"
              user2="Register"
              userLink2="registerTenant"
            />
          }
        />
        <Route
          exact
          path="/signin"
          element={
            <LandingPage
              user1="Sign In"
              userLink1="signinOwner"
              user2="Sign In"
              userLink2="signinTenant"
            />
          }
        />
        <Route exact path="/registerOwner" element={<RegisterOwner />} />
        <Route exact path="/registerTenant" element={<RegisterTenant />} />
        <Route
          exact
          path="/signin/signinTenant"
          element={
            isSignedIn ? (
              <Navigate to={`/tenantPanel`} />
            ) : (
              <SignInTenant
                SignIn={SignIn}
                setSignIn={setSignIn}
                isSignedIn={isSignedIn}
                setIsOwner={setIsOwner}
                setIsSignedIn={setIsSignedIn}
              />
            )
          }
        />
        <Route
          exact
          path="/signin/signinOwner"
          element={
            isSignedIn ? (
              <Navigate to={`/ownerPanel`} />
            ) : (
              <SignInOwner
                SignIn={SignIn}
                setSignIn={setSignIn}
                isSignedIn={isSignedIn}
                setIsSignedIn={setIsSignedIn}
                setIsOwner={setIsOwner}
              />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
