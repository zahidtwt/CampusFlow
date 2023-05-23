import './App.css';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import LoginPage from './pages/Login.page';
import RedirectOAuth from './pages/RedirectOAuth.page';
import CandidateList from './pages/CandidateList';
import CreateStudent from './components/CandidateList/CreateStudentModal';
import MarkStudent from './components/MarkStudents/MarkStudent';
import RepoAccess from './pages/RepoAccess.page';
import Dashboard from './pages/Dashboard.page';
import CurriculumComponent from './pages/Curriculum.page';
import CohortStudents from './components/Cohorts/CohortStudents';
import Cohorts from './pages/Cohorts.page';

import StudentInfo from './pages/StudentInfo';
import MarkStudents from './pages/MarkStudents.page';
import AddSkill from './pages/AddSkills.page';
import MigrateStudents from './pages/MigrateStudents.page';
import PeerRatings from './pages/PeerRatings.page';

import AlumniProfile from './pages/AlumniProfile.jsx';
import Portfolio from './components/alumniComponents/Portfolio';

import useAuthCheck from './hooks/useAuthCheck';
import AlumniUpdateProfile from './pages/AlumniUpdateProfile.page';
import AlumniProjectcode from './pages/AlumniProjectcode';
import ProjectForm from './components/alumniComponents/UpdateProfile/ProjectForm.component';
import { Toaster } from 'react-hot-toast';
import AlumniPortfolio from './pages/AlumniPortfolio';
import AlumniEducation from './pages/AlumniEducation';
import AlumniExperience from './pages/AlumniExperience';

import HRloginPage from './pages/HR/HRloginPage';
import HRQuesetions from './pages/HR/HRQuestions.page';
function App() {
  // const zoomLevel = useZoom();
  const authChecked = useAuthCheck();
  return !authChecked ? (
    // <Spinner size={'xl'}></Spinner>
    <div />
  ) : (
    <div>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/redirect/auth" element={<RedirectOAuth />} />
          <Route path="/curriculum" element={<CurriculumComponent />} />

          <Route path="/candidates" element={<CandidateList />} />
          <Route path="/createStudent/:id" element={<CreateStudent />} />
          <Route path="/markStudent/:id/:week" element={<MarkStudent />} />
          <Route path="/markstudents" element={<MarkStudents />} />
          <Route path="peerratings" element={<PeerRatings />} />
          <Route path="/cohorts" element={<Cohorts />}></Route>
          <Route
            path="/cohorts/:cohort/students/"
            element={<CohortStudents />}
          />
          <Route path="/student/:id" element={<StudentInfo />} />
          <Route path="/addSkills" element={<AddSkill />} />
          <Route path="/migratestudents" element={<MigrateStudents />} />
          <Route path="/repoAccess" element={<RepoAccess />} />
          <Route path="/alumni">
            <Route path="profile" element={<AlumniProfile />} />
            <Route path="projectcode/" element={<AlumniProjectcode />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="profile/portfolio" element={<AlumniPortfolio />} />
            <Route path="education" element={<AlumniEducation />} />

            <Route path="update-profile" element={<AlumniUpdateProfile />} />
            <Route path="add-project" element={<ProjectForm />} />
            <Route path="education" element={<AlumniEducation />} />
            <Route path="experience" element={<AlumniExperience />} />
          </Route>
          <Route path="/hr/login" element={<HRloginPage />} />
          <Route path="/hr/query" element={<HRQuesetions />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
