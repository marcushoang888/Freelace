import { useContext } from "react";
import { CartContext } from "../../App";
import { products } from "../products";
import ContactDetail from "../Product/components/ContactDetail";
import Container from "../Common/components/Container";
import { supabase } from "../config/supabase";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function Inquiry() {
  const { cart, setCart } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await supabase
      .from("inquire")
      .insert({ ...data, products: JSON.parse(localStorage.getItem("cart")) });
  };

  const handleDelete = (id) => {
    console.log(id);

    setCart(cart.filter((idpro) => idpro != id));
    const carts = cart.filter((idpro) => idpro != id);
    if (carts.length > 0) {
      localStorage.setItem("cart", JSON.stringify(carts));
    } else {
      localStorage.removeItem("cart");
    }
  };
  return (
    <Container>
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold text-[#003d79]">Solutions</h1>
      </div>

      <table className="w-full mx-auto mt-10  border-[1px] border-black border-collapse [&_th]:border-[1px]  [&_th]:border-black [&_th]:border-collapse [&_td]:border-[1px]  [&_td]:border-black [&_td]:border-collapse [&_th]:p-3 [&_td]:p-3 ">
        <thead>
          <tr>
            <th className="w-1/5 text-left">Product Picture</th>
            <th className="w-3/5 text-left">Product Name</th>
            <th className="w-1/5 text-left">Options</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((id) => {
            let product = products.filter((product) => product.id == id);
            product = product[0];
            return (
              <tr key={id}>
                <td className=" flex justify-center">
                  <img
                    className="h-[150px] "
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </td>
                <td>{product.title}</td>
                <td>
                  <button
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleDelete(product.id);
                          Swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                          );
                        }
                      });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="px-4 ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 [&>input]:bg-transparent  [&>input]:border-[2px] [&>input]:border-black/20 [&>input]:h-10 [&>input]:pl-2 mt-6">
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="absolute text-red-500 font-medium">
                This field is required
              </span>
            )}
            <input
              type="email"
              placeholder="*E-mail"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="absolute text-red-500 font-medium">
                This field is required
              </span>
            )}
            <input
              type="text"
              placeholder="Company Name"
              {...register("company", { required: true })}
            />
            {errors.company && (
              <span className="absolute text-red-500 font-medium">
                This field is required
              </span>
            )}
            <input
              type="text"
              placeholder="Tel"
              {...register("tel", { required: true })}
            />
            {errors.tel && (
              <span className="absolute text-red-500 font-medium">
                This field is required
              </span>
            )}
          </div>

          <textarea
            className="bg-transparent border-[2px] pl-2 border-black/20 h-[200px]"
            placeholder="*Message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="absolute text-red-500 font-medium">
              This field is required
            </span>
          )}
          <button className="bg-[#003d79] text-white p-3">Submit</button>
        </form>
      </div>
    </Container>
  );
}
