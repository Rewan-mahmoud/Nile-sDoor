import { Link } from "react-router-dom";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { MainBannerArr } from "../elements/JsonData";
import { EffectFade, Thumbs, Navigation, Pagination } from "swiper/modules";
import { IMAGES } from "../constent/theme";
import { useRef, useState } from "react";

const MainBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const ref = useRef<SwiperRef | null>(null);
  const pagination = {
    clickable: true,
    el: ".main-slider-pagination",
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="main-bnr-one">
      <div className="slider-pagination">
        <div className="main-button-prev">
          <i className="icon-arrow-up"></i>
        </div>
        <div className="main-slider-pagination"></div>
        <div className="main-button-next">
          <i className="icon-arrow-down"></i>
        </div>
      </div>
      <Swiper
        className="main-slider-1 swiper"
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        modules={[EffectFade, Thumbs, Navigation, Pagination]}
        pagination={pagination}
        navigation={{
          prevEl: ".main-button-prev",
          nextEl: ".main-button-next",
        }}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        onSwiper={(swiper) => {
          if (ref.current) ref.current.swiper = swiper;
        }}
      >
        {MainBannerArr.map(
          ({ img, subtitle, title, title2, title3, text }, ind) => (
            <SwiperSlide className="swiper-slide" key={ind}>
              <div className="banner-inner">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7 col-md-7">
                      <div className="banner-content">
                        <span className="sub-title">{subtitle}</span>
                        <h1 className="title  ">
                          {title}
                          <br />
                          {title2}{" "}
                          <span className="text-primary">{title3}</span>
                        </h1>
                        <p className="wow fadeInUp">{text}</p>
                        <div className="banner-btn d-flex align-items-center wow fadeInUp">
                          <Link
                            to="/contact-us"
                            className="btn btn-primary btn-md shadow-primary m-r30 btn-hover-1"
                          >
                            <span> تواصل معنا </span>
                          </Link>
                          <Link
                            to="/about-us"
                            className="btn btn-outline-primary btn-md shadow-primary me-2 btn-hover-1"
                          >
                            <span> اقراء المزيد</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                      <div className="banner-media wow fadeInRight">
                        <img src={img} alt="/" />
                      </div>
                    </div>
                  </div>
                </div>
                <img src={IMAGES.main_slide_img3} className="img1" alt="/" />
                <img src={IMAGES.main_slide_img1} className="img2" alt="/" />
                <img src={IMAGES.main_slide_img2} className="img3" alt="/" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
     
    </div>
  );
};

export default MainBanner;
