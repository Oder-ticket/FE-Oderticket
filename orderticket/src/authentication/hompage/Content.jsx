import React, { useEffect, useState } from "react";
import VauleSegmented from "./VauleSegmented";
import ListFilm from "./ListFilm";
const images = [
  "https://i.ytimg.com/vi/4fC4qS7D178/maxresdefault.jpg",
  "https://i.ytimg.com/vi/Wkrv0qCqrVw/maxresdefault.jpg",
  "https://cdn.tgdd.vn/Files/2021/12/14/1404441/tong-hop-cac-tvc-quang-cao-vinamilk-vui-nhon-sang-tao-202112142208114986.jpg",
  "https://cdn.tgdd.vn/Files/2021/12/14/1404441/tong-hop-cac-tvc-quang-cao-vinamilk-vui-nhon-sang-tao-202112142208114986.jpg",
  "https://cdn.tgdd.vn/Files/2021/12/14/1404441/tong-hop-cac-tvc-quang-cao-vinamilk-vui-nhon-sang-tao-202112142208114986.jpg",
  "https://cdn.tgdd.vn/Files/2021/12/14/1404441/tong-hop-cac-tvc-quang-cao-vinamilk-vui-nhon-sang-tao-202112142208114986.jpg",
  "https://cdn.tgdd.vn/Files/2021/12/14/1404441/tong-hop-cac-tvc-quang-cao-vinamilk-vui-nhon-sang-tao-202112142208114986.jpg",
  "https://cdn.tgdd.vn/Files/2021/12/14/1404441/tong-hop-cac-tvc-quang-cao-vinamilk-vui-nhon-sang-tao-202112142208114986.jpg",
  "https://cdn.tgdd.vn/Files/2021/12/14/1404441/tong-hop-cac-tvc-quang-cao-vinamilk-vui-nhon-sang-tao-202112142208114986.jpg",
];
const Content = () => {
  const [firlm, setFilm] = useState("phimdangchieu");
  const onHandleChange = (value) => {
    setFilm(value);
  };
  useEffect(() => {});
  return (
    <div className="h-full w-full ">
      <div className="border-solid rotate-[125deg] relative border-[1px] border-[black]"></div>
      <h1 className="font-serif font-bold text-[68px] text-[#000000E0]">
        Ciner Star
      </h1>
      <p className="font-sans text-[24px] text-[#000000E0] font-medium text-center">
        Hãy đồng hành cùng chungs tôi, bạn sẽ được trải nghiệm dịch vụ một cách
        tuyệt vời nhất.
      </p>
      <div className="border-solid border-[1px] border-[black]"></div>
      <div className="mt-[80px] w-full flex justify-center">
        <ListFilm onHandleChange={onHandleChange}></ListFilm>
      </div>
      <VauleSegmented value={firlm}></VauleSegmented>
      <h1 className="text-center pt-[48px]">Event</h1>
    </div>
  );
};
export default Content;
