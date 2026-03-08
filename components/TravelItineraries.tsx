import { Poppins } from "next/font/google";
import Container from "./Container";
import BlissFull from "@/assets/images/BlissFul.svg";
import YachtClub from "@/assets/images/YachtClub.svg";
import Traveling from "@/assets/images/Traveling.svg";
import Biking from "@/assets/images/Biking.svg";
import TravelWorld from "@/assets/images/TravelWorld.svg";
import Image from "next/image";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const images = [
  { src: BlissFull, alt: "Bliss Full" },
  { src: YachtClub, alt: "Yacht Club" },
  { src: Traveling, alt: "Traveling" },
  { src: Biking, alt: "Biking" },
  { src: TravelWorld, alt: "Travel World" },
];

const TravelItineraries = () => {
  return (
    <section>
      <Container className="your-style">
        <div className="flex flex-col justify-center items-center">
          <p className={`${poppins.className} font-bold xl:text-[100px]`}>
            Travel Itineraries
          </p>

          <iframe
            width="100%"
            height="615"
            src="https://www.youtube.com/embed/-ESiRvjgFgc?si=tKkbQnkyAJXHsARC"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          {/* ✅ Image grid — har bir div'da aniq w va h bo'lishi kerak */}
          <div className="flex items-center justify-between gap-4 w-full mt-8">
            {images.map(({ src, alt }) => (
              <div
                key={alt}
                className="relative rounded-2xl overflow-hidden w-66 h-21.5"
                // yoki: w-full h-[300px] — dizayningizga qarab
              >
                <Image
                  fill
                  src={src}
                  alt={alt}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TravelItineraries;