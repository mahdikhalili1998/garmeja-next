import LovelyPlace from "../module/mainPage/LovelyPlace";
import LandMarkLocation from "../module/mainPage/LandMarkLocation";
import CheapLocation from "../module/mainPage/CheapLocation";
import SiteFeature from "../module/mainPage/SiteFeature";
import CategoryPlaces from "../module/mainPage/CategoryPlaces";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function MainPage() {
  return (
    <>
      <Header />
      <div className="mt-6 space-y-14 pr-1 pb-20">
        <LovelyPlace />
        <CategoryPlaces />
        <LandMarkLocation />
        <CheapLocation />
        <SiteFeature />
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
