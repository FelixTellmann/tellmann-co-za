import React, { useState } from 'react';
import { Hero, Portfolio, LogoBanner } from './index.sections';
function Index(ctx) {

    return (
      <>
          <Hero />
          <LogoBanner />
          <Portfolio />
          {/*<Hero />*/}
      </>

    );
}

export default Index;