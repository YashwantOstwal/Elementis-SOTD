import HeroFooter from "@/components/Server/HeroFooter";
import HeroClient from "@/components/Client/HeroClient";

export default function Hero() {
  return (
    <>
      <div className="relative bg-[#2b3530]">
        <HeroClient />
        <HeroFooter />
      </div>
    </>
  );
}
