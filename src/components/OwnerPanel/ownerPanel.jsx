import React, { useEffect } from "react";
import { useState } from "react";
import { RingLoader } from "react-spinners";
import ModalAddAp from "./modalAddApartment";
import Sidebar from "./sidebar";
import Table from "./table";

function OwnerPanel(props) {
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
        <>
          <ModalAddAp ownerEmail={props.email} />
          <div className="flex">
            <Sidebar />
            <Table ownerData={props.ownerData} />
          </div>
        </>
      )}
    </>
  );
}

export default OwnerPanel;
