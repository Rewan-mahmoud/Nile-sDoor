import { useRef } from "react";
import { IMAGES } from "../constent/theme";
import { Link } from "react-router-dom";

const Footer4 = () => {
  const heartRef = useRef<HTMLSpanElement | null>(null);
  return (
    <footer className="site-footer style-1 bg-dark" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="widget widget_getintuch">
                <h5 className="footer-title">التواصل</h5>
                <ul>
                  <li>
                    <i className="flaticon-placeholder"></i>
                    <p>
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
            <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
              <div className="widget widget_services">
                <h5 className="footer-title">الروابط</h5>
                <ul>
                  <li>
                    <Link to="/">
                      <span>الصفحة الرئيسية</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us">
                      <span>من نحن </span>
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
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget_services">
                <h5 className="footer-title">OUR SERVICES</h5>
                <ul>
                  <li>
                    <Link to="/blog-open-gutenberg">
                      <span>Strategy & Research</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <span>Fast Delivery</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us">
                      <span>Seat Reservation</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-style-1">
                      <span>Pickup In Store</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-menu-1">
                      <span>Our Menu</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6	">
              <div className="widget widget_services">
                <h5 className="footer-title">Help Center</h5>
                <ul>
                  <li>
                    <Link to="/faq">
                      <span>FAQ</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-style-1">
                      <span>Shop</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-style-2">
                      <span>Category Filter</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonial">
                      <span>Testimonials</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us">
                      <span>Contact Us</span>
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
  );
};

export default Footer4;
