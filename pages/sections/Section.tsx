import React, { FC, Children, isValidElement } from "react";
import { Header, HeaderProps } from './Header';
import { Footer, FooterProps } from './Footer';
import { Hero } from './Hero';
import { LogoBanner } from './LogoBanner';
import { Portfolio } from './Portfolio';
import './Section.scss';


type SectionProps = {
  background?: string
  fullscreen?: boolean
  position?: 'sticky' | 'relative' | 'fixed' | 'absolute'
  className?: string
  id?: string
}
type SP = SectionProps;

export const Section: FC<SectionProps> & { Header: FC<SP & HeaderProps>, Footer: FC<SP & FooterProps>, Hero: FC, LogoBanner: FC, Portfolio: FC } = ({ children, id, className = "", fullscreen }) => {
  return (
    <>
      {
        Children.map(children, child => {
          if (!isValidElement(child)) return;
          const { props, props: { id, className = "", position, fullscreen } } = child;

          return (
            <section id={id} className={`section ${className}${position ? ' section--' + position : ''}`}>
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