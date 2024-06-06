import React from 'react'
import { motion } from "framer-motion"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../Utils/motion"

const About = () => {
  return (
    <div className="bg-white h-auto py-4 mt-10">
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
            The International Conference on Advances in Cybersecurity and Digital Forensics is a crucial event that brings together cybersecurity experts, digital forensics researchers, and information security professionals. This conference is dedicated to tackling the ever-changing challenges in cybersecurity and digital forensics, underscoring the need for advanced solutions in today's rapidly evolving technological landscape. Attendees will participate in discussions, share insights, and collaborate on the latest advancements in cybersecurity strategies, threat mitigation, and digital forensic techniques. The conference serves as a vibrant platform for exploring emerging trends, fostering interdisciplinary dialogue, and shaping the future of cybersecurity and digital forensics amidst evolving threats and digital crimes.
            {/* dummy image placeholder */}
            {/* <img
              className="mt-10 items-center justify-center w-full h-96 object-cover rounded-lg shadow-lg sm:mt-10"
              src="https://via.placeholder.com/800x400"
              alt="about"
            /> */}
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default About