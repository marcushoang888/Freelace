import { products } from "../../products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
export default function RandomProduct() {
  return (
    <div className="mt-5">
      <h3 className="text-3xl font-bold text-[#003d79]">Random Products</h3>
      <Swiper
        slidesPerView={5}
        spaceBetween={25}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.thumbnail}>
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt="" />
              <p className="line-clamp-2">{product.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
