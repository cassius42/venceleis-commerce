import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { IoCart } from "react-icons/io5";
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import logo from "../../images/venceleis-high-resolution-logo-transparent.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { AuthProvider, useAuth } from "context/AuthProvider.js";
import { useNavigate } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`flex`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-auto
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const SignupButton = tw(NavLink)`
  lg:mx-0
  px-5 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-lg! text-center ml-0!`};

  img {
    ${tw`w-[140px] mr-10`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between `;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;
const CartContainer = styled.div`
  ${tw`flex items-center relative `}
`;

const CartIcon = styled(IoCart)`
  ${tw`text-2xl `}
`;

const TotalItems = styled.span`
  ${tw`ml-1 text-sm font-semibold `}
`;

export default ({
  roundedHeaderButton = false,
  logoLink,
  links,
  className,
  collapseBreakpointClass = "lg",
}) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */
  const { totalItems } = useCart();
  console.log("totalItems", totalItems);

  const [isDropdown, setIsDropdown] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const { logout } = useAuth();
  const dropdownRef = useRef(null);

  function handleClickOutside(event) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target.tagName !== "BUTTON"
    ) {
      setIsDropdown(false);
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target.tagName !== "BUTTON"
      ) {
        setIsDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const OrderButton = () => {
    const navigate = useNavigate();

    const handleOrderButtonClick = () => {
      navigate("/orders");
    };

    return (
      <button
        onClick={handleOrderButtonClick}
        className="flex px-4 py-2 text-gray-800 hover:bg-gray-200 w-full pointer-events-auto"
      >
        {" "}
        <MdOutlineShoppingCartCheckout className="my-auto text-sm mr-2" />
        Order
      </button>
    );
  };

  const checkUser = () => {
    if (user) {
      const capitalizedFirstName =
        user.user.name.charAt(0).toUpperCase() + user.user.name.slice(1);
      return (
        <div
          className="relative text-lg my-2 lg:text-sm lg:mx-6 lg:my-auto
  font-bold tracking-wide transition duration-300
  px-4 py-2 rounded-md shadow-lg hover:border-primary-500 hover:bg-gray-500 hover:text-white cursor-pointer z-10"
        >
          <button onClick={handleDropdown} className="flex">
            {" "}
            <FaUser className="my-auto text-sm mr-2 " />
            {capitalizedFirstName}
          </button>
          {isDropdown && (
            <div
              ref={dropdownRef}
              className="absolute top-full right-0 mt-2 bg-white border rounded-md shadow-md "
            >
              <OrderButton />
              <button
                onClick={logout}
                className="flex px-4 py-2 text-gray-800 hover:bg-gray-200 w-full pointer-events-auto"
              >
                {" "}
                <MdLogout className="my-auto text-sm mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <>
          <NavLink href="/login">Login</NavLink>
          <SignupButton
            css={roundedHeaderButton && tw`rounded-full`}
            href="/Signup"
          >
            Sign Up
          </SignupButton>
        </>
      );
    }
  };

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink tw="lg:ml-12!">
        <Link to="/cart">
          <CartContainer>
            <CartIcon />
            <TotalItems>{totalItems}</TotalItems>
          </CartContainer>
        </Link>
      </NavLink>
      <NavLink>
        <Link to="/products">Produk</Link>
      </NavLink>

      <NavLink>
        <Link to="/about-us">Tentang Kami</Link>
      </NavLink>
      <NavLink>
        <Link to="/contact-us">Kontak</Link>
      </NavLink>
      {/* <NavLink href="/#" tw="lg:ml-12!">
        Login
      </NavLink> */}
      {checkUser()}
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
      Best Trending and Cheapest Outfit!
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
        className="z-20"
      >
        {logoLink}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
