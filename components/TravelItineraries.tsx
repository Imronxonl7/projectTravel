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
    <section className="ti-section">
      <Container className="">
        <div className="ti-inner">

          <h2 className={`${poppins.className} ti-title`}>
            Travel Itineraries
          </h2>

          <div className="ti-video-wrap">
            <iframe
              src="https://www.youtube.com/embed/-ESiRvjgFgc?si=tKkbQnkyAJXHsARC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Logo strip — rasmdagidek yonma-yon, kichik balandlik */}
          <div className="ti-logos">
            {images.map(({ src, alt }) => (
              <div key={alt} className="ti-logo-item">
                <Image
                  src={src}
                  alt={alt}
                  width={460}
                  height={48}
                  className="ti-logo-img"
                />
              </div>
            ))}
          </div>

        </div>
      </Container>
     <style >{`
        .ti-section {
          background: #fff;
          padding: 72px 0 80px;
        }
        .ti-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 36px;
        }
        .ti-title {
          font-size: clamp(36px, 8vw, 100px);
          font-weight: 700;
          color: #1a1a2e;
          text-align: center;
          line-height: 1.05;
          letter-spacing: -2px;
          margin: 0;
        }
        .ti-video-wrap {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 16 / 9;
        }
        .ti-video-wrap iframe {
          width: 100%;
          height: 100%;
          display: block;
          border: none;
        }

        /* Logo strip */
        .ti-logos {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 8px 0;
        }
        .ti-logo-item {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.75;
          transition: opacity 0.2s;
        }
        .ti-logo-item:hover { opacity: 1; }
        .ti-logo-img {
          width: 100%;
          height: auto;
          max-height: 48px;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .ti-section { padding: 48px 0 56px; }
          .ti-logos { gap: 10px; }
          .ti-logo-img { max-height: 36px; }
        }

        @media (max-width: 480px) {
          .ti-section { padding: 36px 0 44px; }
          .ti-title { letter-spacing: -1px; }
          .ti-logos {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px 8px;
          }
          .ti-logo-img { max-height: 32px; }
        }

        @media (max-width: 360px) {
          .ti-logos {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default TravelItineraries;