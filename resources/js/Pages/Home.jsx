import Hero from "@/Components/Hero";
import WhyOrka from "@/Components/WhyOrka";
import Partners from "@/Components/Partners";
import Legacy from "@/Components/Legacy";
import Services from "@/Components/Services";
import Testimonials from "@/Components/Blogs";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import ScrollToTop from "@/Components/ScrollToTop";
import ScrollUpButton from "@/Components/ScrollUpButton";

export default function Home() {
    return (
        <div className="font-sans">
            <Navbar />
            <ScrollToTop />
            <main>
                <Hero />
                <WhyOrka />
                {/* <Partners /> */}
                <Legacy />
                <Services />
                <Blogs />
                <Footer />
            </main>
            <ScrollUpButton />
        </div>
    );
}
