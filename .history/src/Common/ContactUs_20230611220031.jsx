import React from "react";
import Button from "./components/Button";
import { useForm } from "react-hook-form";

export default function ContactUs() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await supabase.from("inquire").insert(data);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" p-3 [&>.group]:border-blue-500 [&>.group]:border [&>.group]:my-3 [&>.group]:w-full  [&>.group]:h-10 focus:[&>.group]:outline-[#003d79] [&>.group]:pl-2  ">
      <h3 className="text-2xl font-bold py-2">Contact Us</h3>
      <input className="group" type="text" placeholder="Name" />
      <input className="group" type="text" placeholder="*Email" />
      <input className="group" type="text" placeholder="Tel" />
      <textarea
        className="border-blue-500 border my-3 focus:outline-[#003d79] pl-2 w-full h-[200px]"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="*Message"
      ></textarea>
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