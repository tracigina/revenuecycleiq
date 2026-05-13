import { useEffect } from "react";

export function useSEO({ title, description, canonical }) {
    useEffect(() => {
        if (title) document.title = title;
        if (description) {
            let tag = document.querySelector('meta[name="description"]');
            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute("name", "description");
                document.head.appendChild(tag);
            }
            tag.setAttribute("content", description);
        }
        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement("link");
                link.setAttribute("rel", "canonical");
                document.head.appendChild(link);
            }
            link.setAttribute("href", canonical);
        }
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [title, description, canonical]);
}

export const LOGO_URL =
    "https://customer-assets.emergentagent.com/job_58ef0580-04f6-46a7-9c66-26e38b2ee4ea/artifacts/kyjixs4r_97e2c4e1-7534-4853-9678-217fc1985d65.png";
