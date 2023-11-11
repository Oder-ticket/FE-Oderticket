import { Card, Carousel } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
const phim = [
  {
    loaiPhim: "phimdangchieu",
    phim: [
      {
        imagePhim:
          "https://upload.wikimedia.org/wikipedia/vi/8/8c/%C4%90%E1%BA%A5t_r%E1%BB%ABng_ph%C6%B0%C6%A1ng_Nam_-_Official_poster.jpg",
        giaPhim: "1000",
      },
      {
        imagePhim:
          "https://simg.zalopay.com.vn/zlp-website/assets/phim_hollywood_Series_Biet_Doi_Sieu_Anh_Hung_The_Avengers_2012_2019_4f7c9a8135.jpg",
        giaPhim: "2000",
      },
      {
        imagePhim:
          "https://vuanem.com/blog/wp-content/uploads/2021/10/phim-godzilla-vs-kong.png",
        giaPhim: "3000",
      },
      {
        imagePhim:
          "https://s3.cloud.cmctelecom.vn/tinhte1/2017/07/4087212_C_top10-1.jpg",
        giaPhim: "4000",
      },
      {
        imagePhim:
          "https://upload.wikimedia.org/wikipedia/vi/8/8c/%C4%90%E1%BA%A5t_r%E1%BB%ABng_ph%C6%B0%C6%A1ng_Nam_-_Official_poster.jpg",
        giaPhim: "5000",
      },
    ],
  },
  {
    loaiPhim: "phimsapchieu",
    phim: [
      {
        imagePhim:
          "https://simg.zalopay.com.vn/zlp-website/assets/phim_hollywood_Series_Biet_Doi_Sieu_Anh_Hung_The_Avengers_2012_2019_4f7c9a8135.jpg",
        giaPhim: "2000",
      },
      {
        imagePhim:
          "https://vuanem.com/blog/wp-content/uploads/2021/10/phim-godzilla-vs-kong.png",
        giaPhim: "3000",
      },
      {
        imagePhim:
          "https://upload.wikimedia.org/wikipedia/vi/8/8c/%C4%90%E1%BA%A5t_r%E1%BB%ABng_ph%C6%B0%C6%A1ng_Nam_-_Official_poster.jpg",
        giaPhim: "1000",
      },
      {
        imagePhim:
          "https://s3.cloud.cmctelecom.vn/tinhte1/2017/07/4087212_C_top10-1.jpg",
        giaPhim: "4000",
      },
      {
        imagePhim:
          "https://upload.wikimedia.org/wikipedia/vi/8/8c/%C4%90%E1%BA%A5t_r%E1%BB%ABng_ph%C6%B0%C6%A1ng_Nam_-_Official_poster.jpg",
        giaPhim: "5000",
      },
    ],
  },
  {
    loaiPhim: "phimdacbiet",
    phim: [
      {
        imagePhim:
          "https://simg.zalopay.com.vn/zlp-website/assets/phim_hollywood_Series_Biet_Doi_Sieu_Anh_Hung_The_Avengers_2012_2019_4f7c9a8135.jpg",
        giaPhim: "2000",
      },
      {
        imagePhim:
          "https://upload.wikimedia.org/wikipedia/vi/8/8c/%C4%90%E1%BA%A5t_r%E1%BB%ABng_ph%C6%B0%C6%A1ng_Nam_-_Official_poster.jpg",
        giaPhim: "1000",
      },
      {
        imagePhim:
          "https://vuanem.com/blog/wp-content/uploads/2021/10/phim-godzilla-vs-kong.png",
        giaPhim: "3000",
      },
      {
        imagePhim:
          "https://s3.cloud.cmctelecom.vn/tinhte1/2017/07/4087212_C_top10-1.jpg",
        giaPhim: "4000",
      },
      {
        imagePhim:
          "https://upload.wikimedia.org/wikipedia/vi/8/8c/%C4%90%E1%BA%A5t_r%E1%BB%ABng_ph%C6%B0%C6%A1ng_Nam_-_Official_poster.jpg",
        giaPhim: "5000",
      },
    ],
  },
];
const VauleSegmented = ({ children, value }) => {
  return (
    <div className="mt-[80px]">
      {phim.map((items) => {
        if (items.loaiPhim === value)
          return (
            <Carousel slidesToShow={4} autoplay>
              {items.phim.map((item, index) => {
                return (
                  <div className=" bg-black" key={index}>
                    <Card
                      className="bg-[#434343]"
                      cover={
                        <img
                          className="rounded-none w-full h-[245px] object-cover"
                          src={item.imagePhim}
                        ></img>
                      }
                    >
                      <Meta
                        title={
                          <h1 className="font-bold text-white">
                            Đất rừng phương nam
                          </h1>
                        }
                        avatar={<CurrencyDollarIcon></CurrencyDollarIcon>}
                        description={
                          <p className="text-white">Xuất chiếu: 17/2/2023</p>
                        }
                      />
                    </Card>
                  </div>
                );
              })}
            </Carousel>
          );
      })}
    </div>
  );
};
export default VauleSegmented;
