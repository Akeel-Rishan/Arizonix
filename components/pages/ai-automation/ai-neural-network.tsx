'use client';

import { motion, useReducedMotion } from '@/lib/framer-motion';

const nodes = [
  [5, 18],
  [15, 45],
  [9, 79],
  [24, 27],
  [29, 65],
  [38, 12],
  [43, 43],
  [48, 82],
  [57, 25],
  [62, 62],
  [70, 9],
  [73, 43],
  [79, 78],
  [88, 24],
  [92, 58],
  [97, 88],
  [20, 91],
  [52, 52],
  [83, 52],
  [34, 88],
] as const;

const lines = nodes
  .slice(0, -1)
  .map((point, index) => [point, nodes[index + 1]] as const);

export default function AINeuralNetwork() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      aria-hidden="true"
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 1 }}
    >
      <svg
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 100"
      >
        {lines.map(([[x1, y1], [x2, y2]], index) => (
          <g key={`${x1}-${y1}`}>
            <line
              className="stroke-white/10"
              strokeWidth="0.12"
              x1={x1}
              x2={x2}
              y1={y1}
              y2={y2}
            />
            {!reducedMotion ? (
              <motion.circle
                animate={{ cx: [x1, x2], cy: [y1, y2], opacity: [0, 1, 0] }}
                className="fill-brand-cyan"
                initial={{ cx: x1, cy: y1 }}
                r="0.35"
                transition={{
                  delay: index * 0.35,
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            ) : null}
          </g>
        ))}
        {nodes.map(([cx, cy], index) => (
          <motion.circle
            animate={
              reducedMotion
                ? undefined
                : { r: [0.45, 0.7, 0.45], opacity: [0.45, 0.9, 0.45] }
            }
            className="fill-brand-purple"
            cx={cx}
            cy={cy}
            key={`${cx}-${cy}`}
            r="0.5"
            transition={{
              delay: index * 0.11,
              duration: 2.4 + (index % 3),
              repeat: Infinity,
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
