/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Card from "../components/cards/Card";
import InputGroup from "../components/Filters/Category/InputGroup";

function Episode() {
  let [id, setID] = useState(1);
  let [info , setInfo] = useState([])
  let[results , setResults] = useState([])

  let {air_date , name} = info

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api)
      .then((res) => res.json());
      setInfo(data);

      let  a = await Promise.all(
        data.characters.map((links) =>{
            return fetch(links).then(res => res.json())
        })
      )
      setResults(a)
    })();
  }, [api]);

  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <h1 className="text-center text-3xl font-bold mb-1">
            Episode {id} :{" "}
            <span className="text-blue-500">
              {" "}
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h5 className="text-center text-gray-500 text-sm mt-2 ">
            Air Date: {air_date === "" ? "Unknown" : air_date}
          </h5>
        </div>

        <div className="row">
          <div className="col-3">
            <div className="text-center mb-4">
              <h4 className="text-2xl mb-2">Pick Episode</h4>
              <InputGroup name="pisode" total={51} setID={setID} />
            </div>
          </div>

          <div className="col-8">
            <div className="row">
              <Card page="/episodes/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Episode;
