import React from "react";
import Button from "./components/Button";
import { useForm } from "react-hook-form";
import { supabase } from "../config/supabase";
import Swal from "sweetalert2";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (data) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
    await supabase.from("inquire").insert(data);
    reset()
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" p-3 [&>.group]:border-blue-500 [&>.group]:border [&>.group]:my-3 [&>.group]:w-full  [&>.group]:h-10 focus:[&>.group]:outline-[#003d79] [&>.group]:pl-2  "
    >
      <h3 className="text-2xl font-bold py-2">Contact Us</h3>
      <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="w-full"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 font-medium absolute top-[100%] w-fit left-0">
                  This field is required
                </span>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="*E-mail"
                {...register("email", { required: true })}
                className="w-full"
              />
              {errors.email && (
                <span className="text-red-500 font-medium absolute top-[100%] w-fit left-0">
                  This field is required
                </span>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Company Name"
                {...register("company", { required: true })}
                className="w-full"
              />
              {errors.company && (
                <span className="text-red-500 font-medium absolute top-[100%] w-fit left-0">
                  This field is required
                </span>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Tel"
                {...register("tel", { required: true })}
                className="w-full"
              />
              {errors.tel && (
                <span className="text-red-500 font-medium absolute top-[100%] w-fit left-0">
                  This field is required
                </span>
              )}
            </div>
      <input
        className="group"
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
      />
      {errors.name && <span className="text-red-500 font-medium">This field is required</span>}
      <input
        className="group"
        type="text"
        placeholder="*Email"
        {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500 font-medium">This field is required</span>}

      <input
        className="group"
        type="text"
        placeholder="Tel"
        {...register("tel", { required: true })}
      />
      {errors.tel && <span className="text-red-500 font-medium">This field is required</span>}

      <textarea
        className="border-blue-500 border my-3 focus:outline-[#003d79] pl-2 w-full h-[200px]"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="*Message"
        {...register("message", { required: true })}
      ></textarea>
      {errors.message && <span className="text-red-500 font-medium">This field is required</span>}

      <div className="flex [&>button]:w-[80%] justify-center">
        <button
          type="submit"
          className="text-white bg-[#003d79] w-fit px-5 py-3 rounded-xl grow-0  transition hover:scale-110 hover:shadow-slate-400 hover:shadow-md active:scale-100"
        >
          <i className="fa-solid fa-pen-to-square"></i> Submit
        </button>
      </div>
    </form>
  );
}
