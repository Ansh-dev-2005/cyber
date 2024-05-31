import React, { useState } from "react"
import Base from "../Components/Base/Base"
import { motion } from "framer-motion"
import {styles} from "../styles"
import { fadeIn, textVariant } from "../Utils/motion"
import Member from "../Components/Member/Member"

const ProgramCommittee = () => {

    const [members, setMembers] = useState([
        { 
            name: "Dr. Ram K Sharma",
            designation: "VC, UPES Dehradun",
            category: "Patron",
            url: "https://upes.ac.in"
        },
        { 
            name: "Dr. Ajay Prasad",
            designation: "",
            category: "Convener",
            url: "https://upes.ac.in"

        },
        { 
            name: "Dr. Sushabhan Chodhury",
            designation: "",
            category: "Convener",
            url: "https://upes.ac.in"
        },
        { 
            name: "Dr. Raja Datta",
            designation: "Prof. IITKGP",
            category: "International Advisior Board",
            url: "https://upes.ac.in"
        },
        { 
            name: "Dr. Saumyabrata Chakrobarty",
            designation: "IIT Gandhi Nagar",
            category: "International Advisior Board",
            url: "https://upes.ac.in"
        },
        { 
            name: "Vijay Nath",
            designation: "",
            category: "TPC Chair",
            url: "https://upes.ac.in"
        },
    ])
    return (
        <Base>
            <div className="bg-white h-[100vh] snap-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pb-20">
                    <div className="text-center py-2">
                        <motion.h2
                            initial="initial"
                            animate="animate"
                            variants={textVariant}
                            className="text-3xl font-bold tracking-tight text-gray-900"
                        >
                            Organising Committee{" "}
                        </motion.h2>
                        <div className="flex justify-evenly flex-wrap flex-row p-4">
                            { members.map((item) => {
                                return(
                                    <Member 
                                        name={item.name} 
                                        designation={item.designation} 
                                        url={item.url}
                                        category={item.category}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default ProgramCommittee