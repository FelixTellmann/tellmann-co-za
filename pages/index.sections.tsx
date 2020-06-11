import React, { FC, useEffect, useRef } from "react";
import './index.sections.scss';
import { Typed } from 'components';

export const Hero: FC = () => {
    const content = [`We build eCommerce <br /> Websites.`];
    return (
      <section className="hero section section--hero">
          <div className="section__wrapper">
              <div className="hero__content">
                  <h1 className="hero">
                      Welcome to <span className="highlight">Tellmann</span>, <br />
                      <Typed content={content}
                             typeSpeed={40}
                             backSpeed={17}
                             backDelay={1850}
                             startDelay={1000}
                             loop={false}
                             cursorChar={'|'} />
                  </h1>
              </div>
          </div>
      </section>
    );
};

export const Portfolio: FC = () => {
    return (
      <section className="section section--portfolio">
          <div className="section__wrapper portfolio">
              <h2>Need a website? Look at what we've done!</h2>

              <ul className="portfolio__cards">
                  <li>
                      <div className="portfolio__item">
                          <img src="/portfolio/KidsLiving.jpg" alt="KidsLiving Website" className="portfolio__image" />
                      </div>
                      <a href="https://www.kidsliving.co.za" className="portfolio__link">
                          <h3>Kids Living</h3>
                      </a>
                  </li>
                  <li>
                      <div className="portfolio__item">
                          <img src="/portfolio/Matsidiso.jpg" alt="Matsidiso Website" className="portfolio__image" />
                      </div>
                      <a href="https://za.matsidiso.com/" className="portfolio__link">
                          <h3>Matsidiso</h3>
                      </a>
                  </li>
                  <li>
                      <div className="portfolio__item">
                          <img src="/portfolio/bushscarf.jpg" alt="BushScarf Website" className="portfolio__image" />
                      </div>
                      <a href="https://originalthings-za.myshopify.com/" className="portfolio__link">
                          <h3>Bush Scarf</h3>
                      </a>
                  </li>
                  <li>
                      <div className="portfolio__item">
                          <img src="/portfolio/Pichulik.jpg" alt="Pichulik Website" className="portfolio__image" />
                      </div>
                      <a href="https://www.Pichulik.com" className="portfolio__link">
                          <h3>Pichulik</h3>
                      </a>
                  </li>
                  <li>
                      <div className="portfolio__item">
                          <img src="/portfolio/TurningPoint.jpg"
                               alt="Turning Point Website"
                               className="portfolio__image" />
                      </div>
                      <a href="https://www.turningpoint.co.za" className="portfolio__link">
                          <h3>Turning Point</h3>
                      </a>
                  </li>
                  <li>
                      <div className="portfolio__item">
                          <img src="/portfolio/Felix.jpg" alt="Personal Website" className="portfolio__image" />
                      </div>
                      <a href="https://www.tellmann.co.za" className="portfolio__link">
                          <h3>Blog Site</h3>
                      </a>
                  </li>
              </ul>
          </div>
      </section>
    );
};

export const LogoBanner: FC = () => {
    return (
      <section className="section section--logo-banner">
          <div className="section__wrapper">
              <div className="logo-banner">
                  <div className="logo-banner__item">
                      <img src="/nextjs-3.svg" alt="nextjs-logo" />
                  </div>
                  <div className="logo-banner__item">
                      <img src="/nodejs.svg" alt="nextjs-logo" />
                  </div>
                  <div className="logo-banner__item logo-banner__item--shopify">
                      <img src="/shopify-2.svg" alt="nextjs-logo" />
                  </div>
                  <div className="logo-banner__item">
                      <img src="/kindpng_1280187.png" alt="nextjs-logo" />
                  </div>
                  <div className="logo-banner__item">
                      <img src="/Amazon_Web_Services-Logo.wine.svg" alt="nextjs-logo" />
                  </div>
              </div>
          </div>
      </section>
    );
};