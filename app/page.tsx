import NavBar from "@/components/Client/NavBar";
import SustainableRetreat from "@/components/Client/SustainableRetreat";

import ElementisStory from "@/sections/ElementisStory";
import WellnessSanctuary from "@/sections/WellnessSanctuary";
import Footer from "@/components/Server/Footer";

import Form from "@/sections/Form";
import Learn from "@/components/Client/Learn";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
export default function Home() {
  return (
    <div className="overflow-clip">
      <Hero />
      <Introduction />
      <WellnessSanctuary />
      <Learn />
      <ElementisStory />
      <SustainableRetreat />
      <Form />
      <Footer />
      <NavBar />
    </div>
  );
}
