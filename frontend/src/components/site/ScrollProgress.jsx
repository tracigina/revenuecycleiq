import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 60);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.div
            aria-hidden
            className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-teal-500 via-teal-400 to-sky-400"
            style={{ scaleX, opacity: show ? 1 : 0, transition: "opacity 0.3s ease" }}
            data-testid="scroll-progress"
        />
    );
}
