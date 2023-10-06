/* eslint-disable react/prop-types */



function InputGroup({ total, name, setID }) {
  // Capitalize the first letter of the name
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <div className="input-group mb-3">
        <select
          onChange={(e) => setID(e.target.value)}
          className="form-select"
          id={name}
          defaultValue=""
        >
          {total > 0 ? (
            <>
              <option value="">Choose...</option>
              {Array.from({ length: total }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {capitalized} - {index + 1}
                </option>
              ))}
            </>
          ) : (
            <option disabled>{capitalized} - Not Found 😿</option>
          )}
        </select>
      </div>
    </>
  );
}

export default InputGroup;


