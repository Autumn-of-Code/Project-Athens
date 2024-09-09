import NavBar from "./components/navbar/NavBar";
import Timeline from "./components/timeline/Timeline";
import { HeroMain } from "./components/navbar/hero_section/heroMain";
import { AboutMain } from "./components/navbar/about_section/aboutMain";
import Statistics from "./components/statistics/statistics";
import Prizes from "./components/prizes/prizes";
import Footer from "./components/footer/Footer";
import Induction from "./components/induction/induction";
import Oraganiser from "./components/organiser/organiser";

export default function Home() {
    return (
        <div>
            {/* <NavBar />
      <HeroMain />
      <AboutMain />
      <Induction /> */}
            <Timeline />
            {/* <Statistics />
      <Prizes />
      <Oraganiser />
      <Footer /> */}
        </div>
    );
}
