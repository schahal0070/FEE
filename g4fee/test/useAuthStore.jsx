import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
    persist((set, get) => ({
        isLoggedIn: false,
        userName: "",
        login: (user) => set({ isLoggedIn: true, userName: user}),
        logout: () => set ({ isLoggedIn: false, userName: "" }),
    })),
);