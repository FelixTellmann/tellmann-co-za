import React, { useState } from 'react';
import { Hero, LogoBanner, Portfolio } from 'components/sections';

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