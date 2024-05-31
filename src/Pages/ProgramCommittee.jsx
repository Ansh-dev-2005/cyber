import React, { useState } from "react";
import Base from "../Components/Base/Base";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../Utils/motion";
import Member from "../Components/Member/Member";

const ProgramCommittee = () => {
  const [members, setMembers] = useState([
    {
      name: "Dr. Ram K Sharma",
      designation: "VC, UPES Dehradun",
      category: "Patron",
      url: "https://upes.ac.in",
      Title: "Organising Committee",
    },
    {
      name: "Manish Madaan",
      designation: "Registrar, UPES Dehradun",
      category: "Patron",
      url: "https://upes.ac.in",
      Title: "Organising Committee",
    },
    {
      name: "Dr. Ajay Prasad",
      designation: "",
      category: "Convener",
      url: "https://upes.ac.in",
      Title: "Organising Committee",
    },
    {
      name: "Dr. Sushabhan Chodhury",
      designation: "",
      category: "Convener",
      url: "https://upes.ac.in",
      Title: "Organising Committee",
    },
    {
      name: "Dr. Raja Datta",
      designation: "Prof. IITKGP",
      category: "International Advisior Board",
      url: "https://upes.ac.in",
      Title: "Organising Committee",
    },
    {
      name: "Dr. Saumyabrata Chakrobarty",
      designation: "IIT Gandhi Nagar",
      category: "International Advisior Board",
      url: "https://upes.ac.in",
      Title: "Organising Committee",
    },
    {
      name: "Vijay Nath",
      designation: "",
      category: "TPC Chair",
      url: "https://upes.ac.in",
      Title: "Organising Committee",
    },
    {
      name: "Dr Ravi S Iyer",
      designation: "Dean, School of Computer Science",
      category: "Organizing Chairs Deans",
      url: "https://www.upes.ac.in/faculty/school-of-computer-science/dr-s-ravi-shankar",
      Title: "Organising Committee",
    },
  ]);
  return (
    <Base>
      <div className="bg-white snap-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pb-20">
          <div className="text-center py-2">
            <motion.h2
              initial="initial"
              animate="animate"
              variants={textVariant}
              className="text-3xl font-bold tracking-tight text-gray-900"
            >
              Patron{" "}
            </motion.h2>
            <div className="flex justify-evenly flex-wrap flex-row p-4">
              {members
                .filter((item) => item.category === "Patron")
                .map((item) => {
                  return (
                    <Member
                      name={item.name}
                      designation={item.designation}
                      url={item.url}
                      category={item.category}
                    />
                  );
                })}
            </div>
            <motion.h2
              initial="initial"
              animate="animate"
              variants={textVariant}
              className="text-3xl font-bold tracking-tight text-gray-900"
            >
              Convenor{" "}
            </motion.h2>
            <div className="flex justify-evenly flex-wrap flex-row p-4">
              {members
                .filter((item) => item.category === "Convener")
                .map((item) => {
                  return (
                    <Member
                      name={item.name}
                      designation={item.designation}
                      url={item.url}
                      category={item.category}
                    />
                  );
                })}
            </div>
            {/* <motion.h2
              initial="initial"
              animate="animate"
              variants={textVariant}
              className="text-3xl font-bold tracking-tight text-gray-900"
            >
              Organising Committee{" "}
            </motion.h2> */}
            <div className="flex justify-evenly flex-wrap flex-row p-4">
              {members
                .filter((item) => item.category === "Organising Committee")
                .map((item) => {
                  return (
                    <Member
                      name={item.name}
                      designation={item.designation}
                      url={item.url}
                      category={item.category}
                    />
                  );
                })}
            </div>
            <motion.h2
              initial="initial"
              animate="animate"
              variants={textVariant}
              className="text-3xl font-bold tracking-tight text-gray-900"
            >
              International Advisior Board{" "}
            </motion.h2>
            <div className="flex justify-evenly flex-wrap flex-row p-4">
              {members
                .filter(
                  (item) => item.category === "International Advisior Board"
                )
                .map((item) => {
                  return (
                    <Member
                      name={item.name}
                      designation={item.designation}
                      url={item.url}
                      category={item.category}
                    />
                  );
                })}
            </div>
            <motion.h2
              initial="initial"
              animate="animate"
              variants={textVariant}
              className="text-3xl font-bold tracking-tight text-gray-900"
            >
              Organizing Chairs Deans{" "}
            </motion.h2>
            <div className="flex justify-evenly flex-wrap flex-row p-4">
              {members
                .filter((item) => item.category === "Organizing Chairs Deans")
                .map((item) => {
                  return (
                    <Member
                      name={item.name}
                      designation={item.designation}
                      url={item.url}
                      category={item.category}
                    />
                  );
                })}
            </div>
            <motion.h2
              initial="initial"
              animate="animate"
              variants={textVariant}
              className="text-3xl font-bold tracking-tight text-gray-900"
            >
              Technical Program Committee{" "}
            </motion.h2>
            <div className="flex justify-evenly flex-wrap flex-row p-4">
              {members
                .filter((item) => item.category === "TPC Chair")
                .map((item) => {
                  return (
                    <Member
                      name={item.name}
                      designation={item.designation}
                      url={item.url}
                      category={item.category}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default ProgramCommittee;
