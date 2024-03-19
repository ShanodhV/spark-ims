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
            {/* <Route path="/admin/dashboard" element={<Dashboard />} />
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
            <Route path="/admin/addPages/bulk-upload" element={<BulkUpload/>} /> */}

            {/* Dean Routes */}
            <Route path="/dean/dashboard" element={<DeanDashboard />} />
            {/* <Route path="/dean/internship" element={<InternshipDean />} />
            <Route path="/dean/evaluation" element={<EvaluationDean />} /> */}
          </Routes>
        </MainLayout>

    
      </Router>
    </ThemeProvider>
  );
}

export default App;