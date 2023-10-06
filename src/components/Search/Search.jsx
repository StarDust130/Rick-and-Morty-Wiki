/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./search.module.scss";

function Search({ setSearch, setPageNumber }) {
  return (
    <>
      <form className="flex justify-center gap-4 mb-5 " action="">
        <input
          onChange={(e) => {
            setPageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Search Character..."
          type="text"
          className={`${styles.input} :outline-none:focus`}
        />
        <button onClick={(e) => {e.preventDefault()}} className={`btn btn-primary  text-lg`}>Search</button>
      </form>
    </>
  );
}
export default Search