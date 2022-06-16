import React from "react";
import ModalAddAp from "./modalAddApartment";
import Sidebar from "./sidebar";
import Table from "./table";
function OwnerPanel(props) {
  return (
    <>
      <ModalAddAp ownerEmail={props.email} />
      <div className="flex">
        <Sidebar />
        <Table ownerData={props.ownerData} />
      </div>
    </>
  );
}

export default OwnerPanel;
