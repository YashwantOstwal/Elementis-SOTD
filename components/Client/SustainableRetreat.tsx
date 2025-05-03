import { Fragment } from "react";
import ResponsiveMaskTextVariant from "@/components/Client/ResponsiveMaskTextVariant";
import ResponsiveMarquee from "@/components/Client/ResponsiveMarquee";
import SustainableRetreatClient from "@/components/Client/SustainableRetreatClient";

export default function SustainableRetreat() {
  return (
    <div className="bg-[#30493D] py-36 text-[#D1CCBF] md:py-60">
      <ResponsiveMarquee
        animationConfig={{
          mobile: {
            max: "-887px",
            speed: 50,
          },
          desktop: {
            max: "-88.7%",
            speed: 5,
          },
        }}
      >
        {"Sustainable Retreat • Sustainable Retreat • Sustainable Retreat • "}
      </ResponsiveMarquee>

      <div className="mt-18 flex flex-col gap-y-14 px-8-25 md:mt-26 md:grid md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-y-24 md:px-16">
        <div className="flex flex-col gap-14 md:col-span-2 md:col-start-2 md:flex-row">
          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d-0">
                At our Resorts and Residences, we believe in
              </Fragment>,
              <Fragment key="d-1">
                fostering a sense of partnership, building a
              </Fragment>,
              <Fragment key="d-2">
                thriving ecosystem, nurturing a strong
              </Fragment>,
              <Fragment key="d-3">
                Community, and prioritizing the health of the
              </Fragment>,
              <Fragment key="d-4">
                planet. These values shape every aspect of
              </Fragment>,
              <Fragment key="d-5">
                your personalized Wellness experience.
              </Fragment>,
            ]}
            mobile={[
              <Fragment key="m-0">
                At our Resorts and Residences, we believe
              </Fragment>,
              <Fragment key="m-1">
                in fostering a sense of partnership,
              </Fragment>,
              <Fragment key="m-2">
                building a thriving ecosystem, nurturing a
              </Fragment>,
              <Fragment key="m-3">
                strong Community, and prioritizing the
              </Fragment>,
              <Fragment key="m-4">
                health of the planet. These values shape
              </Fragment>,
              <Fragment key="m-5">every aspect of your personalized</Fragment>,
              <Fragment key="m-6">Wellness experience.</Fragment>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />

          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d2-0">
                We envision a world where mind, body, and
              </Fragment>,
              <Fragment key="d2-1">
                spirit thrive in harmony, fostering
              </Fragment>,
              <Fragment key="d2-2">
                connections to each other and the natural
              </Fragment>,
              <Fragment key="d2-3">
                world, redefining the concept of fulfillment
              </Fragment>,
              <Fragment key="d2-4">beyond material success.</Fragment>,
            ]}
            mobile={[
              <Fragment key="m2-0">
                We envision a world where mind, body,
              </Fragment>,
              <Fragment key="m2-1">
                and spirit thrive in harmony, fostering
              </Fragment>,
              <Fragment key="m2-2">
                connections to each other and the natural
              </Fragment>,
              <Fragment key="m2-3">
                world, redefining the concept of fulfillment
              </Fragment>,
              <Fragment key="m2-4">beyond material success.</Fragment>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />
        </div>
        <SustainableRetreatClient />
      </div>
    </div>
  );
}
