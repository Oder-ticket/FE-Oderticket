import React from "react";
import { useStateContext } from "../../context/StateContextProvider";
import { Card } from "antd";
const InforFilm = () => {
  const { idFilm } = useStateContext();
  return (
    <div>
      <Card
        className="cursor-pointer"
        cover={
          <img
            alt="phim"
            src={idFilm.imagePhim}
            className="w-[300px] h-[300px] object-cover"
          ></img>
        }
      >
        <h1>Đất rừng phương nam</h1>
      </Card>
    </div>
  );
};
export default InforFilm;
