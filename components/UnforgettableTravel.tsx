import React from "react";
import Image from "next/image";
import Container from "./Container";
import UnforgettableTravelText from "./UnforgettableTravelText";
import UnforgettableTravelCards from "./UnforgettableTravelCards";
import { Faq } from "@/types/Faq";
import getData from "@/utils/api";


const UnforgettableTravel = async() => {
  const faqs = await getData({url:"faq"})
  return (
    /*
      section has:
        - position: relative  → so <Image fill> binds to it
        - minHeight           → drives the section's actual height
        - overflow: hidden    → cards never bleed out
      Container sits inside as z-10 flex column.
    */
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ minHeight: "clamp(380px, 52vw, 780px)" }}
    >

      {/* BG image — fills section edge-to-edge */}
      <Image
        src="https://www.historyhit.com/app/uploads/bis-images/5149777/Great-Wall-of-China-788x537.jpg?x15201"
        alt="Great Wall of China"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Content — Container constrains width, flex-col pushes cards to bottom */}
      <Container className="relative z-10 flex flex-col flex-1 justify-between">
        <UnforgettableTravelText />
        <UnforgettableTravelCards faqs={faqs} />
      </Container>

    </section>
  );
};

export default UnforgettableTravel;