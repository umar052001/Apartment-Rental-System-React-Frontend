import React, { useEffect } from "react";
import { useState } from "react";
import { RiseLoader } from "react-spinners";
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
        <div className="items-center justify-center flex w-full h-screen text-center bg-gray-800 text-white text-xl">
          <ul>
            <li>
              <RiseLoader size={15.5} color="#0cbbd3" />
            </li>
            <li>Please Wait</li>
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
