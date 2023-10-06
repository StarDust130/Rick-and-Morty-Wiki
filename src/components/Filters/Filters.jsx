/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Species from "./Category/Species";
import Status from "./Category/Status";
import Gender from "./Category/Gender";

function Filters({ setStatus, setPageNumber, setGender, 
  setSpecies }) { 
 let clear = () => {
  setStatus ("")
  setPageNumber("")
   setGender("")
    setSpecies("")
    window.location.reload(false)

 }

  return (
    <>
      <div className="col-3">
        <div className="text-center text-3xl font-bold mb-3">Filter</div>
        <div
          className="text-center  text-blue-600 cursor-pointer 
        mb-3"
          onClick={clear}
        >
          Clear Filters ♻️
        </div>

        <div className="accordion" id="accordionExample">
          <Status setStatus={setStatus} setPageNumber={setPageNumber} />
          <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
          <Gender setGender={setGender} setPageNumber={setPageNumber} />
        </div>
      </div>
    </>
  );
}
export default Filters;
