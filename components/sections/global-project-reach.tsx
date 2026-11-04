'use client';

import { memo } from 'react';

import { motion, useReducedMotion } from '@/lib/framer-motion';

const markets = [
  {
    delay: 0,
    label: 'USA',
    labelX: 34,
    labelY: 78,
    path: 'M 88 102 C 190 112, 300 156, 425 235',
    x: 88,
    y: 102,
  },
  {
    delay: 0.12,
    label: 'UK',
    labelX: 216,
    labelY: 31,
    path: 'M 216 58 C 285 78, 340 142, 425 235',
    x: 216,
    y: 58,
  },
  {
    delay: 0.24,
    label: 'UAE',
    labelX: 254,
    labelY: 148,
    path: 'M 268 174 C 324 171, 374 198, 425 235',
    x: 268,
    y: 174,
  },
  {
    delay: 0.36,
    label: 'SINGAPORE',
    labelX: 596,
    labelY: 138,
    path: 'M 594 164 C 538 176, 486 204, 425 235',
    x: 594,
    y: 164,
  },
  {
    delay: 0.48,
    label: 'AUSTRALIA',
    labelX: 647,
    labelY: 365,
    path: 'M 646 330 C 566 321, 500 278, 425 235',
    x: 646,
    y: 330,
  },
] as const;

export const GlobalProjectReach = memo(function GlobalProjectReach() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="glass-panel relative mt-12 overflow-hidden p-5 sm:p-8 lg:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 size-72 -translate-y-1/2 rounded-full bg-brand-blue/15 blur-3xl"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
        <div className="max-w-md">
          <p className="text-sm font-semibold text-brand-cyan">
            Global project delivery
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            International reach. One focused engineering team.
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Projects connect client teams across five international markets with
            our delivery hub in Sri Lanka.
          </p>

          <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <dt className="text-xs text-slate-500">Markets</dt>
              <dd className="mt-1 text-xl font-bold text-white">5</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Continents</dt>
              <dd className="mt-1 text-xl font-bold text-white">4</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Delivery hub</dt>
              <dd className="mt-1 text-xl font-bold text-white">1</dd>
            </div>
          </dl>
        </div>

        <div className="relative min-h-[260px] overflow-hidden rounded-xl border border-white/10 bg-navy-950/55 sm:min-h-[340px]">
          <p className="absolute left-4 top-4 z-10 text-[0.65rem] font-semibold tracking-[0.18em] text-slate-500 sm:left-5 sm:top-5">
            PROJECT NETWORK
          </p>

          <svg
            aria-hidden="true"
            className="absolute inset-0 size-full"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            viewBox="0 0 760 420"
          >
            <defs>
              <radialGradient id="reach-orb" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                <stop offset="70%" stopColor="#22D3EE" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="reach-line" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.9" />
              </linearGradient>
              <filter
                id="reach-glow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur result="blur" stdDeviation="6" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle cx="502" cy="220" fill="url(#reach-orb)" r="180" />
            <g fill="none" opacity="0.22" stroke="#94A3B8" strokeWidth="1">
              <circle cx="502" cy="220" r="145" />
              <ellipse cx="502" cy="220" rx="145" ry="58" />
              <ellipse cx="502" cy="220" rx="58" ry="145" />
              <path d="M 367 168 C 430 208, 574 236, 637 272" />
              <path d="M 376 286 C 452 244, 558 180, 628 150" />
            </g>

            {markets.map((market) => (
              <g key={market.label}>
                <motion.path
                  d={market.path}
                  fill="none"
                  initial={{
                    opacity: 0.12,
                    pathLength: shouldReduceMotion ? 1 : 0,
                  }}
                  stroke="url(#reach-line)"
                  strokeLinecap="round"
                  strokeWidth="2"
                  transition={{
                    delay: market.delay,
                    duration: shouldReduceMotion ? 0 : 1.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ amount: 0.45, once: true }}
                  whileInView={{ opacity: 0.72, pathLength: 1 }}
                />

                {!shouldReduceMotion ? (
                  <motion.path
                    animate={{ strokeDashoffset: [0, -75] }}
                    d={market.path}
                    fill="none"
                    stroke="#67E8F9"
                    strokeDasharray="7 18"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    transition={{
                      delay: 1.1 + market.delay,
                      duration: 2.4,
                      ease: 'linear',
                      repeat: Infinity,
                    }}
                  />
                ) : null}

                <motion.circle
                  cx={market.x}
                  cy={market.y}
                  fill="#3B82F6"
                  initial={{ opacity: 0, r: shouldReduceMotion ? 6 : 2 }}
                  transition={{ delay: market.delay + 0.15, duration: 0.5 }}
                  viewport={{ amount: 0.45, once: true }}
                  whileInView={{ opacity: 1, r: 6 }}
                />
                <circle
                  cx={market.x}
                  cy={market.y}
                  fill="#3B82F6"
                  opacity="0.18"
                  r="13"
                />
                <text
                  fill="#CBD5E1"
                  fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                  fontSize="14"
                  fontWeight="700"
                  letterSpacing="1.5"
                  textAnchor="middle"
                  x={market.labelX}
                  y={market.labelY}
                >
                  {market.label}
                </text>
              </g>
            ))}

            {!shouldReduceMotion ? (
              <motion.circle
                animate={{ opacity: [0.5, 0], r: [17, 35] }}
                cx="425"
                cy="235"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="2"
                transition={{
                  duration: 2.2,
                  ease: 'easeOut',
                  repeat: Infinity,
                }}
              />
            ) : null}
            <circle
              cx="425"
              cy="235"
              fill="#22D3EE"
              filter="url(#reach-glow)"
              r="11"
            />
            <circle cx="425" cy="235" fill="#CFFAFE" r="3" />
            <text
              fill="#FFFFFF"
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              fontSize="14"
              fontWeight="700"
              letterSpacing="1.6"
              textAnchor="middle"
              x="425"
              y="278"
            >
              SRI LANKA
            </text>
            <text
              fill="#64748B"
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              fontSize="10"
              fontWeight="600"
              letterSpacing="1.2"
              textAnchor="middle"
              x="425"
              y="296"
            >
              DELIVERY HUB
            </text>
          </svg>

          <span className="sr-only">
            Project routes connect the United States, United Kingdom, United
            Arab Emirates, Singapore, and Australia to the Arizonix delivery hub
            in Sri Lanka.
          </span>
        </div>
      </div>
    </div>
  );
});
