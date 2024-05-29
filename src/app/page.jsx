import HeroSection from "@/Components/HomeComponets/HeroSection";
import NewArrival from "@/Components/HomeComponets/NewArrival";
import OurCategories from "@/Components/HomeComponets/OurCategories";
import Vendors from "@/Components/HomeComponets/Vendors";
import WhyChooseUs from "@/Components/HomeComponets/WhyChooseUs";
import Navbar from "@/Components/MainComponents/Navbar";
import "./globals.css";

export default function Home() {

  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      {/* <main className="px-20"> */}
      <OurCategories />
      <NewArrival />
      <WhyChooseUs />
      <Vendors />
      {/* </main> */}
    </>
  );
}
