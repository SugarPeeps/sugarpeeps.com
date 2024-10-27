import React from "react";
import { Metadata } from "next";
import { SocialFeed} from "../social/social-feed";
import InstagramApi from "../social/instagram/api-action";
import { Slide, Carousel } from "./carousel";
import { Container, P, H } from "../components/structure";

export const metadata: Metadata = {
    title: "Sugar Peeps – Be sweet to your skin!",
}

const slides: Slide[] = [
    { src: "/images/carousel/1.jpg", alt: "" },
    { src: "/images/carousel/2.jpg", alt: "" },
    { src: "/images/carousel/3.jpg", alt: "" },
    { src: "/images/carousel/4.png", alt: "" },
    { src: "/images/carousel/5.jpg", alt: "" },
]

export default function Page() {
    return (
        <Container>
            <Carousel slides={slides}/>
            <H>Hello, hellooo!</H>
            <P>We are so glad you're here.</P>
            <P>Sugar Peeps is a space that welcomes and celebrates <strong>EVERY BODY</strong>. Genevieve believes strongly that sugaring and all personal services should be affirming and positive experiences. She strives to be a master of her chosen esthetic specialties, and offers a wealth of information regarding her thoughtfully curated offerings. From the beginning it has been Sugar Peeps mission to provide ethical, quality, caring services with a focus on natural, eco-friendly products. When you become a Sugar Peeps' peep rest assured you will be in skilled, caring, attentive hands.</P>
            <P>Scheduling is easy! Simply click the Book Now button above and select your desired sugar services. You'll be supporting a small woman owned business, our local economy, AND choosing a natural hair removal method that is sweet to the environment and your skin. Bonus: Dottie Grace, Genevieve's gorgeous little shop pup familiar happily comes to work every day as well and is always available for emotional puppy support. <em>Welcome to the sweet side of self care!</em></P>
            <SocialFeed apiProviderAction={InstagramApi}/>
        </Container>
    )
}
