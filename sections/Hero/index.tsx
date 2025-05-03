import HeroClient from "./Client";
import HeroServer from "./Server";

export default function HeroWrapper() {
  return (
    <div className="relative bg-[#2b3530]">
      <HeroClient />
      <HeroServer />
    </div>
  );
}
