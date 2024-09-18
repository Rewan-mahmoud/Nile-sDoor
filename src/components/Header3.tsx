import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import { MenuDark } from "./Menu";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/AppContext";

const Header3 = () => {
  const { setShowSignInForm, headerSidebar, setHeaderSidebar } =
    useContext(Context);
  const [cart, setCart] = useState<boolean>(false);
  const [scroll, setScroll] = useState(false);

  const cartRef = useRef<HTMLLIElement[]>([]);

  const cartButton = () => {
    setCart(!cart);
  };
  const deletItems = (ind: number) => {
    cartRef.current[ind].classList.add("cartListItems");
    setTimeout(() => {
      cartRef.current[ind].remove();
    }, 500);
  };

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
    <header className="site-header mo-left header header-transparent transparent-white style-1">
      <div
        className={`sticky-header main-bar-wraper navbar-expand-lg ${
          scroll ? "is-fixed" : ""
        }`}
      >
        <div className="main-bar clearfix ">
          <div className="container clearfix">
            <div className="logo-header mostion">
              <div className="logo-header mostion">
                <Link to="/" className="anim-logo">
                  <img src={IMAGES.logo} alt="/" />
                </Link>
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
              className={`header-nav navbar-collapse collapse justify-content-start ${
                headerSidebar ? "show" : ""
              }`}
              id="navbarNavDropdown"
            >
              {" "}
              <MenuDark />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header3;
