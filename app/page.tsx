import About from "./component/About";
import Clients from "./component/Clients";
import Hero from "./component/Hero";
import Highlight from "./component/Highlights";
import Services from "./component/Services";
import Tool from "./component/Tool";
import Testimonial from "./component/Testimonial";
import Workbook from "./component/Workbook";
import Cta from "./component/Footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Highlight/>
      <Clients/>
      <Tool/>
      <Services/>
      <Testimonial/>
      <Workbook/>
      <Cta/>
      

    </main>
  );
}
