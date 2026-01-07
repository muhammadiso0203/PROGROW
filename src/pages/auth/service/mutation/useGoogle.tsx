import { useMutation } from "@tanstack/react-query";

export const useGoogle = () => {
    return useMutation({
        mutationFn: async () => {
            window.location.href = `${import.meta.env.VITE_API_URL || "https://streak.uz1"}/auth/google`;
        },
    });
};
