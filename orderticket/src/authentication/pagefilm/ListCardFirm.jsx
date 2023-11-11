import React from "react";
import CardFilm from "./CardFilm";
import { Col, Row } from "antd";
import { useStateContext } from "../../context/StateContextProvider";
import { phim } from "../../data/data";

const ListCardFirm = ({ value, listfilm, children }) => {
  return (
    <div>
      {listfilm.map((items, index) => {
        if (items.loaiPhim === value) {
          return (
            <div
              key={index}
              className="w-full h-full first-letter flex justify-center"
            >
              <Row gutter={[16, 24]}>
                {items.phim.map((item) => {
                  return (
                    <Col key={index} span={6}>
                      <CardFilm type={item}></CardFilm>
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ListCardFirm;
