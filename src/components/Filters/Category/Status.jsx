/* eslint-disable react/prop-types */
import { useState } from "react";
import FilterBTN from "../FilterBTN";


function Status({ setStatus, setPageNumber }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="border  shadow mb-1">
      <button
        className={`w-full py-2 px-4 bg-white text-black text-left relative `}
        onClick={toggleAccordion}
      >
        Status
        <span
          className={`absolute top-1/2 right-4 transform ${
            isExpanded ? "rotate-180" : ""
          } transition-transform -translate-y-1/2`}
        >
          <img src="https://img.icons8.com/ios-glyphs/20/expand-arrow--v1.png " />
        </span>
      </button>
      {/* */}

      {isExpanded && (
        <div className="p-4 bg-gray-100 ">
          <div className="text-black flex flex-wrap gap-2">
            {status.map((items, index) => (
              <FilterBTN
                task={setStatus}
                setPageNumber={setPageNumber}
                key={index}
                name="status"
                index={index}
                items={items}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Status;
