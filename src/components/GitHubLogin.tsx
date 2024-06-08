"use client";

import { useUser } from "@/libs/store";
import { API_HOST, GITHUB_CLIENT_ID, cn } from "@/libs/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GitHubLogin({
	size = "small",
}: {
	size?: "big" | "small";
}) {
	const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;
	const { setUser, user } = useUser(state => state);

	const router = useRouter();

	const handleLogin = async (code: string) => {
		try {
			const { data } = await axios.get(
				`${API_HOST}/auth/sign-in/?code=${code}`,
				{ withCredentials: true },
			);
			setUser({
				name: data.body.user.name,
				email: data.body.user.email,
				login: data.body.user.login,
				avatar_url: data.body.user.avatar_url,
			});
			router.push("/");
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const code = urlParams.get("code");

		if (code) {
			handleLogin(code);
		}
	}, []);

	if (user === null)
		return (
			<button
				onClick={() => window.location.assign(githubOAuthURL)}
				className={cn(
					size === "big" ? "text-6xl p-2 px-6" : "text-xl p-1 px-3 ",
					"border-2 rounded-lg bg-accent hover:bg-lpurple hover:text-accent text-lpurple",
				)}
			>
				Log In
			</button>
		);
}
