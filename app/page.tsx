import AdventureTravel from "@/components/AdventureTravel";
import ChooseTrip from "@/components/ChooseTrip";
import ClearPrice from "@/components/ClearPrice";
import DreamDestination from "@/components/DreamDestination";
import ExperienceTravel from "@/components/ExperienceTravel";
import NextAdventure from "@/components/NextAdventure";
import RoamingTales from "@/components/RoamingTales";
import TravelItineraries from "@/components/TravelItineraries";
import UnforgettableTravel from "@/components/UnforgettableTravel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomePage | Dunyo bo'ylab sayohat",
  description:
    "Siz bu yerda butun dunyo bo'ylab 200 dan ortiq davlarda sayohat qilishingiz mumkin, barchasi qulay va tez",
};

const HomePage = () => {
  return (
    <>
      <ExperienceTravel />
      <DreamDestination />
      <ChooseTrip />
      <NextAdventure />
      <AdventureTravel />
      <TravelItineraries />
      <UnforgettableTravel />
      <ClearPrice />
      <RoamingTales />
    </>
  );
};

export default HomePage;
