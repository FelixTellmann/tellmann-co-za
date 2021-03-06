import React, { useState } from "react";
import Link from "next/link";

import { Section } from "./sections/Section";
import { Button } from "components/Button";

function Index(ctx) {
  
  const heroData = {
    content: [`We develop your <br /> successful online store.`],
    heroTitle: `Welcome to <span class="highlight on-hover">Tellmann</span>, <br />`,
  };
  
  const portfolioData = [
    {
      title: "Kids Living",
      url: "https://www.kidsliving.co.za",
      image: {
        src: "/portfolio/KidsLiving.jpg",
        alt: "",
      },
    },
    {
      title: "Matsidiso",
      url: "https://za.matsidiso.com",
      image: {
        src: "/portfolio/Matsidiso.jpg",
        alt: "",
      },
    },
    {
      title: "Bush Scarf",
      url: "https://originalthings-za.myshopify.com/",
      image: {
        src: "/portfolio/bushscarf.jpg",
        alt: "",
      },
    },
    {
      title: "Pichulik",
      url: "https://www.Pichulik.com",
      image: {
        src: "/portfolio/Pichulik.jpg",
        alt: "",
      },
    },
    {
      title: "Turning Point",
      url: "https://www.turningpoint.co.za",
      image: {
        src: "/portfolio/TurningPoint.jpg",
        alt: "",
      },
    },
    {
      title: "Blog Page",
      url: "https://www.tellmann.co.za",
      image: {
        src: "/portfolio/Felix.jpg",
        alt: "",
      },
    },
  ];
  
  const featureBlocksData = [
    {
      title: "",
      icon: "",
      description: "We schedule a virtual meeting with you to analyse your product/offering",
    },
    {
      title: "",
      icon: "",
      description: "We assess your goals",
    },
    {
      title: "",
      icon: "",
      description: "We create a customized proposal to meet your needs. If you accept, we develop your successful store right away.",
    },
  ];
  
  return (
    <>
      <Section>
        <Section.Hero id="home" className="hero" {...heroData} />
        <Section.TextBlock border
                           content={`<h2>We are dedicated in helping <span className="highlight">you</span> develop an attractive, simple to navigate store that will have customers purchasing your goods online.</h2>`} />
        <Section.LogoBanner border logos={[{ src: "/logo-banner.png", alt: "Logo Banner" }]} />
        <Section.Portfolio id="portfolio" portfolioItems={portfolioData}
                           title={`We have helped the following companies get started.`} />
        <Section.FeatureBlocks title={`How does it work?`} listStyle={"ordered"} content={featureBlocksData} />
        <div className="cta" id="contact">
          <Link href="//wa.me/27763934356?text=Hi%2C%20I%27m%20interested%20in%20your%20product.">
            <a target="_blank"><Button>Get started Now</Button></a>
          
          </Link>
        </div>
      </Section>
    </>
  
  );
}

export default Index;