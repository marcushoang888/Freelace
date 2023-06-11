import { useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../config/supabase";
import Skeleton from "react-loading-skeleton";
import { useLocation } from "react-router-dom";
export default function Product() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryObject = Object.fromEntries(searchParams.entries());
  const type = queryObject.type

  const [pagin, setPagin] = useState([0, 8]);
  const { isLoading, isError, data:products, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => 
      supabase.from("product").select(),
    
    select: (res) => {
      res.data.filter( (product) => product.categories.includes(type))
      if (Object.key())
    }
  });

  console.log(queryObject);
  // const [newProducts, setProducts] = useState(products);
  // console.log(newProducts);
  if (isLoading || isError)  {
    return  <Skeleton height={40} /> 
  }
 
  return (
    <div className="col-span-3 grid grid-cols-3 gap-7 ">
  
      {products.map((product, index) => {
        const { id, title, isNew, hot, like, preSale, thumbnail } = product;
        if (index >= pagin[0] && index <= pagin[1]) {
          return <Card key={id} product={product} />;
        }
      })}

      <Pagination newProducts={products} pagin={pagin} setPagin={setPagin} />
    </div>
  );
}