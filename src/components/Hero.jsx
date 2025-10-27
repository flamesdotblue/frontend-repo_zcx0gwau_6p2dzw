import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center pt-10 lg:pt-20">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-white/5 px-3 py-1 text-xs text-yellow-200/90">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
              Ultra‑modern digital experiences
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Crafting bold brands and intelligent systems for ambitious teams
            </h1>
            <p className="mt-5 text-white/70 max-w-xl">
              YAZ Agency blends brand strategy, premium web design, and AI‑powered content with custom software — from booking systems to gym management — all wrapped in a black and gold aesthetic.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium bg-gradient-to-b from-yellow-300 to-amber-500 text-black hover:from-yellow-200 hover:to-amber-400 transition shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset]"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-white"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative h-[65vh] sm:h-[70vh] lg:h-[75vh]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute -top-32 right-0 h-72 w-72 bg-yellow-400/10 blur-3xl rounded-full" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 bg-amber-500/10 blur-3xl rounded-full" />
    </section>
  );
};

export default Hero;
