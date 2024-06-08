import { useTerminal } from "@/libs/store";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function useTerminalInteract() {
	const { setOn, setOff, clear, add } = useTerminal(state => state);
	const inpTag = useRef<HTMLInputElement>(null);
	const [terminalText, setTerminalText] = useState<string>("");

	const router = useRouter();

	useEffect(() => {
		const controller = new AbortController();

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === "KeyT" && e.getModifierState("Alt")) {
				setOn();
				if (inpTag.current) inpTag.current.focus();
			}
			if (e.code === "Escape") setOff();

			if (e.code === "Enter") {
				setTerminalText("");
				if (inpTag.current) inpTag.current.value = "";

				let arg = terminalText.split(" ");

				switch (arg[0].toLowerCase()) {
					case "":
						break;
					case "clear":
						if (arg.length === 1) clear();
						else
							add({
								command: terminalText,
								message: "Args Command Does Not Exist",
								status: "Fail",
							});
						break;

					case "ls":
						if (arg.length === 1)
							add({
								command: "ls",
								message: "AboutUs\n Our Products\n",
								status: "Sucess",
							});
						else
							add({
								command: terminalText,
								message: "Args Command Does Not Exist",
								status: "Fail",
							});
						break;

					case "cd":
						if (arg.length === 1)
							add({
								command: "cd",
								message: "need an argument",
								status: "Fail",
							});
						else if (arg.length === 2) {
							add({
								command: terminalText,
								message: "changing link",
								status: "Sucess",
							});
							router.push(arg[1]);
						} else {
							add({
								command: terminalText,
								message: `Expected one route but received ${arg.length}`,
								status: "Fail",
							});
						}
						break;

					case "exit":
						if (arg.length === 1) setOff();
						break;

					default:
						add({
							command: terminalText,
							message: "command not found",
							status: "Fail",
						});
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown, {
			signal: controller.signal,
		});

		return () => {
			controller.abort();
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [terminalText]);

	return { terminalText, setTerminalText, inpTag };
}
