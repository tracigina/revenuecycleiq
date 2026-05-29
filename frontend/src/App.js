import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import WhyRCIQ from "@/pages/WhyRCIQ";
import BookCall from "@/pages/BookCall";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import Disclaimer from "@/pages/Disclaimer";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/why-revenue-cycle-iq" element={<WhyRCIQ />} />
                    <Route path="/book-a-call" element={<BookCall />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
