import React from 'react'
import { motion } from "framer-motion";
import {styles} from "../styles"
import { fadeIn, textVariant } from "../utils/motion";
const About = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pb-20">
        <div className="text-center">
          <motion.h2
            initial="initial"
            animate="animate"
            variants={textVariant}
            className="text-3xl font-bold tracking-tight text-gray-900"
          >
            International Conference on Advancement in Cyber Security and
            Digital Forensics{" "}
          </motion.h2>
          <motion.p
            initial="initial"
            animate="animate"
            variants={textVariant}
            className="mt-4  text-xl text-gray-500 lg:mx-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            elit, tristique placerat feugiat ac, facilisis vitae arcu. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit,
            tristique placerat feugiat ac, facilisis vitae arcu. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed neque elit,
            tristique placerat feugiat ac, facilisis vitae arcu. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed neque elit,
            tristique placerat feugiat ac, facilisis vitae arcu.
            {/* dummy image placeholder */}
            <img
              className="mt-10 items-center justify-center w-full h-96 object-cover rounded-lg shadow-lg sm:mt-10"
              src="https://via.placeholder.com/800x400"
              alt="about"
            />
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default About