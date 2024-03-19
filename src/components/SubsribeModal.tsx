import { API_HOST } from "@/libs/utils";
import { waitListUserType, waitlistUserSchema } from "@/libs/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconX } from "@tabler/icons-react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface prop {
	closeModel: () => void;
}

export default function SubscribeModal({ closeModel }: prop) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<waitListUserType>({
		resolver: zodResolver(waitlistUserSchema),
	});
	const [message, setMessage] = useState<string | undefined>(undefined);

	const onSubmit = async ({ name, email }: waitListUserType) => {
		try {
			await axios.post(`${API_HOST}/waitlist`, { name, email });
			setMessage("Sucessfull 🎉");
			setTimeout(() => {
				closeModel();
			}, 2000);
			reset();
		} catch (err) {
			setMessage("Something Wrong 😵");
		}
	};

	useEffect(() => {
		if (errors.name) setMessage(errors.name.message);
		else if (errors.email) setMessage(errors.email.message);

		return () => {};
	}, [errors]);

	return (
		<section className="absolute font-mono flex items-center bg-black bg-opacity-70 justify-center top-0 right-0 h-screen w-full backdrop-blur z-[999]">
			<motion.section
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", ease: [0, 0.05, 0.44, 0.99] }}
				className="flex flex-col items-center justify-center relative w-full max-w-sm bg-[#222] border-2 border-[#f0f0f0]"
			>
				<section className="flex items-center justify-between px-3 py-6 top-0 h-10 w-full border-white border-b-2">
					<h2 className=" text-2xl text-[#f0f0f0]">Get Remainder</h2>
					<section
						className="text-[#f0f0f0] hover:text-[#EE4B2B] cursor-pointer"
						onClick={() => closeModel()}
					>
						<IconX />
					</section>
				</section>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="py-5 w-full px-8 flex flex-col items-end gap-y-2 "
				>
					<input
						className={` py-1.5 p-3 w-full outline-none bg-[#222] border-2 text-sm text-[#f0f0f0] ${errors.name ? " border-red" : "border-white"}`}
						placeholder="Name"
						{...register("name")}
					/>
					<input
						className={` py-1.5 p-3 w-full outline-none bg-[#222] border-2 text-sm text-[#f0f0f0] ${errors.email ? " border-red" : "border-white"}`}
						placeholder="Email"
						{...register("email")}
					/>

					<button
						disabled={isSubmitting}
						className="bg-[#f0f0f0] text-[#000]  px-5 py-1 mt-3  hover:bg-[#222] border-2 border-[#f0f0f0] hover:text-[#f0f0f0]"
						type="submit"
					>
						Submit
					</button>
				</form>
			</motion.section>

			{/* Messages */}
			{message && (
				<section className=" absolute bottom-24 bg-[#222]  ">
					<h1 className="text-xl text-center border border-white text-white px-5 py-2">
						{message}
					</h1>
				</section>
			)}
		</section>
	);
}
