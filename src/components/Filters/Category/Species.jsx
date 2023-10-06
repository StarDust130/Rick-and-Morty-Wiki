/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import FilterBTN from "../FilterBTN";
import { useState } from "react";

function Species({ setSpecies, setPageNumber }) {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="border  shadow mb-1">
        <button
          className={`w-full py-2 px-4 bg-white text-black   text-left relative`}
          onClick={toggleAccordion}
        >
          Species
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
              {species.map((items, index) => (
                <FilterBTN
                  setPageNumber={setPageNumber}
                  task={setSpecies}
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
    </>
  );
}
export default Species;

