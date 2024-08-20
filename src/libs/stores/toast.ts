import { create } from 'zustand'

type ToastState = {
    view: string,
    setView: (u: string) => void,
}


export const useToastStore = create<ToastState>((set) => ({
    view: "",
    setView: (u: string) => set(() => ({ view: u })),
}))
