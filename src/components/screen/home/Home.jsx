import Header from "../../ui/header/Header";
import ArticleWrapper from "../../ui/articleWrapper/ArticleWrapper";
import Laser from "../articles/Laser";
import LaserWhat from "../articles/LaserWhat";
import LaserMetods from "../articles/LaserMetods";
import LaserIndications from "../articles/LaserIndications";
import LaserSteps from "../articles/LaserSteps";
import LaserRecord from "../articles/LaserRecord";
import LaserAnswers from "../articles/LaserAnswers";
import LaserDoctors from "../articles/LaserDoctors";
import LaserServices from "../articles/LaserServices";
import LaserEquip from "../articles/LaserEquip";
import LaserReviews from "../articles/LaserReviews";
import Footer from "../../ui/footer/Footer";

const Home = () => {
  return (
    <div>
      Test
      <Header />

      <main>
        <ArticleWrapper>
          <Laser />
        </ArticleWrapper>

        <ArticleWrapper>
          <LaserWhat />
        </ArticleWrapper>

        <ArticleWrapper>
          <LaserMetods />
        </ArticleWrapper>

        <ArticleWrapper>
          <LaserIndications />
        </ArticleWrapper>

        <ArticleWrapper>
          <LaserSteps />
        </ArticleWrapper>

        <ArticleWrapper>
          <LaserRecord />
        </ArticleWrapper>

        <ArticleWrapper>
          <LaserAnswers />
        </ArticleWrapper>

        <ArticleWrapper isNotSide="true">
          <LaserDoctors />
        </ArticleWrapper>

        <ArticleWrapper>
          <LaserServices />
        </ArticleWrapper>

        <ArticleWrapper isNotSide="true">
          <LaserEquip />
        </ArticleWrapper>

        <ArticleWrapper isNotSide="true">
          <LaserReviews />
        </ArticleWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
