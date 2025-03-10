import React from "react";
import { Metadata } from "next";
import { H, P, ColumnContainer } from "../../components/structure";

export const metadata: Metadata = {
  title: "About Us - Sugar Peeps",
}

export default function Page() {
  return (
    <ColumnContainer>
      <div className="flex-none">
        <img src="/images/mspeeps.jpg" alt="Ms. Peeps" width={400} height={400} className="mx-auto"/>
      </div>
      <div>
        <H>Who is this Ms. Peeps anyway?</H>
        <P>Sugar Peeps was born in October of 2017 and is the sugary baby of Genevieve DuPuy - lifelong esthetician and
          lover of all things sparkly and sweet. When she learned she could remove hair with sugar (SUGAR, you guys!!)
          it was literally love at that first sugary dip.</P>
        <P>Sugar Peeps is a space that welcomes and celebrates <strong>EVERY BODY</strong>. Genevieve believes strongly
          that sugaring and all personal services should be affirming and positive experiences. She strives to be a
          master of her chosen esthetic specialties, and offers a wealth of information regarding her thoughtfully
          curated offerings. From the beginning it has been Sugar Peeps mission to provide ethical, quality, caring
          services with a focus on natural, eco-friendly products. When you become a Sugar Peeps&apos; Peep rest assured
          you will be in skilled, caring, attentive hands.</P>
        <P>Scheduling is easy! Simply click the Book Now button above and select your desired sugar services.
          You&apos;ll be supporting a small woman owned business, our local economy, AND choosing a natural hair removal
          method that is sweet to the environment and your skin. Bonus: Dottie Grace, Genevieve&apos;s gorgeous little
          shop pup familiar happily comes to work every day as well and is always available for emotional puppy
          support. <em>Welcome to the sweet side of self care!</em></P>
      </div>
    </ColumnContainer>
  )
}
