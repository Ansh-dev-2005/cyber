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
    },
    {
      "name": "Abhijit Kumar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Abhirup Khanna",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Achala Shakya",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Ajay Kumar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Akashdeep Bhardwaj",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Akhilesh Mohan Srivastava",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Alind .",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Alok Aggarwal",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Alok Jhaldiyal",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Amar Jindal",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Amar Shukla",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Ambika Aggarwal",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Amit Verma",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Amrendra Tripathi",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Anil Kumar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Anurag Jain",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Anushree Sah",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Archana Kumari",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Arjun Arora",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Arun Singh Bhadwal",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Aviral Sharma",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Avishek Majumder",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Avita Katal",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Bhavana Kaushik",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Bhupendra Singh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Chhotelal Kumar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Christalin Nelson S",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Deepa Joshi",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Deepak Kumar Sharma",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Deepika Koundal",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Dhirendra Kumar Sharma",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Dhiviya Rose J",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Gagan Deep Singh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Gaytri -",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Gopal Rawat",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Goutam Datta",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Hanumat Sastryg",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Hemant Petwal",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Hitesh Kumar Sharma",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Jerry w Sangma",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Juhi Agarwal",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Kamal Raj Singh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Kapil Gupta",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Karmeshu",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Kaushik Ghosh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Keshav Kaushik",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Keshav Sinha",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Khushboo Jain",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Kingshuk Srivastava",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Kotha Venugopalachary",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Maithilee Laxmanrao Patawar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Manish Kumar Giri",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Manobendra Nath Mondal",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Mitali Chugh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Mohammad Ahsan",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Mrittunjoy Guha Majumdar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Muthukumar Ka",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "N Prasanthi Kumari",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Nadeem Yousuf Khanday",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Nayantara Kotoky",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Neelu Jyothi Ahuja",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Neeraj Chugh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Nitika Nigam",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Pallabi Sharma",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Panduranga Raviteja",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Pankaj Badoni",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Pankaj Kumar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Pankaj Kundan Dadure",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Piyush Rawat",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Prabhat Ranjan Singh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Prateek Gupta",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Priya Ranjan",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Priyanka Singh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Rahul Kumar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Rahul Kumar Singh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Ram Kumar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Ravi Yadav",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Richa Choudhary",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Rohit Srivastava",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Rohit Tanwar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Roohi Sille",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Sachi Choudhary",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Sahinur Rahman Laskar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Sandeep Pratap Singh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Sandip Kumar Chaurasiya",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Sanjeev Kumar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Sanoj Kumar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Saroj Snehal Shivagunde",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Saswata Shannigrahi",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Saurabh Jain",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Saurabh Shanu",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Shahid Sultan Hajam",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Shahina Anwarul",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Shamik Tiwari",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Shaurya Gupta",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Shiladitya Bhattacharjee",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Shreya Banerjee",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Shubhi Sharma",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Silky Goel",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Sonal Talreja",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Sonali Vyas",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Subhankar Ghosal",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Subramanian Ravishankar Iyer",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Sugandha Sharma",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Sunil Gupta",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Surbhi Saraswat",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Sushabhan Choudhury",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Swati Rastogi",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Syed Sajid Hussain",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Tanu Singh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Tarandeep Kaur Bhatia",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Varun Sapra",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Ved Prakash Bhardwaj",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Vibhu Jately",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Vidyanand Mishra",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Vijendra Singh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Vinod Patidar",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Virender Kadyan",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
    },
    {
      "name": "Yeshwant Singh",
      "designation": "",
      "category": "faculty",
      "url": "https://upes.ac.in"
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
            <motion.h2
              initial="initial"
              animate="animate"
              variants={textVariant}
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Organising Committee{" "}
            </motion.h2>
            <div className="flex justify-evenly flex-wrap flex-col p-4">
              {members
                .filter((item) => item.category === "faculty")
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
