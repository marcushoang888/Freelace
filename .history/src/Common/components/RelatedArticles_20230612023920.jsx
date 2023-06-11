import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { supabase } from "../../config/supabase";
import { useQuery } from "@tanstack/react-query";
export default function RelatedArticles() {
  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => supabase.from("posts").select(),

    select: (res) => res.data
  });
  return (
    <div className="">
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
          {posts.map((posts) => (
            <SwiperSlide key={posts.thumbnail} className="border-2 h-full">
              <Link to={`/postss/${posts.id}`} className=" h-full " >
                  <img
                    className="w-full h-[200px] object-cover "
                    src={posts.thumbnail}
                    alt=""
                  />
                  <p className=" line-clamp-2 m-3 ">
                    {posts.title}
                    <br />
                  </p>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
