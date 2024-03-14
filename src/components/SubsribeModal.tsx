"use client";
import { API_HOST } from "@/libs/utils";
import { waitListUserType, waitlistUserSchema } from "@/libs/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconX } from "@tabler/icons-react";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

interface prop {
  setModelOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SubscribeModal({ setModelOpen }: prop) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<waitListUserType>({
    resolver: zodResolver(waitlistUserSchema),
  });

  const onSubmit = async ({ name, email }: waitListUserType) => {
    try {
      console.log(API_HOST);
      await axios.post(`${API_HOST}/waitlist`, { name, email });
      console.log("Sucesful");
      reset();
    } catch (err) {
      console.log("Error");
    }
  };

  return (
    <section className="absolute flex items-center bg-black bg-opacity-20 justify-center top-0 right-0 h-screen w-full backdrop-blur  z-[999]">
      <section className="relative w-full max-w-xs bg-black rounded-md p-5 h-fit">
        <section
          onClick={() => setModelOpen(false)}
          className="absolute -top-8 right-2 cursor-pointer hover:text-[#EE4B2B]"
        >
          <IconX />
        </section>
        <h1 className="text-4xl text-center pb-4 text-white">Get remainder</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-y-2"
        >
          <input
            className={`rounded py-1 p-3 w-full  ${errors.name && "border-4 border-red"}`}
            placeholder="Name"
            {...register("name")}
          />
          <input
            className={`rounded py-1 p-3 w-full  ${errors.email && "border-4 border-red"}`}
            placeholder="Email"
            {...register("email")}
          />

          <button
            disabled={isSubmitting}
            className="bg-white px-5 py-1 mt-3 rounded-md "
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </section>
  );
}
