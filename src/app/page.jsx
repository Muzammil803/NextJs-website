import HeroSection from "@/Components/HomeComponets/HeroSection";
import NewArrival from "@/Components/HomeComponets/NewArrival";
import OurCategories from "@/Components/HomeComponets/OurCategories";
import Navbar from "@/Components/MainComponents/Navbar";

export default function Home() {

  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <main className="px-20"> */}
        <OurCategories />
        <NewArrival/>
      {/* </main> */}
    </>
  );
}
