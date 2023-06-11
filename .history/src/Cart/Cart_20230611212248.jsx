import { useContext, useState } from "react";
import { CartContext } from "../../App";
import { products } from "../products";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { data } = useQuery('todos');
  const [ani, setAni] = useState(false);
  const handleDelete = (id) => {
    setCart(cart.filter((idpro) => idpro !== id));
    const carts = cart.filter((idpro) => idpro !== id);
    if (carts.length > 0) {
      localStorage.setItem("cart", JSON.stringify(carts));
    } else {
      localStorage.removeItem("cart");
    }
  };

  const handleDeleteAll = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  return (
    <>
      <div
        onClick={() => setAni(true)}

        className="cursor-pointer fixed  bottom-[20%] right-[3%] z-[99] flex "
      >
        <div className=" bg-[#003d79]  p-4 rounded-full relative">
          <i className="fa-solid fa-cart-shopping text-white text-4xl"></i>
          <p className="absolute text-white top-[-50%] bg-red-500 font-bold text-3xl p-3 rounded-full right-0">
            {cart.length}
          </p>
        </div>
      </div>

      <div
        className={`bg-white w-[400px] h-[500px] shadow-xl fixed bottom-0 right-0 z-[100]  transition-all ease-in-out duration-[2s] translate-y-[100%] ${
          ani && ` translate-y-[0%]`
        } `}
      >
        <div className="w-full h-full flex flex-col justify-between">
          <div
            onClick={() => setAni(false)}
            className="bg-[#003d79] text-white text-center relative py-3 cursor-pointer"
          >
            <div className="absolute  left-0 mx-4 ">
              <i className="fa-sharp fa-solid fa-chevron-down"></i>
            </div>
            <p>Inquiry Basket &#40;{cart.length}&#41;</p>
          </div>

          {cart.length > 0 ? (
            <div className="flex-grow flex gap-2 flex-col overflow-y-scroll my-2">
              {cart.map((id) => {
                const product = products.find((product) => product.id == id);
                return (
                  <div
                    key={id}
                    className="group h-[100px] border-b-2 w-full flex hover:bg-yellow-200/10  "
                  >
                    <Link to={`/products/${id}`} className="flex items-center ">
                      <img
                        className="h-full w-[100px]"
                        src={product.thumbnail}
                        alt=""
                      />
                      <p className="line-clamp-2 text-[#003d79]">
                        {" "}
                        {product.title}{" "}
                      </p>
                    </Link>
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => handleDelete(id)}
                        className=" mt-3 hidden group-hover:block hover:underline "
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center italic">No Items Added</p>
          )}
          <div className=" justify-end mt-2">
            <div className="flex justify-between px-3">
              <button
                onClick={handleDeleteAll}
                className="p-3 text-red-600 bg-gray-500/20"
              >
                Empty
              </button>
              <button className="p-3 text-white bg-red-500">Inquire</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
