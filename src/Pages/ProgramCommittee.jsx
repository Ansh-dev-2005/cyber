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
      category: "Chief Patron",
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
      designation: "Prof. UPES Dehradun",
      category: "Convener",
      url: "https://upes.ac.in",
      Title: "Organising Committee",
    },
    {
      name: "Dr. Sushabhan Chodhury",
      designation: "Prof. UPES Dehradun",
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
    {
      "name": "Prof. MP Jain",
      "designation": "Former Professor at university of Roorkee, now IIT Roorkee Chancellor at IMS Unison University",
      "category": "IN Advisor",
      "url": ""
    },
    {
      "name": "Prof. Jeetendra Pandey",
      "designation": "Associate Professor, School of Computer Sciences & Information Technology, Uttakhand Open University",
      "category": "IN Advisor",
      "url": ""
    },
    {
      "name": "Dr. Niranjan Prasad",
      "designation": "DIRECTOR-II (Scientist-F) Defence Research & Development Organization (DRDO) Governing Council (GC) Member, IETE, New Delhi Senior Fellow at The Institution of Engineers (India)",
      "category": "IN Advisor",
      "url": ""
    },
    {
      "name": "Dr. Yoginder Talwar",
      "designation": "Scientist at National Informatics Centre, Min. of Communications & IT",
      "category": "IN Advisor",
      "url": ""
    },
    {
      "name": "Rajat Goel",
      "designation": "Principal Engineer",
      "category": "IN Advisor",
      "url": ""
    },
    {
      "name": "Nandita Goel",
      "designation": "Principal Data Scientist",
      "category": "IN Advisor",
      "url": ""
    },
    {
      "name": "Prof. MP Jain",
      "designation": "Former Professor at university of Roorkee, now IIT Roorkee Chancellor at IMS Unison University",
      "category": "IN Advisor",
      "url": ""
    },
    {
      "name": "Prof. Jeetendra Pandey",
      "designation": "Professor, School of Computer Sciences & Information Technology, Uttakhand Open University",
      "category": "IN Advisor",
      "url": ""
    },
    {
      "name": "Dr. Niranjan Prasad",
      "designation": "Additional Director, DLRL, DRDO, Ministry of Defence, GOI,(Retd), Fellow IETE, New Delhi, Former IETE GC Member and Chairman, Skills Development and Industrial Coordination Committee, IETE, New Delhi, Member, LITD05, 12, BIS, Govt. of India; Adviser, Blockchain For Productivity Forum (BFPF), New Delhi National Adviser, Rashtriya Krishi Vikash Shilp Kendra (An Enterprise Under Ministry of Micro, Small & Medium Enterprises, Government of India), New Delhi, Principal Advisor, India Water Foundations, India, A Support Group of United Nations Environment Programme (UNEP)",
      "category": "IN Advisor",
      "url": ""
    },
    {
      "name": "Dr. Yoginder Talwar",
      "designation": "Scientist at National Informatics Centre, Min. of Communications & IT",
      "category": "IN Advisor",
      "url": ""
    },
    {
      "name": "Rajat Goel",
      "designation": "Principal Engineer",
      "category": "IN Advisor",
      "url": ""
    },
    {
      "name": "Nandita Goel",
      "designation": "Principal Data Scientist",
      "category": "IN Advisor",
      "url": ""
    }

  ]);
  return (
    <Base>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pb-20">
          <div className="text-left py-2">
            <motion.h2
              initial="initial"
              animate="animate"
              variants={textVariant}
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Chief Patron{" "}
            </motion.h2>
            <div className="w-1/2 bg-[#000] h-1"></div>
            <div className="flex justify-evenly flex-wrap flex-col p-4">
              {members
                .filter((item) => item.category === "Chief Patron")
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
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Patron{" "}
            </motion.h2>
            <div className="w-1/2 bg-[#000] h-1"></div>
            <div className="flex justify-evenly flex-wrap flex-col p-4">
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
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Organizing Chairs Deans{" "}
            </motion.h2>
            <div className="w-1/2 bg-[#000] h-1"></div>
            <div className="flex justify-evenly flex-wrap flex-col p-4">
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
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Convenor{" "}
            </motion.h2>
            <div className="w-1/2 bg-[#000] h-1"></div>
            <div className="flex justify-evenly flex-wrap flex-col p-4">
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
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Organising Committee{" "}
            </motion.h2> */}
            <div className="flex justify-evenly flex-wrap flex-col p-4">
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
            {/* <motion.h2
              initial="initial"
              animate="animate"
              variants={textVariant}
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              International Advisior Board{" "}
            </motion.h2>
            <div className="w-1/2 bg-[#000] h-1"></div>
            <div className="flex justify-evenly flex-wrap flex-col p-4">
              
            </div> */}
            <motion.h2
              initial="initial"
              animate="animate"
              variants={textVariant}
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              International/National Advisory Board{" "}
            </motion.h2>
            <div className="w-1/2 bg-[#000] h-1"></div>
            <div className="flex justify-evenly flex-wrap flex-col p-4">
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
              {members
                .filter((item) => item.category === "IN Advisor")
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
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Technical Program Committee{" "}
            </motion.h2>
            <div className="w-1/2 bg-[#000] h-1"></div>
            <div className="flex justify-evenly flex-wrap flex-col p-4">
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
