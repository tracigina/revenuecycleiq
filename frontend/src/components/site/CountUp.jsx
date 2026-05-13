import { useEffect, useRef, useState } from "react";

export default function CountUp({ end = 24, suffix = "+", duration = 1800, className = "" }) {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !started.current) {
                        started.current = true;
                        const start = performance.now();
                        const tick = (now) => {
                            const elapsed = now - start;
                            const t = Math.min(1, elapsed / duration);
                            // easeOutCubic
                            const eased = 1 - Math.pow(1 - t, 3);
                            setValue(Math.round(eased * end));
                            if (t < 1) requestAnimationFrame(tick);
                        };
                        requestAnimationFrame(tick);
                    }
                });
            },
            { threshold: 0.3 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={ref} className={className} data-testid="count-up">
            {value}
            {suffix}
        </span>
    );
}
