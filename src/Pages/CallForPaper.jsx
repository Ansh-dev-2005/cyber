import React from "react";
import Base from "../components/Base/Base";

const CallForPaper = () => {
  return (
    <Base>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center mt-10">
            Call For Paper
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
            <a href="mailto:papers.upes@upes.ac.in" className="text-blue-500">
              papers.upes@upes.ac.in
            </a>
          </p>
          <p className="dates table mt-5 ">
            {/* important dates table */}
            <table className="table-auto  w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Review Time Plan:</th>
                  <th className="px-4 py-2">December 2024 – January 2025</th>
                </tr>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">Submission Deadline</th>
                  <th className="px-4 py-2">January 2025</th>
                </tr>
                <tr>
                  <th className="px-4 py-2">
                    Submission Deadline for revised papers
                  </th>
                  <th className="px-4 py-2">End of January 2025</th>
                </tr>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">Notification of Acceptance</th>
                  <th className="px-4 py-2">1st Week of Feburary 2025</th>
                </tr>
              </thead>
            </table>
          </p>
          <p className="text-lg text mt-5">
            The conference invites original research papers, technical reports,
            and case studies on the following topics of interest but not limited
            to:
          </p>
          
          <ul className="list-disc mt-5">
            <li>Access Control and Intrusion Detection</li>
            <li>Biometrics and Cryptography</li>
            <li>Cloud Computing Security</li>
            <li>Computer Forensics</li>
            <li>Cyber Physical Systems Security</li>
            <li>Database and System Security</li>
            <li>Information Hiding and Watermarking</li>
            <li>Internet of Things Security</li>
            <li>Key Management and Secure Communication</li>
            <li>Malware Analysis and Detection</li>
            <li>Network Security and Privacy</li>
            <li>Security Protocols</li>
            <li>Security Testing and Auditing</li>
            <li>Software Security</li>
            <li>Web Security</li>
          </ul>
        
        </div>
      </div>
    </Base>
  );
};

export default CallForPaper;
