import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CommandTerminalDisplay {
	command: String;
	status: "Sucess" | "Fail";
	message: String;
	html_element?: HTMLElement;
}

interface TerminalStoreState {
	terminal_command: CommandTerminalDisplay[];
	isOn: boolean;
	setOn: () => void;
	setOff: () => void;
	add: (cmd: CommandTerminalDisplay) => void;
	clear: () => void;
}

export const useTerminal = create<TerminalStoreState>()(
	persist(
		set => ({
			terminal_command: [],
			isOn: false,
			setOn() {
				set(state => ({ ...state, isOn: true }));
			},
			setOff() {
				set(state => ({ ...state, isOn: false }));
			},
			add: cmd => {
				set(state => ({
					...state,
					terminal_command: [...state.terminal_command, cmd],
				}));
			},
			clear: () => {
				set(state => ({ ...state, terminal_command: [] }));
			},
		}),
		{ name: "terminal", storage: createJSONStorage(() => sessionStorage) },
	),
);

export interface User {
	name: string,
	email: string,
	login: string;
	avatar_url: string;
}

interface UserStoreState {
	user: User | null;
	setUser: (user: User) => void;
	removeUser: () => void;
}

export const useUser = create<UserStoreState>()(
	persist(
		set => ({
			user: null,
			setUser(user) {
				set(state => ({ ...state, user }));
			},
			removeUser() {
				set(state => ({ ...state, user: null }));
			},
		}),
		{ name: "user", storage: createJSONStorage(() => localStorage) },
	),
);
