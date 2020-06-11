import React, { FC } from "react";
import './LogoBanner.scss';

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