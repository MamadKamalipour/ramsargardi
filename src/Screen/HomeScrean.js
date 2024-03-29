import React, { useContext } from "react";
//components
import VilaFinder from "../components/VilaFinder/";
import Hero from "../components/Hero/Hero";
import Heading from "../components/Heading/Heading";
import TopNavBanner from "../components/TopNavBanner/TopNavBanner";
import CustomButton from "../components/CustomButton/CustomButton";
import FlippableCard from "../components/FlippableCard/FlippableCard";
import Banner from "../components/Banner/Banner";
import VilaCard from "../components/VilaCard/VilaCard";
import BlogCard from "../components/BlogCard/BlogCard";
//other
import topBanner from "../assets/image/topnavbanner.jpg";
import bannerImage from "../assets/image/banner.jpg";
import backgroundImage from "../assets/image/ramsar.jpg";
import CustomSwiper from "../components/CustomSwiper/CustomSwiper";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./HomeScreen.scss";
// context
import { ThemeContext } from "../context/ThemeContextProvider";
import { VilaContext } from "../context/VilaContextProvider";
const HomeScrean = () => {
  const { theme } = useContext(ThemeContext);
  const { vilaData } = useContext(VilaContext);
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

  const blogData = [
    {
      id: 1,
      image:
        "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
      title: "پست بلاگ آزمایشی",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
    },
    {
      id: 2,
      image:
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
      title: "پست بلاگ آزمایشی",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
    },
    {
      id: 3,
      image:
        "https://i.picsum.photos/id/572/536/354.jpg?hmac=LH_xl3VtYKAAEcOQJpsrPecFrg-hDX3wQGexX5mmINM",
      title: "پست بلاگ آزمایشی",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
    },
  ];
  return (
    // <div className="theme" data-scheme={theme}>
    <div className="home-page container-fluid m-0 p-0">
      <TopNavBanner image={topBanner} alt="topbanner" />
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
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
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
      <section className="container mt-4 mb-5">
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
      <section className="container-fluid p-0 mb-5">
        <Banner
          className=""
          image={bannerImage}
          link="https://www.google.com"
        />
      </section>
      <section
        className="vilaSlider container py-4 "
        style={{ direction: "rtl" }}
      >
        <div className="top-swipper-wrapper">
          <Heading
            tag="h5"
            className="slider-title text-right text-bold m-0 ps-3"
          >
            پرطرفدار ترین ویلا ها
          </Heading>
          <Link to="" className="link">
            {" "}
            مشاهده همه
          </Link>
        </div>
        <CustomSwiper
          spaceBetween={10}
          draggable={false}
          loop={true}
          cssMode={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 10,
              navigation: false,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@2": {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {vilaData.map((vila) => (
            <SwiperSlide key={vila.id}>
              <VilaCard data={vila} gallery={vila.gallery} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </section>
      <section className="container-fluid p-0 mb-5">
        <Banner
          className=""
          image={bannerImage}
          link="https://www.google.com"
        />
      </section>
      <section
        className="vilaSlider container py-4 mb-5"
        style={{ direction: "rtl" }}
      >
        <div className="top-swipper-wrapper">
          <Heading
            tag="h5"
            className="slider-title text-right text-bold m-0 ps-3"
          >
            سوییت و آپارتمان
          </Heading>
          <Link to="" className="link">
            {" "}
            مشاهده همه
          </Link>
        </div>
        <CustomSwiper
          spaceBetween={10}
          draggable={false}
          loop={true}
          cssMode={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 10,
              navigation: false,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@2": {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {vilaData.map((vila) => (
            <SwiperSlide key={vila.id}>
              <VilaCard data={vila} gallery={vila.gallery} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </section>
      <section className="container-fluid p-0 mb-5">
        <Banner
          className=""
          image={bannerImage}
          link="https://www.google.com"
        />
      </section>
      <section
        className="vilaSlider container py-4 mb-5"
        style={{ direction: "rtl" }}
      >
        <div className="top-swipper-wrapper">
          <Heading
            tag="h5"
            className="slider-title text-right text-bold m-0 ps-3"
          >
            جذاب‌ترین اقامتگاه‌های رامسر
          </Heading>
          <Link to="" className="link">
            {" "}
            مشاهده همه
          </Link>
        </div>
        <CustomSwiper
          spaceBetween={10}
          draggable={false}
          loop={true}
          cssMode={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 10,
              navigation: false,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@2": {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {vilaData.map((vila) => (
            <SwiperSlide key={vila.id}>
              <VilaCard data={vila} gallery={vila.gallery} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </section>
      <section className="container-fluid p-0 mb-5">
        <Banner
          className=""
          image={bannerImage}
          link="https://www.google.com"
        />
      </section>
      <section
        className="vilaSlider container py-4 mb-5"
        style={{ direction: "rtl" }}
      >
        <div className="top-swipper-wrapper">
          <Heading
            tag="h5"
            className="slider-title text-right text-bold m-0 ps-3"
          >
            کلبه های خاص
          </Heading>
          <Link to="" className="link">
            {" "}
            مشاهده همه
          </Link>
        </div>
        <CustomSwiper
          spaceBetween={10}
          draggable={false}
          loop={true}
          cssMode={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 10,
              navigation: false,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@2": {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {vilaData.map((vila) => (
            <SwiperSlide key={vila.id}>
              <VilaCard data={vila} gallery={vila.gallery} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </section>
      <section className="blog-section container w-75 py-4">
        <Heading tag="h4" style={{ textAlign: "right", fontWeight: "bold" }}>
          مطالب وبلاگ
        </Heading>
        <CustomSwiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          cssMode={true}
          navigation={true}
          modules={[Navigation]}
        >
          {blogData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard data={blog} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </section>
    </div>
    // </div>
  );
};

export default HomeScrean;
