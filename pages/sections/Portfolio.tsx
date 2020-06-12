import React, { FC } from "react";
import "./Portfolio.scss";

type PortfolioProps = {
  portfolioItems: {
    title: string
    url?: string
    image: {
      src: string
      alt?: string
    },
  }[]
}

export const Portfolio: FC<PortfolioProps> = ({ portfolioItems = [] }) => {
  
  return (
    <>
      {
        portfolioItems.length > 0
        ? <ul className="portfolio__items">
          {
            portfolioItems.map(({ title, url, image: { src, alt } }) => {
              return (
                <li key={src} className="portfolio__item">
                  <div className="portfolio__card">
                    <img src={src} alt={alt || title} className="portfolio__image" />
                  </div>
                  <a href={url} className="portfolio__link">
                    <h3>{title}</h3>
                  </a>
                </li>
              );
            })
          }
        </ul>
        : null
      }
    
    </>
  );
};

export default () => <h1>This is the 404 page</h1>