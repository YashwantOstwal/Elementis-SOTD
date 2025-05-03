import Image from "next/image";
import FormImage from "@/public/FormImage.png";
import ParallaxContainer from "@/components/Client/ParallaxContainer";
import Input from "@/components/Server/Input";
import Checkbox from "@/components/Client/Checkbox";
import Form from "next/form";
import Select from "@/components/Server/Select";
import Label from "@/components/Server/Label";
import Link from "next/link";
import * as motion from "motion/react-client";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";

export default function FormServer() {
  const categories = [
    "Resorts and Residences",
    "Retreats",
    "Wellness",
    "New Developments",
    "Building Innovation",
  ];

  return (
    <div className="flex flex-col bg-[#CED1BF] md:grid md:grid-cols-2">
      <ParallaxContainer parallaxAmount={25}>
        <Image src={FormImage} alt="form-image" className="h-auto w-full" />
      </ParallaxContainer>
      <div className="col-start-2 flex flex-col items-center justify-center">
        <Form action={""} className="w-full max-w-102 px-5 py-24 md:p-0">
          <div className="w-full text-xl font-light md:text-30">
            Take the First step
          </div>
          <div className="mt-8 mb-10 text-base md:text-lg">
            Become a member of ELEMENTIS Club and take the first step towards a
            life filled with purpose, Wellness, and connection
          </div>
          <div className="flex flex-col gap-4">
            <Label label="Full Name">
              <Input type="text" placeholder="Enter your name" />
            </Label>
            <Label label="Email Address">
              <Input type="email" placeholder="Enter your email address" />
            </Label>
            <Label label="Phone number">
              <div className="flex -space-x-4 md:-space-x-6">
                <Select options="dial code" />
                <Input type="tel" placeholder="Enter your phone number"></Input>
              </div>
            </Label>
            <Label label="Country">
              <Select options="countries" />
            </Label>
          </div>
          <div className="mt-10 space-y-5 text-sm text-[#2b3530] md:text-base">
            <p>I would like to receive information on ELEMENTIS.</p>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Checkbox key={category}>{category}</Checkbox>
              ))}
            </div>
          </div>
          <Checkbox className="mt-8-75" required={true}>
            I agree to the{" "}
            <Link href="" className="underline-[#2b3530] underline">
              Policies and Terms
            </Link>
          </Checkbox>
          <motion.button
            type="submit"
            className="mt-14 flex w-full cursor-pointer items-center justify-between px-6 py-5 text-base text-[#d1ccbf] md:text-lg"
            initial={{ backgroundColor: "#2b3530" }}
            whileHover={{ backgroundColor: "#304d3d" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span>Sign up</span>
            <NavigateSVG fill="#D1CCBF" />
          </motion.button>
        </Form>
      </div>
    </div>
  );
}
