import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { MenuStyle1Arr, MenuStyle1Arr2  , mainDishes , drinks} from "../elements/JsonData";

const MenuStyle1 = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner
        img={IMAGES.banner_bnr1}
        title="القائمة"
        subtitle="Our Menu 1"
      />
      <section className="content-inner section-wrapper-7 overflow-hidden bg-white">
        <div className="container">
          <div className="row inner-section-wrapper">
          <h2 className="title text-primary">المقبلات</h2>
            {MenuStyle1Arr.map(({ title, child }, ind) => (
              <div className="col-xl-4 col-lg-6 col-md-6" key={ind}>
                <div className="">
                  <h4 className="title text-primary">{title}</h4>
                </div>
                {child?.map(({ categery, price }, index) => (
                  <div
                    className="dz-shop-card style-2 m-b30 p-0 shadow-none"
                    key={index}
                  >
                    <div className="dz-content">
                      <div className="dz-head">
                        <span className="header-text">
                          <Link to="">{categery}</Link>
                        </span>
                        <span className="img-line"></span>
                        <span className="header-price">{price}</span>
                      </div>
                      {/* <p className="dz-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="row">
          <h2 className="title text-primary">الاطباق الرئيسية</h2>
            {mainDishes.map(({ title, child }, ind) => (
              <div className="col-xl-4 col-lg-6 col-md-6" key={ind}>
                <div className="">
                
                  <h4 className="title text-primary">{title}</h4>
                </div>
                {child?.map(({ categery, price }, index) => (
                  <div
                    className="dz-shop-card style-2 m-b30 p-0 shadow-none"
                    key={index}
                  >
                    <div className="dz-content">
                      <div className="dz-head">
                        <span className="header-text">

                          <Link to="">{categery}</Link>
                        </span>
                        <span className="img-line"></span>
                        <span className="header-price">{price}</span>
                      </div>
                      {/* <p className="dz-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="row">
          <h2 className="title text-primary">المشروبات </h2>
            {drinks.map(({ title, child }, ind) => (
              <div className="col-xl-4 col-lg-6 col-md-6" key={ind}>
                <div className="">
                
                  <h4 className="title text-primary">{title}</h4>
                </div>
                {child?.map(({ categery, price }, index) => (
                  <div
                    className="dz-shop-card style-2 m-b30 p-0 shadow-none"
                    key={index}
                  >
                    <div className="dz-content">
                      <div className="dz-head">
                        <span className="header-text">

                          <Link to="">{categery}</Link>
                        </span>
                        <span className="img-line"></span>
                        <span className="header-price">{price}</span>
                      </div>
                      {/* <p className="dz-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="row">
            {MenuStyle1Arr2.map(({ title, child }, ind) => (
              <div className="col-xl-4 col-lg-6 col-md-6" key={ind}>
                <div className="">
                
                  <h4 className="title text-primary">{title}</h4>
                </div>
                {child?.map(({ categery, price }, index) => (
                  <div
                    className="dz-shop-card style-2 m-b30 p-0 shadow-none"
                    key={index}
                  >
                    <div className="dz-content">
                      <div className="dz-head">
                        <span className="header-text">

                          <Link to="">{categery}</Link>
                        </span>
                        <span className="img-line"></span>
                        <span className="header-price">{price}</span>
                      </div>
                      {/* <p className="dz-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <img
          className="bg1 dz-move-down"
          src={IMAGES.background_pic12}
          alt="/"
        />
        <img
          className="bg2 dz-move-down"
          src={IMAGES.background_pic14}
          alt="/"
        />
      </section>
    </div>
  );
};

export default MenuStyle1;
