import React from "react";
import { news } from "../../news";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
export default function RelatedArticles() {
  return (
    <div className="overflow-hidden">
      <div className="font-bold text-3xl border-b-2 my-10 pb-4 ">
        <h3>Related Articles</h3>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[280px]"
      >
          {news.map((news) => (
            <SwiperSlide key={news.thumbnail} className="border-2 h-full">
              <Link to={`/newss/${news.id}`} className=" h-full" >
                  <img
                    className="w-full h-[200px] object-cover "
                    src={news.thumbnail}
                    alt=""
                  />
                  <p className=" line-clamp-2 p-3  ">
                    {news.title}
                    <br />
                  </p>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
