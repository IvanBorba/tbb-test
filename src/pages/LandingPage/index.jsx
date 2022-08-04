import bannerHeroMobile from "../../assets/images/banner-hero-mobile.png";
import bannerHeroDesktop from "../../assets/images/banner-hero.png";
import bannerMidMobile from "../../assets/images/banner-mid-mobile.png";
import bannerMidDesktop from "../../assets/images/banner-mid.png";
import infoIcons from "../../assets/images/info-icons.png";

import ProductCard from "../../components/ProductCard";
import ArticleCard from "../../components/ArticleCard";
import Header from "../../components/Header";

import { mockedArticles, mockedProducts } from "../../mocks";

import "./style.css";

const LandingPage = () => {
  const actualWidth = window.innerWidth;
  const isMobile = actualWidth < 769;

  return (
    <>
      <Header isMobile={isMobile} />
      <main className="main-container">
        <img
          className="banner"
          src={isMobile ? bannerHeroMobile : bannerHeroDesktop}
          alt="Banner Hero, shows the logo, the product packs images, also some all-ages women with the following text: Cares for intimate microbiome to help strengthen natural intimate defence"
        />
        <section className="info-section-container">
          <h2>we're here to help</h2>
          <p className="small-text">
            When it comes to caring for our most intimate areas, we've lost our
            connection. <br /> <br /> Embarrassed, unwilling, or unable to
            communicate with others, we're needlessly neglecting the parts of
            our bodies that need it most. <br /> <br /> We're here to help.
            Providing you with the expertise, knowledge and products you need to
            feel confident in your personal care.
          </p>
          <img
            className="info-icons-image"
            alt="Image that show 3 icons with some legends, the first one is Promote, the second Preserve and the third is Protect."
            src={infoIcons}
          ></img>
          <h2 className="large-heading">
            whatever your age. whatever your lifestyle. whatever your interests.
          </h2>
          <p className="large-text">
            Co-created with gynaecologists, our revolutionary products have been
            expertly developed to support your intimate microbiome and pH
            balance, and strengthen overall natural health. <br /> <br /> As the
            experts in intimate hygiene, we want to bring discussion about
            intimate wellness care out of the dark and demystify the taboos that
            surround it.
          </p>
          <h2>our products</h2>
          <div className="products-list-container">
            {mockedProducts.map((element, index) => (
              <ProductCard product={element} key={index} />
            ))}
          </div>
        </section>
      </main>
      <img
        className="banner"
        src={isMobile ? bannerMidMobile : bannerMidDesktop}
        alt="Mid page banner, shows the logo, the product packs images, and the following text: Cares for intimate microbiome to help strengthen natural intimate defence"
      ></img>
      <section className="articles-section-container">
        <h2 className="large-heading">keep up to date with our discoveries</h2>
        <div className="articles-cards-list-container">
          {mockedArticles.map((element, index) => (
            <ArticleCard article={element} key={index} />
          ))}
        </div>
        <button className="articles-cta-button"></button>
      </section>
      <footer></footer>
    </>
  );
};

export default LandingPage;
