import React from "react";
import { phim } from "../../data/data";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/StateContextProvider";
const CardFilm = ({ type }) => {
  const { handleInfoFilm } = useStateContext();
  return (
    <Card
      className="cursor-pointer"
      cover={
        <Link
          to={"/Info"}
          onClick={() => {
            handleInfoFilm(type);
          }}
        >
          <img
            alt="phim"
            className="w-[300px] h-[300px] object-cover"
            src={type.imagePhim}
          ></img>
        </Link>
      }
    >
      <h1>Đất rừng phương nam</h1>
    </Card>
  );
};
export default CardFilm;
