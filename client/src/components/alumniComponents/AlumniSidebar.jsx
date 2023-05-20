import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { FaCode, FaBrain, FaUserGraduate } from 'react-icons/fa';
import { RiUserSettingsLine } from 'react-icons/ri';
import { BsBriefcase } from 'react-icons/bs';
import { GrCertificate, GrConnect } from 'react-icons/gr';
import { IoCalendarClearOutline } from 'react-icons/io5';
import SmallNameCard from './SmallNameCard';
import { useNavigate } from 'react-router-dom';

const AlumniSidebar = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate('/alumni/profile');
  };
  const handleProjectCode = () => {
    navigate('/alumni/projectcode');
  };

  const handlePortfolio = () => {
    navigate('/alumni/profile/portfolio');
  };
  const handleEducation = () => {
    navigate('/alumni/education');
  };
  const handleCertification = () => {
    alert('coming soon');
    console.log('Certification');
  };

  return (
    <>
      <ul className="menu p-4 w-64 bg-#FFFBFB bg-white shadow-xl h-screen flex-col flex-wrap">
        <div className="flex">
          <a className="btn btn-ghost normal-case text-xl text-purple-700">
            CampusFlow
          </a>
        </div>
        <div className="mt-4">
          <li>
            <a onClick={handleDashboard}>
              <RxDashboard color="gray" />
              Overview
            </a>
          </li>
          <li>
            <a onClick={handleProjectCode}>
              {' '}
              <FaCode color="gray" />
              Project Code
            </a>
          </li>
          <li>
            <a onClick={handlePortfolio}>
              <BsBriefcase color="gray" />
              Portfolio
            </a>
          </li>
          <li>
            <a onClick={handleEducation}>
              <FaUserGraduate />
              Education
            </a>
          </li>
          <li>
            <a onClick={handleCertification}>
              <GrCertificate />
              Certifications
            </a>
          </li>
        </div>
        <div className=" mt-[58vh]">
          <SmallNameCard />
        </div>
      </ul>
    </>
  );
};

export default AlumniSidebar;
