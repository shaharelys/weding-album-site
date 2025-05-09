import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  direction: rtl;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #333;
  font-size: 24px;
  font-weight: 700;
`;

// Inline SVG logo instead of external image
const LogoSvg = () => (
  <svg 
    width="120" 
    height="45" 
    viewBox="0 0 120 45" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: '5px' }}
    direction="ltr"
  >
    <g>
      <rect x="0" y="15" width="15" height="15" fill="#9c6644" />
      <text 
        x="25" 
        y="30" 
        fill="#333" 
        style={{ 
          fontFamily: 'Arial, sans-serif', 
          fontSize: '24px', 
          fontWeight: 'bold',
          direction: 'ltr',
          textAnchor: 'start'
        }}
      >
        Albuma
      </text>
    </g>
  </svg>
);

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #333;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding: 5px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #9c6644;
    transform: translateY(-2px);
  }
  
  &.active {
    color: #9c6644;
    font-weight: 700;
  }
`;

const Header = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <LogoSvg />
        </Logo>
        <NavLinks>
          <NavLink onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t('nav.home')}</NavLink>
          <NavLink onClick={() => scrollToSection('flow-section')}>{t('nav.howItWorks')}</NavLink>
          <NavLink onClick={() => scrollToSection('album-selection')}>{t('nav.pricing')}</NavLink>
          <NavLink onClick={() => scrollToSection('contact-section')}>{t('nav.contact')}</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;