import React, { useContext } from "react";
//components
import VilaFinder from "../components/VilaFinder/";
import Hero from "../components/Hero/Hero";
import Heading from "../components/Heading/Heading";
import TopNavBanner from "../components/TopNavBanner/TopNavBanner";
import Header from "../components/Header/Header";
import CustomButton from "../components/CustomButton/CustomButton";
import FlippableCard from "../components/FlippableCard/FlippableCard";
import Banner from "../components/Banner/Banner";
import VilaCard from "../components/VilaCard/VilaCard";
import Slider from "../components/Slider/Slider";
//other
import topBanner from "../assets/image/topnavbanner.jpg";
import bannerImage from "../assets/image/banner.jpg";
import Logo from "../assets/image/logo.png";
import backgroundImage from "../assets/image/ramsar.jpg";
import { ThemeContext } from "../context/ThemeContextProvider";
const HomeScrean = () => {
  const { theme } = useContext(ThemeContext);
  const cardData = [
    {
      id: 1,
      frontIcon: "fa fa-home",
      frontTitle: "کوهستانی",
      frontDesc: "front desc",
      backIcon: "back icon",
      backTitle: "back title",
      backgroundImageOverlay: "rgba(0, 0, 0, 0.44)",
      backDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      backgroundImage:
        "https://cdn.jabama.com/image/jabama-images/1447261/557a9a44-c06b-4b7a-8d18-23295f6a33b3.png",
    },
    {
      id: 2,
      frontIcon: "fa fa-home",
      frontTitle: "ساحلی",
      frontDesc: "front desc",
      backIcon: "back icon",
      backTitle: "back title",
      backgroundImageOverlay: "rgba(0, 0, 0, 0.44)",
      backDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      backgroundImage:
        "https://cdn.jabama.com/image/jabama-images/1447261/034720d1-4929-4c0f-a151-1c1e417f4c5e.png",
    },
    {
      id: 3,
      frontIcon: "fa fa-home",
      frontTitle: "جنگلی",
      frontDesc: "front desc",
      backIcon: "back icon",
      backTitle: "back title",
      backgroundImageOverlay: "rgba(0, 0, 0, 0.44)",
      backDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      backgroundImage:
        "https://cdn.jabama.com/image/jabama-images/1447261/db2e2a7d-a90d-4585-bcc2-5c0e6380fed5.png",
    },
    {
      id: 4,
      frontIcon: "fa fa-home",
      frontTitle: "شهری",
      frontDesc: "front desc",
      backgroundImageOverlay: "rgba(0, 0, 0, 0.44)",
      backgroundImage:
        "https://cdn.jabama.com/image/jabama-images/1447261/db2e2a7d-a90d-4585-bcc2-5c0e6380fed5.png",
    },
  ];
  const vilaData = [
    {
      id: 1,
      gallery: [
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
      ],
      link: "https://google.com",
      title: "1ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: true,
      discountPresentage: 20,
    },
    {
      id: 2,
      gallery: [
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
      ],
      link: "https://google.com",
      title: "2ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: true,
      discountPresentage: 20,
    },
    {
      id: 3,
      gallery: [
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
      ],
      link: "https://google.com",
      title: "3ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: true,
      discountPresentage: 20,
    },
    {
      id: 4,
      gallery: [
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
      ],
      link: "https://google.com",
      title: "4ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: true,
      discountPresentage: 20,
    },
    {
      id: 5,
      gallery: [
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
      ],
      link: "https://google.com",
      title: "5ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: true,
      discountPresentage: 20,
    },
    {
      id: 6,
      gallery: [
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
      ],
      link: "https://google.com",
      title: "6ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: true,
      discountPresentage: 20,
    },
    {
      id: 7,
      gallery: [
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
      ],
      link: "https://google.com",
      title: "7ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: true,
      discountPresentage: 20,
    },
    {
      id: 8,
      gallery: [
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
        "https://picsum.photos/id/237/400/250",
      ],
      link: "https://google.com",
      title: "8ویلا استخردار",
      rating: "4.6",
      voters: "26",
      location: "گیلان، انزلی",
      rooms: 2,
      price: "730000",
      priceWithDiscount: "500000",
      isVerified: true,
      discountPresentage: 20,
    },
  ];
  return (
    <div className="theme" data-scheme={theme}>
      <div className="home-page container-fluid m-0 p-0">
        <TopNavBanner image={topBanner} alt="topbanner" />
        <Header logo={Logo} isSticky={false} />
        <Hero background={backgroundImage} overlayColor="rgba(0, 0, 0, 0.65)">
          <div className="container-fluid">
            <div className="row justify-content-md-center justify-content-lg-around align-items-center ">
              <div className="col-12 col-md-5 col-lg-4 ">
                <VilaFinder />
              </div>
              <div className="col-12 col-md-5 col-lg-4 mt-3 mt-md-0">
                <div className="content-wrapper text-center text-lg-start py-5">
                  <Heading>رامسرگردی</Heading>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                  </p>
                  <CustomButton
                    type={"customBtn"}
                    // onClickHandler
                    text="مشاهده ویلا ها"
                    btnWidth
                    csColor="#333"
                    csBgColor="#fff"
                    csBorderColor="#333"
                    csOnFocusBoxShadow="0 0 0 0.25rem rgb(114 114 114 / 76%)"
                  />
                </div>
              </div>
            </div>
          </div>
        </Hero>
        <section className="container mt-4">
          <div className="row d-flex flex-wrap flex-column flex-md-row justify-content-md-between">
            {cardData.map((card) => (
              <div className="col-12 col-md-6 col-lg-3" key={card.id}>
                <FlippableCard
                  frontTitle={card.frontTitle}
                  status="center"
                  backgroundImageOverlay={card.backgroundImageOverlay}
                  backgroundImage={card.backgroundImage}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="container-fluid p-0">
          <Banner
            className=""
            image={bannerImage}
            link="https://www.google.com"
          />
        </section>
        <section className="vilaSlider container py-4"
            style={{ direction: "ltr" }}
          >
            <Heading
              tag="h5"
              className="slider-title text-right text-bold mb-4 ps-3"
            >
              پرطرفدار ترین ویلا ها
            </Heading>
            <Slider>
              {vilaData.map((vila) => (
                <VilaCard data={vila} gallery={vila.gallery} key={vila.id} />
              ))}
            </Slider>
          </section>
      </div>
    </div>
  );
};

export default HomeScrean;
