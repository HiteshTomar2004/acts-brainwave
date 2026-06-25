import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import PersonCard from "./components/PersonCard";
import { people } from "./data";

const positions = [
  {
    x: -360,
    y: 160,
    rotate: -20,
    scale: 0.8,
    opacity: 0.9,
    zIndex: 1,
  },

  {
    x: -180,
    y: 90,
    rotate: -10,
    scale: 0.92,
    opacity: 1,
    zIndex: 2,
  },

  {
    x: 0,
    y: 40,
    rotate: 0,
    scale: 1.1,
    opacity: 1,
    zIndex: 5,
  },

  {
    x: 180,
    y: 90,
    rotate: 10,
    scale: 0.92,
    opacity: 1,
    zIndex: 2,
  },

  {
    x: 360,
    y: 160,
    rotate: 20,
    scale: 0.8,
    opacity: 0.9,
    zIndex: 1,
  },
];

export default function MentorCarousel() {

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % people.length);
    }, 2500);

    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="
        relative
        h-180
        w-full
        max-w-7xl
        mx-auto
        overflow-visible
      "
    >
      {people.map((person, index) => {

        const relative =
          (index - active + people.length) % people.length;

        // Only show the first 5 cards
        if (relative > 4) return null;

        const position = positions[relative];

        return (
          <motion.div
            key={person.id}
            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2
            "
            animate={{
              x: position.x,
              y: position.y,
              rotate: position.rotate,
              scale: position.scale,
              opacity: position.opacity,
            }}
            style={{
              zIndex: position.zIndex,
            }}
            transition={{
              duration: 0.9,
              type: "spring",
              stiffness: 70,
              damping: 18,
            }}
          >
            <PersonCard person={person} />
          </motion.div>
        );

      })}
    </div>
  );
}