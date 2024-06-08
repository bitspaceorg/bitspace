"use client";

import { useUser } from "@/libs/store";
import { IconTriangleFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProfileIcon() {
	const { user, removeUser } = useUser(state => state);
	const [isOpen, setOpen] = useState<boolean>(false);

	if (user != null)
		return (
			<section className="relative">
				<Image
					alt="github-image"
					width={45}
					height={45}
					src={user.avatar_url}
					onClick={() => setOpen(prev => !prev)}
					className="rounded-full drop-shadow-xl cursor-pointer"
				/>

				{isOpen && (
					<>
						<IconTriangleFilled className="absolute text-accent right-3" />
						<section className="absolute right-0 p-5 text-lg rounded-xl mt-3 text-center bg-white border border-accent text-accent font-glb">
							<h1 className="text-xl min-w-48">{user.name}</h1>
							<h1 className="text-sm">
								{user.email ? user.email : user.login}
							</h1>
							<hr className="pb-2" />
							<Link href="/profile/u">Profile</Link>
							<button
								onClick={() => removeUser()}
								className="bg-accent text-lpurple w-full"
							>
								Log Out
							</button>
						</section>
					</>
				)}
			</section>
		);
}
