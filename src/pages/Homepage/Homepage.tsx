import { InfoSection } from "../../components/InfoSection/InfoSection";
import { MiniArticleSection } from "../../components/MiniArticleSection/MiniArticleSection";
import "./Homepage.scss";

export const Homepage = () => {
  return (
    <div className="home-page">
      <InfoSection />
      <MiniArticleSection />
    </div>
  );
};
