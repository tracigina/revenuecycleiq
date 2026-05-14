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
    "https://customer-assets.emergentagent.com/job_revenue-insights-72/artifacts/t3lsnefp_8cb78bd4-031c-4fd3-ad7f-0aadd0613e88-1.png";
