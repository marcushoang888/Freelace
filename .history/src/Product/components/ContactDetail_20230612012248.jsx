import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { supabase } from "../../config/supabase";
export default function ContactDetail() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log({ ...data, products: [id] });
    await supabase.from("inquire").insert({ ...data, products: [id] });
  };
  return (
    <div className="mt-10 bg-[#f0f0f0]">
      <div className="px-4 pt-6">
        <h3 className="font-bold text-3xl text-center">Product Inquiry</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 [&>input]:bg-transparent  [&>input]:border-[2px] [&>input]:border-black/20 [&>input]:h-10 [&>input]:pl-2 mt-6">
            <input type="text" placeholder="Name" {...register("name",{ required: true })} />
            <input type="email" placeholder="*E-mail" {...register("email",{ required: true })} />
            <input
              type="text"
              placeholder="Company Name"
              {...register("company",{ required: true })}
            />
            <input type="text" placeholder="Tel" {...register("tel",{ required: true })} />
          </div>

          <textarea
            className="bg-transparent border-[2px] pl-2 border-black/20 h-[200px]"
            placeholder="*Message"
            {...register("message",{ required: true })}
          ></textarea>

          <button className="bg-[#003d79] text-white p-3">Submit</button>
        </form>
      </div>
    </div>
  );
}
