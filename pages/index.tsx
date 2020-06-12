import React, { useState } from 'react';
import { Section } from './sections/Section';

function Index(ctx) {

  const heroData = {
    content: [`We build eCommerce <br /> Websites.`],
    heroTitle: `Welcome to <span class="highlight">Tellmann</span>, <br />`,
  };

  const portfolioData = [
    {
      title: 'Kids Living',
      url: 'https://www.kidsliving.co.za',
      image: {
        src: '/portfolio/KidsLiving.jpg',
        alt: '',
      },
    },
    {
      title: 'Matsidiso',
      url: 'https://za.matsidiso.com',
      image: {
        src: '/portfolio/Matsidiso.jpg',
        alt: '',
      },
    },
    {
      title: 'Bush Scarf',
      url:'https://originalthings-za.myshopify.com/',
      image: {
        src: '/portfolio/bushscarf.jpg',
        alt: '',
      },
    },
    {
      title: 'Pichulik',
      url:'https://www.Pichulik.com',
      image: {
        src: '/portfolio/Pichulik.jpg',
        alt: '',
      },
    },
    {
      title: 'Turning Point',
      url: 'https://www.turningpoint.co.za',
      image: {
        src: '/portfolio/TurningPoint.jpg',
        alt: '',
      },
    },
    {
      title: 'Blog Page',
      url: 'https://www.tellmann.co.za',
      image: {
        src: '/portfolio/Felix.jpg',
        alt: '',
      },
    },
  ];

  return (
    <>
      <Section>
        <Section.Hero className="hero" {...heroData} />
        <Section.LogoBanner border logos={[{ src: '/logo-banner.png', alt: 'Logo Banner' }]} />
        <Section.Portfolio portfolioItems={portfolioData} title={`Need a Website? Look at what we've done!`}/>
      </Section>
    </>

  );
}

export default Index;