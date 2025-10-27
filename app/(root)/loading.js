"use client";

import { motion } from "motion/react";
export default function Loading() {
  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      animate="pulse"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="container w-full h-screen flex justify-center items-center"
    >
      <motion.div className="dot" variants={dotVariants} />
      <motion.div className="dot" variants={dotVariants} />
      <motion.div className="dot" variants={dotVariants} />
      <StyleSheet />
    </motion.div>
  );
}

function StyleSheet() {
  return (
    <style>
      {`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          width: 100vw;
          height: 100vh;
        }

        .dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #ff0088;
          will-change: transform;
        }
      `}
    </style>
  );
}
