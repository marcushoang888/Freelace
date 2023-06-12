import { useContext } from "react";
import { supabase } from "../../config/supabase";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Container from "../../Util/Container";
import { useQuery } from "@tanstack/react-query";
import { Cart } from "../../config/CartContext";
import { ClipLoader } from "react-spinners";
import ContactLg from "../../Components/Contact/ContactLg";

export default function Inquiry() {
  const { cart, setCart } = useContext(Cart);
  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => supabase.from("product").select(),

    select: (res) => res.data,
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
    await supabase
      .from("inquire")
      .insert({ ...data, products: JSON.parse(localStorage.getItem("cart")) });
    reset();
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

  if (isLoading || isError) {
    return (
      <ClipLoader
        loading={isLoading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="lg:col-span-4 mx-auto"
      />
    );
  }
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


      <ContactLg products={JSON.parse(localStorage.getItem("cart")) } />
    </Container>
  );
}
