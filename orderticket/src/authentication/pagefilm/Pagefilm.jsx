import React from "react";
import { useStateContext } from "../../context/StateContextProvider";
import { phim } from "../../data/data";
import ListFilm from "../hompage/ListFilm";
import ListCardFirm from "./ListCardFirm";
const Pagefilm = () => {
  const { typeFilm, handleChangeFirlm } = useStateContext();
  return (
    <div className="w-full h-full">
      <div className="flex justify-center">
        <ListFilm onHandleChange={handleChangeFirlm}></ListFilm>
      </div>
      <ListCardFirm value={typeFilm} listfilm={phim}></ListCardFirm>
    </div>
  );
};
export default Pagefilm;
