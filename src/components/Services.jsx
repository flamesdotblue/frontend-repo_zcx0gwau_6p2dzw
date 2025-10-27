import React from 'react';
import { Palette, Globe, Bot, Filter, Film, CalendarCheck, Dumbbell, Settings } from 'lucide-react';

const services = [
  {
    title: 'Branding Identity',
    icon: Palette,
    desc: 'Distinctive brand systems, logo marks, and style guides that stand the test of time.',
  },
  {
    title: 'Premium Web Design',
    icon: Globe,
    desc: 'High‑performance websites with stunning aesthetics and conversion‑led UX.',
  },
  {
    title: 'AI Content Creation',
    icon: Bot,
    desc: 'Smart, on‑brand content pipelines powered by AI for speed and scale.',
  },
  {
    title: 'Funnel Design',
    icon: Filter,
    desc: 'Full‑funnel strategy and assets to convert attention into revenue.',
  },
  {
    title: 'Video Editing',
    icon: Film,
    desc: 'Cinematic edits, motion graphics, and short‑form content ready for any platform.',
  },
  {
    title: 'Table Booking Systems',
    icon: CalendarCheck,
    desc: 'Restaurant and nightclub booking platforms built for reliability and ease.',
  },
  {
    title: 'Gym Management Software',
    icon: Dumbbell,
    desc: 'Memberships, classes, check‑ins, payments, and analytics in one seamless suite.',
  },
  {
    title: 'Custom Systems on Request',
    icon: Settings,
    desc: 'Tailored business software and integrations to match unique workflows.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Gold‑standard services</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              From brand foundations to intelligent product experiences — we design, build, and optimize for impact.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-white"
          >
            Start a project
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 hover:border-yellow-300/40 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 h-10 w-10 shrink-0 grid place-content-center rounded-lg bg-gradient-to-br from-yellow-300 to-amber-500 text-black shadow ring-1 ring-yellow-200/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-yellow-300/0 via-yellow-300/0 to-yellow-300/10" />
              </div>
            );
          })}
        </div>

        <div id="contact" className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 text-center">
          <h3 className="text-2xl font-semibold">Let’s build something remarkable</h3>
          <p className="mt-2 text-white/70">Tell us about your goals — we’ll reply within 24 hours.</p>
          <a
            href="mailto:hello@yaz.agency"
            className="mt-5 inline-flex items-center rounded-md px-5 py-3 text-sm font-medium bg-gradient-to-b from-yellow-300 to-amber-500 text-black hover:from-yellow-200 hover:to-amber-400 transition shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset]"
          >
            hello@yaz.agency
          </a>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 -z-0 bottom-0 h-40 bg-gradient-to-t from-yellow-400/10 to-transparent" />
    </section>
  );
};

export default Services;
