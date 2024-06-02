import React from "react";
import Base from "../Components/Base/Base";
import { Dehradun, upes } from "../Assets";

const About = () => {
  return (
    <Base>
      <div className="container mx-auto my-2 mb-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center mt-10">
            About ICACSDF
          </h1>
          <p className="text-lg  mt-5">
            The International Conference on Advancement in Cyber Security and
            Digital Forensics (ICACSDF - 2025) is a premier forum that brings
            together researchers, practitioners, and professionals from
            academia, industry, and government who are working in the field of
            cyber security, privacy, and digital forensics. The conference will
            be held in Dehradun, India during 25-27 March 2022. The conference
            will be technically co-sponsored by IEEE UP Section.
          </p>
          <p className="text-lg text mt-5">
            The conference will feature keynote speeches, technical
            presentations, workshops, tutorials, and invited talks. The
            technical sessions will present original and fundamental research
            advances while the workshops will focus on the latest topics in
            cyber security, privacy, and digital forensics. The conference will
            also feature a panel discussion on the latest trends in cyber
            security, privacy, and digital forensics.
          </p>
          <p className="text-lg text mt-5">
            Prospective authors are invited to submit full and original research
            papers; which have NOT been submitted or published elsewhere or
            under consideration in other conferences or journals. All
            submissions are to be in electronic (PDF and MsWord both) format
            through conference website or e-mail.Authors may also submit their
            contributions directly to the Email id:
            <a href="mailto:gmail.com" className="text-blue-500">
              gmail.com
            </a>
          </p>
          {/* about upes */}
          <h1 className="text-4xl font-bold text-center mt-10">About UPES</h1>
          {/* divide left and right */}
          <div className="flex space-x-2 flex-col md:flex-row items-center justify-center">
            <div className="w-1/3 ">
              <img src={upes} alt="UPES " className="  object-cover mt-5" />
            </div>
            <div className="w-2/3">
              <p className="text-lg text mt-5">
                University of Petroleum and Energy Studies (UPES) is a
                multi-disciplinary university located in Dehradun, India. The
                university offers specialized undergraduate and postgraduate
                courses in the fields of engineering, management, law, design,
                health sciences, and modern media and communication. UPES is
                recognized by the University Grants Commission (UGC) and is a
                member of the Association of Indian Universities (AIU).
              </p>
              <p className="text-lg text mt-5">
                The university has been ranked among the top 100 universities in
                India by the National Institutional Ranking Framework (NIRF) and
                has been awarded the QS Five Stars Global Rating for
                Employability and Facilities. UPES has also been accredited by
                the National Board of Accreditation (NBA) and has been awarded
                the QS I-Gauge Gold Rating for Teaching and Employability.
              </p>
            </div>
          </div>
          {/* about dehradun */}
          <h1 className="text-4xl font-bold text-center mt-10">
            About Dehradun
          </h1>
          <div className="flex space-x-2 flex-col md:flex-row items-center justify-center">
            <div className="w-2/3">
              <p className="text-lg text mt-5">
                Dehradun is the capital city of the Indian state of Uttarakhand.
                It is located in the Doon Valley on the foothills of the
                Himalayas. Dehradun is known for its picturesque landscapes,
                pleasant climate, and educational institutions. The city is home
                to several prestigious schools, colleges, and universities,
                including the Indian Military Academy (IMA), the Forest Research
                Institute (FRI), and the University of Petroleum and Energy
                Studies (UPES).
             
              </p>
              <p className="text-lg text mt-5">
                Dehradun is also a popular tourist destination, with attractions
                such as the Robber's Cave, the Sahastradhara waterfall, and the
                Mindrolling Monastery. The city is well-connected by road, rail,
                and air, with regular flights to major cities in India. Dehradun
                is also a gateway to the hill stations of Mussoorie, Nainital,
                and Rishikesh, making it an ideal destination for nature lovers
                and adventure enthusiasts.
               
              </p>
            </div>
            <div className="w-1/3 ">
              <img src={Dehradun} alt="UPES " className="  object-cover mt-5" />
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default About;

