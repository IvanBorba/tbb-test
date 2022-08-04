import Header from "../../components/Header";
import bannerHeroMobile from "../../assets/images/banner-hero-mobile.png";
import bannerHeroDesktop from "../../assets/images/banner-hero.png";
import "./style.css";

const LandingPage = () => {
  const actualWidth = window.innerWidth;
  const isMobile = actualWidth < 769;

  return (
    <div>
      <Header isMobile={isMobile} />
      <main>
        <img
          alt="Banner Hero, shows the logo, the product packs images, also some all-ages women with the following text: Cares for intimate microbiome to help strengthen natural intimate defence"
          src={isMobile ? bannerHeroMobile : bannerHeroDesktop}
        />
        <section>
          <h2>we're here to help</h2>
          <p>
            When it comes to caring for our most intimate areas, we've lost our
            connection. <br /> Embarrassed, unwilling, or unable to communicate
            with others, we're needlessly neglecting the parts of our bodies
            that need it most. <br /> We're here to help. Providing you with the
            expertise, knowledge and products you need to feel confident in your
            personal care.
          </p>
          <img></img>
          <h2>
            whatever your age. whatever your lifestyle. whatever your interests.
          </h2>
          <p>
            Co-created with gynaecologists, our revolutionary products have been
            expertly developed to support your intimate microbiome and pH
            balance, and strengthen overall natural health. <br /> As the
            experts in intimate hygiene, we want to bring discussion about
            intimate wellness care out of the dark and demystify the taboos that
            surround it.
          </p>
          <h2>our products</h2>
          <div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
          </div>
        </section>
      </main>
      <img></img>
      <section></section>
      <footer></footer>
    </div>
  );
};

export default LandingPage;
