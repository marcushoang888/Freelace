import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { solutionCategory, solutionPost } from "./solution.js";
import SolutionCategory from "./SolutionCategory";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Container from "../../Util/Container.jsx";
import RandomProduct from "../../Components/RandomProduct.jsx";
export default function Solution() {
  const [typeId, setTypeId] = useState(1);
  const posts = solutionPost.filter((post) => post.type_id == typeId);
  const [widthScreen, setWidthScreen] = useState(window.innerWidth)
  const handleResize = () => setWidthScreen(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [widthScreen]);
  return (
    <Container>
      <div className="flex flex-col items-center justify-between gap-8 ">
        <h1 className="text-3xl font-bold text-[#003d79]">Solutions</h1>
        <p>
          For more information about Feed Additives, PCR test kit, Pig Vaccine,
          Poultry Medicine, Poultry Vaccine, welcome to our website now!
        </p>

        <div className="flex gap-5">
          {solutionCategory.map((solutionCategory) => (
            <SolutionCategory
              key={solutionCategory.id}
              id={solutionCategory.id}
              title={solutionCategory.title}
              setTypeId={setTypeId}
            />
          ))}
        </div>
            
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full  overflow-visible "
        >
          {posts.map((post) => (
            <SwiperSlide
              key={post.imgUrl}
              className=" overflow-visible p-5 "
            >
              <div className="group [&>div]:hover:transition-all [&>div]:hover:duration-[0.5s]  [&>div]:duration-[0.5s] [&>div]:transition-all cursor-pointer border-2 border-slate-200 h-[400px] relative rounded-lg overflow-hidden transition-all hover:transition-all  hover:shadow-xl hover:drop-shadow-xl hover:scale-105 hover:translate-y-[-10px]">
                <img
                  className=" w-full h-full object-cover rounded-lg   "
                  src={post.imgUrl}
                  alt=""
                />

                <div className="absolute w-full h-full bg-black/0 top-0 group-hover:bg-black/60 "></div>
                <div className="bg-[#003d79] absolute px-7 py-5 bottom-0 right-0   z-40 hidden group-hover:block text-white hover:bg-blue-600">
                  <i className="fa-solid fa-chevron-right text-2xl "></i>
                </div>
                <div className=" px-5 absolute bottom-[calc(-170px)] group-hover:bottom-[25%] text-white">
                  <p className="  text-[25px] font-bold">{post.title}</p>
                  <div className="w-1 h-[30px]"></div>
                  <p>{post.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
      <RandomProduct />
    </Container>
  );
}
