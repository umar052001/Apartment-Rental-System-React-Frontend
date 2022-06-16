import React from "react";
import Delete from "./Delete";
import ModalAp from "./modalEditApartment";
import ModalAm from "./modalAmenities";

function Table(props) {
  const { ownerData } = props;
  

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Rooms
              </th>
              <th scope="col" className="px-6 py-3">
                Rent
              </th>
              <th scope="col" className="px-6 py-3">
                Washrooms
              </th>
              <th scope="col" className="px-6 py-3">
                floors
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {ownerData.map((data) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {data.apartmentid}
                </th>
                <td className="px-6 py-4">{data.loc}</td>
                <td className="px-6 py-4">{data.rooms}</td>
                <td className="px-6 py-4">{data.price}</td>
                <td className="px-6 py-4">{data.washrooms}</td>
                <td className="px-6 py-4">{data.floors}</td>
                <td className="px-6 py-4">{data.description}</td>
                <td className="px-6 py-4 text-right">
                  <div className="inline-block">
                    <ModalAp apid={data.apartmentid} />
                    <Delete apid={data.apartmentid} />
                    <ModalAm apid={data.apartmentid} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
