import React from "react";
import Cards from "./Cards";
import { useEffect } from "react";
import { useState } from "react";
import { RingLoader } from "react-spinners";

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
        <div className="items-center justify-center flex w-full h-screen text-center bg-white text-black text-xl">
          <ul>
            <li>
              <RingLoader size={200} color="#085353" />
            </li>
            <li>Loading...</li>
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
