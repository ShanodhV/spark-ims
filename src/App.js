import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './infrastructure/index';
import MainLayout from './components/MainLayout';

// Pages
import Dashboard from './pages/admin/Dashboard';
import Batches from './pages/admin/Batches';
import Faculty from './pages/admin/Faculty';
import Department from './pages/admin/Department';
import DegreeProgram from './pages/admin/DegreeProgram';
import Course from './pages/admin/Course';
import MainSetup from './pages/admin/MainSetup';
import Organization from './pages/admin/Organization';
import User from './pages/admin/User';
import AddBatches from './pages/admin/addPages/AddBatches';
import AddFaculty from './pages/admin/addPages/AddFaculty';
import AddDepartment from './pages/admin/addPages/AddDepartment';
import AddDegree from './pages/admin/addPages/AddDegree';
import AddCourse from './pages/admin/addPages/AddCourse';
import AddUser from './pages/admin/addPages/AddUser';
import BulkUpload from './pages/admin/addPages/BulkUpload';
import AddOrganization from './pages/admin/addPages/AddOrganization';
import DeanDashboard from './pages/dean/Dashboard';
import Internship from './pages/dean/Internship';
import Evaluation from './pages/dean/Evaluation';
import HodDashboard from './pages/hod/Dashboard';
import IsDashboard from './pages/industrySupervisor/Dashboard';
import IsInternship from './pages/industrySupervisor/Internship';
import IsEvaluation from './pages/industrySupervisor/Evaluation';
import Diary from './pages/industrySupervisor/Diary';
import ViewInternPage from './pages/industrySupervisor/ViewInternPage';
import AsCourse from './pages/academicSupervisor/Course';
import AsDashboard from './pages/academicSupervisor/Dashboard';
import AsDegree from './pages/academicSupervisor/DegreeProgram';
import AsEvaluation from './pages/academicSupervisor/Evaluation';
import AsOrganization from './pages/academicSupervisor/Organization';
import AsUser from './pages/academicSupervisor/User';
import SDashboard from './pages/student/Dashboard';
import MyInternship from './pages/student/MyInternship';
import Assessment from './pages/student/Assessment';
import DailyDiary from './pages/student/DailyDiary';
import Degree from './pages/hod/DegreeProgram';
import HODCourse from './pages/hod/Course';
import HODEvaluation from './pages/hod/Evaluation';
import HODUser from './pages/hod/User';
import CDashboard from './pages/coordinator/Dashboard';
import CEvaluation from './pages/coordinator/Evaluation';
import CInternship from './pages/coordinator/Internship';
import Request from './pages/coordinator/request';
import Enroll from './pages/coordinator/Enroll';
import Cuser from './pages/coordinator/Cuser';
import Assignment from './pages/coordinator/Assignment';
import EvaTemp from './pages/coordinator/EvaTemp';
import AssTemp from './pages/coordinator/AssTemp';
import AddAssessment from './pages/coordinator/AddAssTemp';
import AddEvaluation from './pages/coordinator/AddEvaTemp';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
          <Routes>
          {/* Admin Routes */}

            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/batches" element={<Batches />} />
            <Route path="/admin/addpages/add-batches" element={<AddBatches />} />
            <Route path="/admin/faculty" element={<Faculty />} />
            <Route path="/admin/addpages/add-faculty" element={<AddFaculty />} />
            <Route path="/admin/department" element={<Department />} />
            <Route path="/admin/addPages/add-department" element={<AddDepartment />} />
            <Route path="/admin/degree-program" element={<DegreeProgram />} />
            <Route path="/admin/addPages/add-degree" element={<AddDegree />} />
            <Route path="/admin/course" element={<Course />} />
            <Route path="/admin/addPages/add-course" element={<AddCourse/>} />
            <Route path="/admin/main-setup" element={<MainSetup />} />
            <Route path="/admin/organization" element={<Organization />} />
            <Route path="/admin/addPages/add-organization" element={<AddOrganization/>} />
            <Route path="/admin/user" element={<User />} />
            <Route path="/admin/addPages/add-user" element={<AddUser/>} />
            <Route path="/admin/addPages/bulk-upload" element={<BulkUpload/>} />

            {/* Dean Routes */}
            <Route path="/dean/dashboard" element={<DeanDashboard />} />
            <Route path="/dean/internship" element={<Internship />} />
            <Route path="/dean/evaluation" element={<Evaluation/>} />

            {/* HOD Routes */}
            <Route path="/hod/dashboard" element={<HodDashboard />} />
            <Route path="/hod/degree-program" element={<Degree />} />
            <Route path="/admin/addPages/add-degree" element={<AddDegree />} />
            <Route path="/hod/course" element={<HODCourse/>} />
            <Route path="/admin/addPages/add-course" element={<AddCourse/>} />
            <Route path="/hod/organization" element={<Organization/>} />
            <Route path="/admin/addPages/add-organization" element={<AddOrganization/>} />
            <Route path="/hod/user" element={<HODUser/>} />
            <Route path="/admin/addPages/add-user" element={<AddUser/>} />
            <Route path="/hod/evaluation" element={<HODEvaluation/>}/>

            {/* Coordinator Routes */}
            <Route path="/coordinator/dashboard" element={<CDashboard/>} />
            <Route path="/coordinator/internship" element={<CInternship />} />
            <Route path="/coordinator/evaluation" />
            <Route path="/coordinator/evaluation/evaluationTemp" element={<EvaTemp/>} />
            <Route path="/coordinator/evaluation/evaluation" element={<CEvaluation/>} />
            <Route path="/coordinator/request" element={<Request/>} />
            <Route path="/coordinator/enroll" element={<Enroll/>} />
            <Route path="/coordinator/assessment" />
            <Route path="/coordinator/assessment/assTemp" element={<AssTemp/>} />
            <Route path="/coordinator/assessment/assessment" element={<Assignment/>}  />
            <Route path="/coordinator/user" element={<Cuser/>} />
            <Route path="/coordinator/addAssTemp" element={<AddAssessment/>}  />
            <Route path="/coordinator/addEvaTemp" element={<AddEvaluation/>}  />


            {/* Industry Supervisor Routes */}
            <Route path="/industrySupervisor/dashboard" element={<IsDashboard />} />
            <Route path="/industrySupervisor/internship" element={<IsInternship />} />
            <Route path="/industrySupervisor/evaluation" element={<IsEvaluation />} />
            <Route path="/industrySupervisor/diary" element={<Diary/>} />
            <Route path="/industrySupervisor/viewintern" element={<ViewInternPage/>} />

            {/* Student Routes */}
            <Route path="/student/dashboard" element={<SDashboard/>} />
            <Route path="/student/myinternship" element={<MyInternship/>} />
            <Route path="/student/myassessment" element={<Assessment />} />
            <Route path="/student/diary" element={<DailyDiary/>} />


            {/* Academic Superviosr Routes */}
            <Route path="/academicSupervisor/dashboard" element={<AsDashboard/>} />
            <Route path="/academicSupervisor/degree-program" element={<AsDegree />} />
            <Route path="/admin/addPages/add-degree" element={<AddDegree />} />
            <Route path="/academicSupervisor/course" element={<AsCourse/>} />
            <Route path="/admin/addPages/add-course" element={<AddCourse/>} />
            <Route path="/academicSupervisor/organization" element={<AsOrganization/>} />
            <Route path="/admin/addPages/add-organization" element={<AddOrganization/>} />
            <Route path="/academicSupervisor/user" element={<AsUser/>} />
            <Route path="/admin/addPages/add-user" element={<AddUser/>} />
            <Route path="/academicSupervisor/evaluation" element={<AsEvaluation/>}/>

          </Routes>
        </MainLayout>

    
      </Router>
    </ThemeProvider>
  );
}

export default App;