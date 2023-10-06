/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

function Card({ results , page }) {
  let display;
  if (results) {
    display = results.map((result) => {
      let { id, name, image, status, location } = result;
      return (
        <Link
          to={`${page}${id}`}
       
          key={id}
          className="col-lg-4 col-md-6 col-12 position-relative mb-4 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg "
        >
          <div className={styles.cards}>
            <img
              src={image}
              alt={name}
              className={`${styles.img}img-fluid p-1 rounded-lg `}
            />
            <div className="content p-[10px]">
              <div className="fs-4 font-bold mb-4">{name}</div>
              <div className="">
                <span className=" fs-6">Last Location: </span>
                <span className="font-medium text-blue-400">
                  {location.name}
                </span>
              </div>
            </div>
          </div>
          <div
            className={`${styles.badge} position-absolute badge ${
              status === "Dead"
                ? "bg-danger"
                : status === "Alive"
                ? "bg-success"
                : "bg-slate-600"
            }`}
          >
            {status}
          </div>
        </Link>
      );
    });
  } else {
    display = (
      <h1 className="text-4xl  text-blue-500">No Character Found 😿</h1>
    );
  }
  return <>{display}</>;
}
export default Card;
