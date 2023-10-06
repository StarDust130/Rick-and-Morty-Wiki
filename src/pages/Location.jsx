/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import Card from "../components/Cards/Card";
import InputGroup from "../components/Filters/Category/InputGroup";

function Location() {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);

  let { type , name , dimension } = info;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((links) => {
          return fetch(links).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <h1 className="text-center text-3xl font-bold mb-2">
            Location :{" "}
            <span className="text-blue-500">
              {" "}
              {name === "" ? "Unknown" : name}
            </span>
          </h1>

          <p className="text-center text-l font-bold mb2 text-gray-700">
            Type : {type}
          </p>
          <h5 className="text-center text-gray-500 text-sm mt-2 ">
            Dimension : {dimension === "" ? "Unknown" : dimension}
          </h5>
        </div>

        <div className="row">
          <div className="col-3">
            <div className="text-center mb-4">
              <h4 className="text-2xl mb-2">Pick Location</h4>
              <InputGroup name="Location" total={126} setID={setID} />
            </div>
          </div>

          <div className="col-8">
            <div className="row">
              <Card page="/location/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Location;
