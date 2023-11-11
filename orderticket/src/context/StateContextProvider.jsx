import React, { createContext, useContext, useState } from "react";
const StateConext = createContext();
export const StateContextProvider = ({ children }) => {
  const handleChangeFirlm = (value) => {
    setTypeFilm(value);
  };
  const [typeFilm, setTypeFilm] = useState("phimdangchieu");
  const [idFilm, setIdfilm] = useState();
  const handleInfoFilm = (type) => setIdfilm(type);
  return (
    <StateConext.Provider
      value={{
        typeFilm,
        setTypeFilm,
        handleChangeFirlm,
        idFilm,
        setIdfilm,
        handleInfoFilm,
      }}
    >
      {children}
    </StateConext.Provider>
  );
};
export const useStateContext = () => useContext(StateConext);
