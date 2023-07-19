import HomeCarousal from "../Components/HomeCarousal";
import HomeCarousalbt from "../Components/HomeCarousalbt";
import { HomeImage } from "../Components/HomeImage";
import HomeResearch from "../Components/HomeResearch";
import LandingSection from "../Components/LandingSection/LandingSection";
import LoginCard from "../Components/LoginCard";

const HomePage = () => {
  return (
    <>
      <LandingSection/>
      <HomeCarousal />
      <HomeImage />
      <HomeCarousalbt />
      <HomeResearch />
    </>
  );
};

export default HomePage;
