import React from "react";
import { siteConfig } from "../data/content";
import { ArrowRight, Code2, Sparkles, CheckCircle, Laptop, Terminal, ExternalLink } from "lucide-react";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative ambient background blur lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-300/30 to-violet-300/20 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-200/30 blur-2xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            {hero.badge}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            {hero.headline.prefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600">
              {hero.headline.highlight}
            </span>{" "}
            {hero.headline.suffix}
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
            {hero.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Primary Solid Button */}
            <a
              href={hero.ctaPrimary.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-lg shadow-indigo-500/25 transition-all duration-200"
            >
              <span>{hero.ctaPrimary.label}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary Outline Button */}
            <a
              href={hero.ctaSecondary.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-slate-700 hover:text-indigo-600 bg-white hover:bg-slate-50 border border-slate-300/80 hover:border-indigo-300 shadow-sm transition-all duration-200"
            >
              <Code2 className="w-4 h-4 text-slate-500" />
              <span>{hero.ctaSecondary.label}</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-2xl">
            {hero.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Mockup Area: Modern Window Frame */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-slate-200/60 via-slate-100/40 to-slate-200/40 border border-slate-200/90 shadow-2xl backdrop-blur-sm">
            <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>https://preview.nexusstudio.dev</span>
                </div>
                <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>v1.0 Ready</span>
                </div>
              </div>

              {/* Window Content: Clean Interactive Hero Showcase */}
              <div className="relative p-6 sm:p-10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/60 text-white min-h-[320px] sm:min-h-[420px] flex flex-col justify-between overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
                      <span>⚡ Ultra Responsive & Modern UI</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                      Arsitektur Komponen Modular Siap Pakai
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      Dibangun dengan standar pengembangan frontend terkini. Cukup sesuaikan data di satu file config dan template Anda siap meluncur ke produksi.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["React 19", "Vite", "Tailwind CSS", "Lucide Icons", "Mobile First"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-200 border border-slate-700/80 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Visual Card inside Mockup */}
                  <div className="lg:col-span-5 relative">
                    <div className="rounded-xl bg-slate-800/90 border border-slate-700/80 p-5 shadow-xl backdrop-blur-md space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                        <div className="flex items-center gap-2">
                          <Laptop className="w-4 h-4 text-indigo-400" />
                          <span className="text-xs font-semibold text-slate-200">Kesiapan Template</span>
                        </div>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          100% Tested
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">Mobile Responsive</span>
                          <span className="text-emerald-400 font-mono font-medium">PASS</span>
                        </div>
                        <div className="w-full bg-slate-700/60 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-indigo-500 h-full rounded-full w-full" />
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">Pemisahan Data & UI</span>
                          <span className="text-indigo-400 font-mono font-medium">Modular</span>
                        </div>
                        <div className="w-full bg-slate-700/60 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full rounded-full w-full" />
                        </div>
                      </div>

                      <div className="pt-2 text-[11px] text-slate-400 italic">
                        Tip: Buka file <code className="text-indigo-300">src/data/content.js</code> untuk mengubah teks hero ini secara instan.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
