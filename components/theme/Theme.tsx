import React, { FC, useEffect, useState, useRef } from "react";
import './_reset.scss';
import './_typography.scss';
import './_sections.scss';
import { Border } from "components/global/Border";
import Link from "next/link";
import Logo from "public/logo.svg";
import { IoMdMenu, IoLogoWhatsapp } from "react-icons/io";
import { useGlobalEvent, useMouseEvents } from "beautiful-react-hooks";
import { ThemeCSSProperties } from "pages/_app";

type ThemeProps = {
    loading: boolean
}

export const Theme: FC<ThemeProps> = ({ children, loading }) => {

    const theme: ThemeCSSProperties = {
        '--color-text': '#252627', // #252627
        '--color-text-rgb': '37, 38, 39',
        '--color-background': '#fafafa', //#fafafa
        '--color-background-rgb': '250, 250, 250',
        '--color-accent': '#e8472b',
        '--color-accent-rgb': '232, 71, 43',
        '--font-family': 'Inter',
        '--font-family-blog-content': "'Roboto Slab'",
        '--font-family-backup': "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', sans-serif",
        '--font-size-root': '10px',
        '--font-size-smaller': '1.2rem',
        '--font-size-p': '1.6rem',
        '--font-size-nav': '1.6rem',
        '--font-size-hero': '7.2rem', // goes with h2 as subheading
        '--font-size-h1': '6.4rem', // goes with h3 as subheading
        '--font-size-h2': '3.6rem',
        '--font-size-h3': '2.4rem',
        '--font-size-h4': '2rem',
        '--font-size-button': '1.4rem',
        '--font-weight-p': '300',
        '--font-weight-nav': '500',
        '--font-weight-headings': '700',
        '--font-weight-subheading': '300',
        '--font-weight-button': '500',
        '--font-line-height': '1.6',
        '--page-container-max-width': '120rem',
        '--section-padding': '8rem',
        '--header-height': '8rem',
        '--header-padding': '1rem',
        '--header-border-bottom': 'rgba(0, 0, 0, 0.15) 0px -1px 0px 0px inset',
        '--footer-padding': '2rem',
        '--spacing-1': '0.4rem',
        '--spacing-2': 'calc(var(--spacing-1) * 2)', // 8px
        '--spacing-3': 'calc(var(--spacing-1) * 3)', // 12px
        '--spacing-4': 'calc(var(--spacing-1) * 4)', // 16px
        '--spacing-5': 'calc(var(--spacing-1) * 5)', // 20px
        '--spacing-6': 'calc(var(--spacing-1) * 6)', // 24px
        '--spacing-7': 'calc(var(--spacing-1) * 7)', // 28px
        '--spacing-8': 'calc(var(--spacing-1) * 8)', // 32px
        '--transition': '0.1s ease-in-out', // 32px
        '--transition-2': '0.2s ease-in-out', // 32px
    };

    useEffect(() => {
        Object.entries(theme).forEach(([key, val]: [string, string]) => {
            document.documentElement.style.setProperty(key, val);
        });
    }, []);
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
                      <Link href="#blog"><a className="nav__link">Contact</a></Link>
                  </nav>
                  <div className="social-icons">
                      {/*<a href="#" className="social-icons__link"><FaFacebookF /></a>*/}
                      <a className="social-icons__link"
                         target="_blank"
                         href="//wa.me/27763934356?text=Hi%2C%20I%27m%20interested%20in%20your%20product.">
                          <IoLogoWhatsapp />
                      </a>{/*
                      <a href="#" className="social-icons__link"><FaRegLightbulb /></a>*/}
                      {/*<a href="#" className="social-icons__link social-icons__link--version">v.1.0.18</a>*/}
                  </div>
                 {/* <Button className="nav-button">Whatsapp - Contact</Button>*/}

                  <div className="nav-icon" onClick={onNavMenuClick}><IoMdMenu /></div>
              </header>
          </section>
          <main className="page">
              {children}
          </main>
      </>
    );
};