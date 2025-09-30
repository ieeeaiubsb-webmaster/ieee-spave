"use client";

import { motion } from "framer-motion";

export function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative"
    >
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 41.14 40.53"
          className="w-24 h-24 md:w-32 md:h-32"
        >
          <defs>
            <style>
              {`
                .cls-1 {
                  fill: url(#radial-gradient);
                  stroke: #fff;
                  stroke-miterlimit: 10;
                  stroke-width: .25px;
                }
              `}
            </style>
            <radialGradient
              id="radial-gradient"
              cx="11.86"
              cy="-25.81"
              fx="11.86"
              fy="-25.81"
              r="82.53"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#c400e2" />
              <stop offset=".09" stopColor="#ac01cc" />
              <stop offset=".33" stopColor="#700496" />
              <stop offset=".55" stopColor="#40076b" />
              <stop offset=".74" stopColor="#1d094c" />
              <stop offset=".9" stopColor="#080a39" />
              <stop offset="1" stopColor="#010b33" />
            </radialGradient>
          </defs>
          <g id="Layer_1" data-name="Layer 1">
            <motion.path
              className="cls-1"
              d="M40.91,11.4h-7.63c-.21,0-.43,0-.64-.01-1.19-.04-1.99.36-2.58,1.3-.79,1.25-1.61,2.45-2.48,3.72-.13.19-.26.38-.39.57l-.36-.52c-2.61-3.85-5.32-7.83-7.95-11.75-.01-.05,0-.18.02-.28.02-.05.03-.09.04-.14.01-.03.02-.06.03-.1,0-.03.01-.05.02-.08.07-.26.11-.53.11-.81,0-1.76-1.42-3.18-3.18-3.18s-3.18,1.42-3.18,3.18,1.42,3.18,3.18,3.18c.07,0,.13,0,.19,0,.02.02.04.03.04.04,2.52,3.68,5.06,7.44,7.52,11.07l2.27,3.35c.12.18.25.34.38.51.06.08.13.17.21.27l.72.94,1.74-2.58c1.25-1.86,2.44-3.61,3.66-5.38.07-.11.15-.19.21-.24.69-.03,1.4-.03,2.14-.03l-8.2,12.12L14.39,8.24.24,29.16h1.49c.76,0,1.5,0,2.22,0,1.84,0,3.59,0,5.33.01.93.01,1.59-.34,2.09-1.1.85-1.3,1.72-2.57,2.63-3.92.13-.2.27-.4.41-.59l.91,1.35c2.4,3.54,4.89,7.21,7.3,10.83.03.05.05.21.04.35-.14.36-.22.74-.22,1.15,0,1.76,1.42,3.18,3.18,3.18,1.66,0,3.02-1.27,3.17-2.89.05-.38,0-.76-.1-1.12-.37-1.35-1.6-2.35-3.07-2.35-.06,0-.12,0-.18,0-.08-.08-.16-.19-.25-.33-2.6-3.87-5.26-7.8-7.83-11.6l-1.27-1.87c-.21-.31-.42-.61-.65-.92-.11-.15-.22-.31-.34-.48l-.69-.97-.69.97c-.08.12-.16.22-.23.32-.15.21-.28.38-.4.57-.39.58-.78,1.16-1.18,1.74-.97,1.44-1.98,2.93-2.98,4.39-.07.11-.13.18-.17.22-.82.03-1.66.03-2.54.02l8.19-12.11,12.42,18.31.32-.48h0s0,0,0,0l.25-.36h0s13.52-20.07,13.52-20.07Z"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 2, ease: "easeInOut" },
                opacity: { duration: 0.5 },
              }}
            />
          </g>
        </svg>
      </motion.div>

      {/* Animated ring around logo */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-500/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
