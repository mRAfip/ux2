import About from "./component/About";
import Clients from "./component/Clients";
import Hero from "./component/Hero";
import Highlight from "./component/Highlights";
import Service from "./component/Services";
import Tool from "./component/Tool";
import Testimonial from "./component/Testimonial";
import Workbook from "./component/Workbook";
import Footer from "./component/Footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <Highlight/>
      <About/>
      <Clients/>
      <Tool/>
      <Service/>
      <Testimonial/>
      <Footer/>
      

    </main>
  );
}
