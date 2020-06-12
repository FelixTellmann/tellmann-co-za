import React, { FC, Children, isValidElement } from "react";
import { Header, HeaderProps } from './Header';
import { Footer, FooterProps } from './Footer';
import { Hero, HeroProps } from './Hero';
import { LogoBanner } from './LogoBanner';
import { Portfolio } from './Portfolio';
import './Section.scss';

type SectionProps = {
  background?: string
  fullscreen?: boolean
  position?: 'sticky' | 'relative' | 'fixed' | 'absolute'
  border?: boolean
  className?: string
  id?: string
}
export type SP = SectionProps;

export const Section: FC<SectionProps> & { Header, Footer, Hero, LogoBanner, Portfolio } = ({ children }) => {
  return (
    <>
      {
        Children.map(children, (child: FC & { props: SP }) => {
          if (!isValidElement(child)) return;
          const { props, props: { id, className = "", position, fullscreen, border } } = child;

          return (
            <section id={id}
                     className={`section 
                     ${className}
                     ${position ? ' section--' + position : ''}
                     ${border ? `section--border` : ''}`}>
              {
                fullscreen
                  ? child
                  : <div className="section__wrapper">{child}</div>
              }
            </section>
          );
        })
      }
    </>

  );
};

Section.Header = Header;
Section.Footer = Footer;
Section.Hero = Hero;
Section.LogoBanner = LogoBanner;
Section.Portfolio = Portfolio;