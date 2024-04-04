import React from "react";

const SearchModel = ({ onOpen, onClose, search }) => {
  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white p-4 rounded-lg w-96">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md p-2"
            value={search}
            onChange={(e) => search(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchModel;
