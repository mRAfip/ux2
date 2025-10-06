import About from "../components/About";
import Clients from "../components/Clients";
import Hero from "../components/Hero";
import Service from "../components/service";
import Highlight from "../components/Highlights";
import Services from "../components/Services";
import Tool from "../components/Tool";
import Testimonial from "../components/Testimonial";
import Workbook from "../components/Workbook";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      {/* <Highlight/> */}
      <About/>
      <Clients/>
      <Tool/>
      <Testimonial/>
      <Footer/>
      

    </main>
  );
}
