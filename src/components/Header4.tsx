import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import Menu from "./Menu";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/AppContext";

const Header2 = () => {
  const { headerClass, headerSidebar, setHeaderSidebar, setShowSignInForm } =
    useContext(Context);
  const [cart, setCart] = useState<boolean>(false);
  const cartRef = useRef<HTMLLIElement[]>([]);
  const [scroll, setScroll] = useState<boolean>(false);


  const scrollHandler = () => {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <header className="site-header mo-left header style-1">
      <div
        className={`sticky-header main-bar-wraper navbar-expand-lg ${
          scroll ? "is-fixed" : ""
        }`}
      >
        <div className="main-bar clearfix ">
          <div className="container clearfix">
            <div className="logo-header mostion">
              <div className="logo-header mostion">
                {headerClass ? (
                  <Link to="/" className="anim-logo-white">
                    <img src={IMAGES.logo} alt="/" />
                  </Link>
                ) : (
                  <Link to="/" className="anim-logo">
                    <img src={IMAGES.logo} alt="/" />
                  </Link>
                )}
              </div>
            </div>
            <button
              className={`navbar-toggler collapsed navicon justify-content-end ${
                headerSidebar ? "open" : ""
              }`}
              type="button"
              onClick={() => {
                setHeaderSidebar(!headerSidebar);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div
              className={`header-nav navbar-collapse justify-content-end ${
                headerSidebar ? "show" : ""
              }`}
              id="navbarNavDropdown"
            >
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
