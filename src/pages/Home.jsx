/* eslint-disable no-unused-vars */
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Filters from "../components/Filters/Filters";
import Cards from "../components/Cards/Card";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchData, setFetchData] = useState([]);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let { info, results } = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data);
    })();
  }, [api]);

  return (
    <>
      <h1 className="text-4xl text-center mb-3 font-bold">Characters </h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setGender={setGender}
            setSpecies={setSpecies}
          />

          <div className="col-8">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
        <Pagination
          info={info}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
        />
      </div>
    </>
  );
};

export default Home;
