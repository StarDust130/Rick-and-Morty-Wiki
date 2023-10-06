/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import FilterBTN from './../FilterBTN'
import { useState } from "react";

function Gender({ setGender, setPageNumber }) {
  let genders = ["male", "female", "genderless", "unknown"];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="border  shadow bg-white  ">
        <button
          className={`w-full py-2 px-4 bg-white text-black    text-left relative`}
          onClick={toggleAccordion}
        >
          Gender
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
          <div className="p-4 bg-gray-100">
            <div className="text-gray-800 flex flex-wrap gap-2">
              {genders.map((items, index) => (
                <FilterBTN
                  task={setGender}
                  setPageNumber={setPageNumber}
                  key={index}
                  name="gender"
                  index={index}
                  items={items}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Gender

