import { Link, useLocation } from "react-router-dom";
import RelatedProducts from "../../Product/components/RelatedProducts";
import ContactUs from "../ContactUs";
import { supabase } from "../../config/supabase";
import { useQueries } from "@tanstack/react-query";

export default function SideBar() {
  const { pathname } = useLocation();
  const [categoryTypeQuery, categoryQuery] = useQueries({
    queries: [
      {
        queryKey: ["category_type"],
        queryFn: () => supabase.from("category_type").select(),
        select: (res) => res.data,
      },
      {
        queryKey: ["categories"],
        queryFn: () => supabase.from("category").select(),
        select: (res) => res.data,
      },
    ],
  });
  const words = pathname.split("/");
  if (categoryTypeQuery.isLoading || categoryQuery.isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <div className="hidden lg:block  h-fit border  border-base-300 ">
      {categoryTypeQuery.data.map((type) => {
        return (
          <div className="collapse rounded-[0]  collapse-plus border-b-2 border-black/30  relative">

            <input type="checkbox" defaultChecked  className="absolute right-0 w-10 h-5"/>
            <Link to={`/products/search?type=${type.category_type}`}
              onClick={() => {}}
              className="30 collapse-title text-xl font-medium text-[white] bg-[#003d79]"
            >
              {type.category_type}
            </Link>

            <ul className="collapse-content  p-0 [&>a]:block  [&>a]:border-b-2 [&>a]:rounded-[0] [&>a]:py-3 [&>a]:pl-9  list-disc hover:[&>a]:bg-slate-400/10 [&>a]:transition [&>a]:w-full ">
              {categoryQuery.data.map((category) => {
                if (category.category_type === type.id) {
                  return (
                    <Link to={`/products/search?type=${category.name}`}>
                      <li>{category.name}</li>
                    </Link>
                  );
                }
              })}
            </ul>


          </div>
        );
      })}

      {words[2] ? <RelatedProducts /> : <ContactUs />}
    </div>
  );
}
