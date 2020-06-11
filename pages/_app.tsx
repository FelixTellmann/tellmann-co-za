import App, { AppProps } from 'next/app';
import React, { FC, Fragment, CSSProperties, useRef } from 'react';
import 'styles/reset.scss';
import 'styles/typography.scss';
import 'styles/sections.scss';

import { useState, useEffect } from "react";
import { Border } from "components";
import Link from "next/link";
import Logo from "public/logo.svg";
import { IoLogoWhatsapp, IoMdMenu } from "react-icons/io";
import { useGlobalEvent, useMouseEvents } from "beautiful-react-hooks";

export type Props = AppProps

export const Root: FC<Props> = ({ pageProps, Component }) => {
  const [loading, setLoading] = useState(false);
  const headerSectionRef = useRef();
  const [headerOnScroll, setHeaderOnScroll] = useState(false);
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const [isMouseOverHeader, setIsMouseOverHeader] = useState(false);
  const onNavMenuClick = () => setOpenNavMenu(true);
  const { onMouseOver, onMouseLeave } = useMouseEvents(headerSectionRef);
  const hoverTimer: { current: ReturnType<typeof setTimeout> } = useRef();

  onMouseOver(() => {
    clearTimeout(hoverTimer.current);
    setIsMouseOverHeader(true);
  });

  onMouseLeave((e) => {
    if (openNavMenu && window.scrollY > 0) {
      hoverTimer.current = setTimeout(() => {
        setOpenNavMenu(false);
        setHeaderOnScroll(true);
      }, 1000);
    }
    setIsMouseOverHeader(false);
  });

  useGlobalEvent('scroll')((event) => {
    if (window.innerWidth > 800 && window.outerWidth > 800 && !isMouseOverHeader) {
      if (openNavMenu && window.scrollY > 0) {
        setTimeout(() => {
          setOpenNavMenu(false);
          setHeaderOnScroll(true);
        }, 1000);
      } else {
        window.scrollY > 0 ? setHeaderOnScroll(true) : setHeaderOnScroll(false);
      }
    }
  });
  return (
    <>
      <Border loading={loading} width="7px" duration={3} />
      <section className="section section--header" ref={headerSectionRef}>
        <header className={`header section__wrapper ${!openNavMenu && headerOnScroll ? 'scrolled-down' : ''}`}>
          <Link href="/">
            <a className="logo">
              <Logo />
            </a>
          </Link>
          <nav className="nav">
            <Link href="#portfolio"><a className="nav__link">Portfolio</a></Link>
            <Link href="#contact"><a className="nav__link">Contact</a></Link>
          </nav>
          <div className="social-icons">
            <a className="social-icons__link"
               target="_blank"
               href="//wa.me/27763934356?text=Hi%2C%20I%27m%20interested%20in%20your%20product.">
              <IoLogoWhatsapp />
            </a>
          </div>
          <div className="nav-icon" onClick={onNavMenuClick}><IoMdMenu /></div>
        </header>
      </section>
      <main className="page">
        <Component {...pageProps} />
      </main>
    </>
  );
};

/*Layout.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};*/

export default Root;