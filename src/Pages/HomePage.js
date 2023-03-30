import HomeCarousal from "../Components/HomeCarousal";
import HomeCarousalbt from "../Components/HomeCarousalbt";
import { HomeImage } from "../Components/HomeImage";
import HomeResearch from "../Components/HomeResearch";
import LoginCard from "../Components/LoginCard";

const HomePage = () => {
  return (
    <>
      <HomeCarousal />
      <HomeImage />
      <HomeCarousalbt />
      <HomeResearch />
    </>
  );
};

export default HomePage;
