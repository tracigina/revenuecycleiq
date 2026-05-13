// Submit a form to Netlify Forms (works on Netlify-hosted deploys).
// In a non-Netlify preview environment the POST to "/" will 404 or be ignored,
// so we also POST to the FastAPI backend so the prototype always works.
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const encode = (data) =>
    Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key] ?? ""))
        .join("&");

export async function submitForm({ formName, data, backendPath }) {
    const netlifyPayload = encode({ "form-name": formName, ...data });

    const netlifyPromise = fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyPayload,
    })
        .then((res) => ({ ok: res.ok, status: res.status, source: "netlify" }))
        .catch(() => ({ ok: false, status: 0, source: "netlify" }));

    const backendPromise = backendPath
        ? axios
              .post(`${API}${backendPath}`, data)
              .then(() => ({ ok: true, source: "backend" }))
              .catch(() => ({ ok: false, source: "backend" }))
        : Promise.resolve({ ok: false, source: "backend-skipped" });

    const results = await Promise.allSettled([netlifyPromise, backendPromise]);
    const succeeded = results.some(
        (r) => r.status === "fulfilled" && r.value.ok
    );
    if (!succeeded) {
        throw new Error("Form submission failed");
    }
    return { ok: true };
}
