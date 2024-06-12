import React from "react"
import Base from "../Components/Base/Base"
import About from "../Components/About"
import Counter from "../Components/Counter"

import { motion } from "framer-motion"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../Utils/motion"
import Objective from "../Components/Objective/Objective"
import Theme from "../Components/Themes/Theme"
import Contact from "./Contact"

const Home = () => {

    const objectives = [
        {
            "title": "Share knowledge, research findings, and innovative ideas, products, and services."
        },
        {
            "title": "Foster collaboration, partnerships, joint projects, and business opportunities."
        },
        {
            "title": "Discuss and address specific challenges or issues within the cyber security industry."
        },
        {
            "title": "Engage with regulatory bodies and policymakers to address regulatory challenges."
        },
        {
            "title": "Share case studies and success stories highlighting effective strategies and lessons learned."
        },
        {
            "title": "Explore the impact of emerging technologies on cyber security."
        },
        {
            "title": "Provide opportunities for skills development and training."
        },
        {
            "title": "Raise awareness about the importance of cyber security."
        },
        {
            "title": "Encourage sharing of threat intelligence and information on latest cyber threats."
        },
        {
            "title": "Promote research and development in cyber security."
        },
        {
            "title": "Discuss and promote industry standards, frameworks, and best practices."
        },
        {
            "title": "Provide insights into effective incident response and crisis management strategies."
        }
    ]

    const themes = [
        {
            "title": "Biometrics and Cryptography",
            "description": "",
            "themeImage": "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress"
        },
        {
            "title": "Cloud Computing Security",
            "description": "",
            "themeImage": "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg"
        },
        {
            "title": "Computer Forensics",
            "description": "",
            "themeImage": "https://img.freepik.com/free-photo/back-view-dangerous-team-hackers-working-new-malware_482257-22976.jpg"
        },
        {
            "title": "Cyber Physical Systems Security",
            "description": "",
            "themeImage": "https://img.freepik.com/free-photo/medium-shot-hacker-holding-laptop_23-2149101212.jpg"
        },
        {
            "title": "Database and System Security",
            "description": "",
            "themeImage": "https://img.freepik.com/free-vector/fbi-agent-online-service-platform-police-officer-inspector-investigating-crime-protection-from-cyberattack-terrorist-online-data-base-isolated-flat-vector-illustration_613284-2681.jpg"
        },
        {
            "title": "Information Hiding and Watermarking",
            "description": "",
            "themeImage": "https://img.freepik.com/free-vector/people-with-selected-folder-icon_53876-28554.jpg"
        },
        {
            "title": "Internet of Things Security",
            "description": "",
            "themeImage": "https://img.freepik.com/free-vector/technology-background_23-2148141161.jpg"
        },
        {
            "title": "Key Management and Secure Communication",
            "description": "",
            "themeImage": "https://img.freepik.com/free-vector/flat-safer-internet-day-illustration_23-2151163146.jpg"
        },
        {
            "title": "Malware Analysis and Detection",
            "description": "",
            "themeImage": "https://img.freepik.com/free-vector/bug-fixing-concept-illustration_114360-2952.jpg"
        },
        {
            "title": "Network Security and Privacy",
            "description": "",
            "themeImage": "https://img.freepik.com/free-vector/cyber-security-concept_53876-93472.jpg"
        },
        {
            "title": "Security Protocols",
            "description": "",
            "themeImage": "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595829.jpg"
        },
        {
            "title": "Security Testing and Auditing",
            "description": "",
            "themeImage": "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595831.jpg"
        },
        {
            "title": "Software Security",
            "description": "",
            "themeImage": "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress"
        },
        {
            "title": "Web Security",
            "description": "",
            "themeImage": "https://img.freepik.com/free-vector/secure-sockets-layer-illustration_23-2149238126.jpg"
        },
        {
            "title": "Internet Of Things ( IoT )",
            "description": "",
            "themeImage": "https://img.freepik.com/free-vector/internet-things-concept-illustration_114360-24427.jpg"
        }
    ]
    const features = [
        {
            "title": "Comprehensive Coverage"
        },
        {
            "title": "Expert Insights"
        },
        {
            "title": "Practical Solutions"
        },
        {
            "title": "Interdisciplinary Approach"
        },
        {
            "title": "Focus on Emerging Trends"
        },
        {
            "title": "Interactive Sessions"
        },
        {
            "title": "Continuous Improvement"
        }
    ]
    return (
        <Base>
            <div className="bg-[#ffffff] rounded-tr-xl rounded-tl-xl w-screen h-[120px] -mt-[100px] z-50 mx-auto shadow-lg">
                <Counter />
            </div>
            <About />
            <hr className="m-4"/>
            <div className="bg-white h-auto py-4 mt-10" id="schedule">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pb-20">
                    <div className="text-center">
                        <motion.h2
                            initial="initial"
                            animate="animate"
                            variants={textVariant}
                            className="text-4xl font-bold tracking-tight text-gray-900"
                        >
                            Schedule{" "}
                        </motion.h2>
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={textVariant}
                            className="mt-8 text-xl text-gray-500 lg:mx-auto "
                        >
                            <div className="container mx-auto my-8">
                                <h2 className="text-3xl font-bold mb-8 text-center">Review Time Plan: Dec 2024 – Jan 2025</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-6 bg-white rounded-lg shadow-lg">
                                        <h3 className="text-xl font-bold mb-4 text-center">Submission Deadline</h3>
                                        {/* <div className="flex items-center justify-center mb-4">
                                            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                                <span className="text-lg">Jan</span>
                                            </div>
                                            <div className="mx-4 border-t border-gray-300 flex-grow"></div>
                                            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                                <span className="text-lg">2025</span>
                                            </div>
                                        </div> */}
                                        <p className="text-gray-600 text-center">January 2025</p>
                                    </div>
                                    <div className="p-6 bg-white rounded-lg shadow-lg">
                                        <h3 className="text-xl font-bold mb-4 text-center">Submission Deadline for Revised Papers</h3>
                                        {/* <div className="flex items-center justify-center mb-4">
                                            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                                <span className="text-lg">End</span>
                                            </div>
                                            <div className="mx-4 border-t border-gray-300 flex-grow"></div>
                                            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                                <span className="text-lg">Jan</span>
                                            </div>
                                        </div> */}
                                        <p className="text-gray-600 text-center">31 January 2025</p>
                                    </div>
                                    <div className="p-6 bg-white rounded-lg shadow-lg">
                                        <h3 className="text-xl font-bold mb-4 text-center">Notification of Acceptance</h3>
                                        {/* <div className="flex items-center justify-center mb-4">
                                            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                                <span className="text-lg">First</span>
                                            </div>
                                            <div className="mx-4 border-t border-gray-300 flex-grow"></div>
                                            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                                <span className="text-lg">Feb</span>
                                            </div>
                                        </div> */}
                                        <p className="text-gray-600 text-center">1st Week Of February 2025</p>
                                    </div>
                                </div>
                            </div>
                        </motion.p>
                    </div>
                </div>
            </div>
            <hr className="m-4"/>
            <div className="bg-white h-auto py-4 mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pb-20">
                    <div className="text-left">
                        <motion.h2
                            initial="initial"
                            animate="animate"
                            variants={textVariant}
                            className="text-4xl font-bold tracking-tight text-gray-900"
                        >
                            Why Join Us ?{" "}
                        </motion.h2>
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={textVariant}
                            className="mt-8 text-xl text-gray-500 lg:mx-auto "
                        >
                            {features.map((item) => {
                                return (
                                    <Objective img={true} title={item.title} />
                                )
                            })}
                        </motion.p>
                    </div>
                </div>
            </div>
            <hr className="m-4"/>
            <div className="bg-white h-auto py-4 mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pb-20">
                    <div className="text-left">
                        <motion.h2
                            initial="initial"
                            animate="animate"
                            variants={textVariant}
                            className="text-4xl font-bold tracking-tight text-gray-900"
                        >
                            Objectives{" "}
                        </motion.h2>
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={textVariant}
                            className="mt-8 text-xl text-gray-500 lg:mx-auto "
                        >
                            {objectives.map((item) => {
                                return (
                                    <Objective img={true} title={item.title} />
                                )
                            })}
                        </motion.p>
                    </div>
                </div>
            </div>
            <hr className="m-4"/>
            <div className="bg-white h-auto py-4 mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pb-20">
                    <div className="text-center">
                        <motion.h2
                            initial="initial"
                            animate="animate"
                            variants={textVariant}
                            className="text-4xl font-bold tracking-tight text-gray-900"
                        >
                            Themes{" "}
                        </motion.h2>
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={textVariant}
                            className="mt-8 text-xl text-gray-500 lg:mx-auto flex flex-wrap gap-6"
                        >
                            {themes.map((item) => {
                                return (
                                    <Theme title={item.title} description={item.description} image={item.themeImage} />
                                )
                            })}
                        </motion.p>
                    </div>
                </div>
            </div>
            <hr className="m-4"/>
        </Base>
    )
}

export default Home