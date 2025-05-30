import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FloatingWhatsAppButton from './components/Layout/WhatsAppButton';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SuccessPage from './pages/SuccessPage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Assistant', sans-serif;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </MainContent>
      <FloatingWhatsAppButton />
      <Footer />
    </AppContainer>
  );
}

export default App;