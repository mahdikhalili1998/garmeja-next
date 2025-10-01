import LovelyPlace from "../module/LovelyPlace";
import LandMarkLocation from "../module/LandMarkLocation";
import CheapLocation from "../module/CheapLocation";
import SiteFeature from "../module/SiteFeature";

function MainPage() {
  return (
    <div className="mt-6 space-y-14 pr-1 pb-80">
      <LovelyPlace />
      <LandMarkLocation />
      <CheapLocation />
      <SiteFeature />
    </div>
  );
}

export default MainPage;
