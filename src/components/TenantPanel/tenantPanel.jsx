import React from "react";
import Cards from "./Cards";
import { useEffect } from "react";
import { useState } from "react";
import { RiseLoader } from "react-spinners";

function TenantPanel() {
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
        <div>
          <Cards />
        </div>
      )}
    </>
  );
}

export default TenantPanel;
