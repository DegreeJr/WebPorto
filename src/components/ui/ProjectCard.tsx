"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiLock } from "react-icons/fi";

interface Props {
  title: string;
  text: string;
  tags?: string[];
  accent?: string;
  link?: string;
  linkLabel?: string;
  note?: string;
}

const ProjectCard = ({
  title,
  text,
  tags = [],
  accent = "bg-blue-500",
  link,
  linkLabel = "View project",
  note,
}: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  const face =
    "absolute inset-0 rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/[0.03] p-6 flex flex-col justify-between shadow-sm";

  return (
    <div
      onClick={handleFlip}
      className="w-full max-w-[460px] h-[260px] cursor-pointer [perspective:1200px]"
    >
      <motion.div
        className="flip-card-inner relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Front */}
        <div className={`flip-card-front ${face}`}>
          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${accent}`} />
            <span className="font-mono text-xs text-stone-400 dark:text-stone-500">
              project
            </span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-stone-900 dark:text-white leading-snug">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-stone-100 dark:bg-white/5 text-stone-500 dark:text-stone-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-stone-400 dark:text-stone-500">
            Click to read more →
          </p>
        </div>

        {/* Back */}
        <div className={`flip-card-back ${face}`}>
          <div className="overflow-hidden">
            <h3 className="text-base font-semibold text-stone-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-[13px] text-stone-600 dark:text-stone-400 leading-relaxed">
              {text}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-stone-400 dark:text-stone-500">
              ← flip back
            </span>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-500 hover:text-blue-600 hover:gap-1.5 transition-all"
              >
                {linkLabel} <FiArrowUpRight size={14} />
              </a>
            ) : note ? (
              <span className="inline-flex items-center gap-1 text-xs text-stone-400 dark:text-stone-500">
                <FiLock size={12} /> {note}
              </span>
            ) : null}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
