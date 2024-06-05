import React from "react"
import Base from "../Components/Base/Base"
import About from "../Components/About"
import Counter from "../Components/Counter"

import { motion } from "framer-motion"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../Utils/motion"
import Objective from "../Components/Objective/Objective"
import Theme from "../Components/Themes/Theme"

const Home = () => {

    const objectives = [
        {
            title: "Objective 1 Lorem....."
        },
        {
            title: "Objective 1 Lorem....."
        },
        {
            title: "Objective 1 Lorem....."
        },
        {
            title: "Objective 1 Lorem....."
        },
        {
            title: "Objective 1 Lorem....."
        }
    ]

    const themes = [
        {
            title: "Theme 1",
            description: "theme description",
            themeImage:"https://via.placeholder.com/400x200"
        },
        {
            title: "Theme 2",
            description: "theme description",
            themeImage:"https://via.placeholder.com/400x200"
        },
        {
            title: "Theme 3",
            description: "theme description",
            themeImage:"https://via.placeholder.com/400x200"
        },
        {
            title: "Theme 4",
            description: "theme description",
            themeImage:"https://via.placeholder.com/400x200"
        }
    ]

    return (
        <Base>
            <div className="bg-[#ffffff] rounded-tr-xl rounded-tl-xl w-screen h-[120px] -mt-[100px] z-50 mx-auto shadow-lg">
                <Counter />
            </div>
            <About />
            <div className="bg-white h-auto py-4 mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pb-20">
                    <div className="text-center">
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
                            { objectives.map((item) => {
                                return(
                                    <Objective title={item.title} />
                                )
                            })}
                       </motion.p>
                    </div>
                </div>
            </div>
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
                             { themes.map((item) => {
                                return(
                                    <Theme title={item.title} description={item.description} image={item.themeImage} />
                                )
                            })}
                       </motion.p>  
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Home