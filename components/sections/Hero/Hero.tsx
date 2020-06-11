import React, { FC, useEffect, useRef } from "react";
import './Hero.scss';
import { Typed } from 'components/global';

export const Hero: FC = () => {

    const content = [
        `We build eCommerce <br /> Websites.`,
        /*`I help people <br>succeed online.`,
        `I teach &amp; write <br>about code.`,*/
    ];

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
                  {/*                <div className="hero__cta">
                    <Button>Get in Touch</Button>
                </div>*/}
              </div>
              {/*<a href="#" className="scroll-down">
                  <Mouse />
              </a>*/}
          </div>

      </section>
    );
};