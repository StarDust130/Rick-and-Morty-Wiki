/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

function FilterBTN({ name, index, items, task, setPageNumber }) {
  return (
    <>
      <style>
        {`
        input[type="radio"]{
          display: none;
        }
        .x:checked + label{
          background-color:#0b5ed7;
          color:white;

        }


        `}
      </style>
      <div className="form-check">
        <input
        onClick={() =>{
          setPageNumber(1);
          task(items)
        }}

          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name} - ${index}`}
        />
        <label
          className="btn btn-outline-primary"
          htmlFor={`${name} - ${index}`}
        >
          {items}
        </label>
      </div>
    </>
  );
}

FilterBTN.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

export default FilterBTN;
