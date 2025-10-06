import LovelyPlace from "../module/LovelyPlace";
import LandMarkLocation from "../module/LandMarkLocation";
import CheapLocation from "../module/CheapLocation";
import SiteFeature from "../module/SiteFeature";
import CategoryPlaces from "../module/CategoryPlaces";
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
