import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import candidate from "../../assests/candidate.svg";
import employer from "../../assests/employer.svg";
import CandidateRegistration from "./CandidateRegistration";
import EmployerRegistration from "./EmployeerRegistration";

const AccountCreator = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  if (type === "candidate") {
    return <CandidateRegistration />;
  }

  if (type === "employer") {
    return <EmployerRegistration />;
  }

  return (
    <div className="h-screen pt-14">
      <h1 className="text-center text-2xl">Continue as ...</h1>
      <div className="flex flex-col lg:flex-row justify-evenly pb-10 mb-10">
        <div
          onClick={() => navigate("/register/candidate")}
          className="flex flex-col justify-between transition-all rounded-lg p-5 border border-white hover:border-primary hover:shadow-2xl hover:scale-105 group"
        >
          <img className="h-5/6" src={candidate} alt="" />
          <p className="text-center text-3xl">Candidate</p>
        </div>
        <div
          onClick={() => navigate("/register/employer")}
          className="flex flex-col justify-between transition-all rounded-lg p-5 border border-white hover:border-primary hover:shadow-2xl hover:scale-105 group"
        >
          <img className="h-[77%]" src={employer} alt="" />
          <p className="text-center text-3xl">Employer</p>
        </div>
      </div>
    </div>
  );
};

export default AccountCreator;
