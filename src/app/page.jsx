import HeroSection from "@/Components/HomeComponets/HeroSection";
import OurCategories from "@/Components/HomeComponets/OurCategories";
import Navbar from "@/Components/MainComponents/Navbar";

export default function Home() {

  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <main className="px-20"> */}
        <OurCategories />
      {/* </main> */}
    </>
  );
}
