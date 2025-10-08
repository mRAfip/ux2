import About from "../components/About";
import Clients from "../components/Clients";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Service from "../components/service";
import WebDesignService from "../components/WebDesignService";
import Highlight from "../components/Highlights";
import Services from "../components/Services";
import Tool from "../components/Tool";
import Testimonial from "../components/Testimonial";
import Workbook from "../components/Workbook";
import Footer from "../components/Footer";
import SimpleTestimonial from "@/components/SimpleTestimonial";


export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <SimpleTestimonial/>
      <Service />
      {/* <WebDesignService /> */}
      
      
      <Highlight/>
      {/* <About/> */}
      <Clients/>
      <Tool/>
      <Testimonial/>
      <Footer/>
      

    </main>
  );
}
