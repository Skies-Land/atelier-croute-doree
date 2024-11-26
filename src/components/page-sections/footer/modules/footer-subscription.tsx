// DEPENDANCIES
import { useState } from "react";

// COMPONENT
import { ToastNotify } from "../../../elements/toast-notify/toast-notify";

export const FooterSubscription = () => {
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // Vérifie si l'email est valide
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError("Adresse incorrecte.");
            ToastNotify("error", "Veuillez entrer une adresse e-mail valide.");

            // Réinitialise l'erreur après 3s pour permet une nouvelle tentative de l'utilisateur
            setTimeout(() => {
                setEmail("");
                setError(null);
            }
            , 3000);
        } else {
            setError(null);
            setIsSubmitting(true);
            ToastNotify("success", "Email enregistré");

            // Simule une réinitialisation après 3s (par ex. : réponse d'un backend)
            setTimeout(() => {
                setEmail(""); // Réinitialise l'email
                setIsSubmitting(false);
            }, 3000);
        }
    };

    // Réinitialise l'erreur si l'email devient valide
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        // Supprime l'erreur si l'email devient valide
        if (/\S+@\S+\.\S+/.test(value)) {
            setError(null);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="footer__form">
            <label htmlFor="email" className="visually-hidden">Adresse e-mail</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Votre e-mail"
                required
                aria-required="true"
                aria-describedby="email-error"
                className="footer__input"
            />

            {error && <span id="email-error" className="footer__input-message">{error}</span>}

            <button 
                type="submit" 
                className={`footer__button button ${isSubmitting ? "footer__button--disabled" : ""}`}
                disabled={isSubmitting}
            >
                {isSubmitting ? "En cours..." : "S'abonner"}
            </button>
        </form>
    );
};