import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import { useRef } from "react";

const Footer = () => {
  const heartRef = useRef<HTMLSpanElement | null>(null);
  return (
    <>
      <footer className="site-footer  style-1 bg-dark" id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-12">
                <div className="dz-form-card bg-primary">
                  <div className="section-head">
                    <h4 className="title m-0"> تواصل معنا</h4>
                    <p className="m-t10">
                      سواء كنتم تخططون لعشاء عائلي، احتفال خاص، أو تشتهون
                      المأكولات المصرية الأصيلة، نحن في انتظاركم في باب النيل.
                    </p>
                  </div>
                  <form className="dzForm dezPlaceAni">
                    <input
                      type="hidden"
                      className="form-control"
                      name="dzToDo"
                      value="Contact"
                    />
                    <input
                      type="hidden"
                      className="form-control"
                      name="reCaptchaEnable"
                      value="0"
                    />
                    <div className="dzFormMsg"></div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="input-group input-line">
                          <input
                            name="dzName"
                            required
                            type="text"
                            className="form-control"
                            placeholder="الاسم "
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="input-group input-line">
                          <input
                            name="dzEmail"
                            required
                            type="text"
                            className="form-control"
                            placeholder="البريد الالكتروني "
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="input-group input-line">
                          <input
                            name="dzOther[Subject]"
                            required
                            type="text"
                            className="form-control"
                            placeholder="الموضوع"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 ">
                        <div className="input-group input-line">
                          <textarea
                            name="dzMessage"
                            required
                            className="form-control"
                            placeholder="رسالة"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <button
                          type="button"
                          name="submit"
                          value="submit"
                          className="btn btn-md btn-white btn-hover-1"
                        >
                          <span>ارسل </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-5 wow fadeInUp">
                <div className="widget widget_getintuch">
                  <h5 className="footer-title">التواصل</h5>
                  <ul>
                    <li>
                      <i className="flaticon-placeholder"></i>
                      <p>
                        1247/Plot No. 39, 15th Phase, Colony, Kkatpally,
                        Hyderabad
                      </p>
                    </li>
                    <li>
                      <i className="flaticon-telephone"></i>
                      <p>
                        +91 987-654-3210
                        <br />
                        +91 123-456-7890
                      </p>
                    </li>
                    <li>
                      <i className="flaticon-email-1"></i>
                      <p>
                        info@example.com
                        <br />
                        info@example.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInUp">
                <div className="widget widget_services">
                  <h5 className="footer-title"> مواقعنا</h5>
                  <ul>
                    <li>
                      <Link to="/ ">
                        <span>الصفحة الرئيسية</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us">
                        <span>من نحن</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <span>خدماتنا</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/our-menu-1">
                        <span>القائمة</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-standard">
                        <span>المدونة</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInUp">
                <div className="widget widget_services">
                  <h5 className="footer-title">خدمة العملاء </h5>
                  <ul>
                    <li>
                      <Link to="/faq">
                        <span>الاسئلة الشائعة</span>
                      </Link>
                    </li>
                  
                    
                    <li>
                      <Link to="/contact-us">
                        <span> تواصل معنا</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom">
            <p className="text-center">Copyright 2023 All rights reserved.</p>
          </div>
        </div>
        <img className="bg1 dz-move" src={IMAGES.background_pic5} alt="/" />
        <img className="bg2 dz-move" src={IMAGES.background_pic6} alt="/" />
      </footer>
    </>
  );
};

export default Footer;
