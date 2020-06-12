import React, { useState } from 'react';
import { Hero, Portfolio, LogoBanner } from './index.sections';
import { Section } from './sections/Section';

function Index(ctx) {

  return (
    <>
      {/*<Section>
        <Section.Header fullscreen={true} position='sticky' className="highlight"/>
      </Section>*/}
      <Hero />
      <LogoBanner />
      <Portfolio />
      {/*<Hero />*/}
    </>

  );
}

export default Index;