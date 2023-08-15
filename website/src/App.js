import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Use Navigate
import styled from 'styled-components';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const MainContent = styled.main`
  flex-grow: 1;
  overflow: auto;
  min-height: 0;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} /> {/* Use Navigate */}
            <Route path="/home" element={<Homepage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
