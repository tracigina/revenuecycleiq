import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
            <BackToTop />
        </div>
    );
}
