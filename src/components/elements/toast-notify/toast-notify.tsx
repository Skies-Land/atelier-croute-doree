// DEPENDENCIES
import { toast, Flip } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const ToastNotify = (type: "success" | "error", message: string) => {
    if (type === "success") {
        toast.success(message, { 
            position: "top-center", 
            autoClose: 8000, // Durée d'affichage de la notification (ms)
            transition: Flip // Animation de transition
        });
    } else if (type === "error") {
        toast.error(message, { 
            position: "top-center", 
            autoClose: 8000,
            transition: Flip
        });
    }
};