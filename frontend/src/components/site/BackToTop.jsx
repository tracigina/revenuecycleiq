import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 600);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!show) return null;
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            data-testid="back-to-top"
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-slate-900 text-white shadow-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}
