import React, { useState } from 'react';
import { Hero, Portfolio, LogoBanner } from './index.sections';
import { Section } from './sections/Section';

function Index(ctx) {

  return (
    <>
      <Section>
        <Section.Hero
          className="hero"
          content={[`We build eCommerce <br /> Websites.`]}
          title={`Welcome to <span class="highlight">Tellmann</span>, <br />`}
        />
        <Section.LogoBanner border logos={[{ src: '/logo-banner.png', alt: 'Logo Banner' }]} />
      </Section>
      {/*<Hero />*/}
      {/*<LogoBanner />*/}
      <Portfolio />
      {/*<Hero />*/}
    </>

  );
}

export default Index;