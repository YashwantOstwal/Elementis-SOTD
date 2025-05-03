import ElementisStoryClient from "./Client";
import ElementisStoryServer from "./Server";

export default function ElementisStory() {
  return (
    <div className="bg-[#2B3530] px-3-75 py-40 text-[#D1CCBF] md:grid md:grid-cols-11 md:grid-rows-[repeat(2,auto)] md:gap-x-5 md:gap-y-24 md:px-16 md:py-50">
      <ElementisStoryServer />
      <ElementisStoryClient />
    </div>
  );
}
