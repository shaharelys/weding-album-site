import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 40px 0 20px;
  direction: rtl;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const LogoContainer = styled.div`
  text-align: right;
  margin-bottom: 30px;
  display: block;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterSection = styled.div``;

const FooterSectionTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    height: 2px;
    background-color: #e5a87f;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 2px 0;
  display: inline-block;
  
  &:hover {
    color: #e5a87f;
    transform: translateX(-5px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ContactIcon = styled.div`
  margin-left: 10px;
  font-size: 18px;
`;

const ContactText = styled.span``;

const Copyright = styled.div`
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
  font-size: 14px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    color: #e5a87f;
    transform: translateY(-3px);
  }
`;

// const FooterText = styled.p`
//   margin: 0;
//   font-size: 0.9rem;
// `;

const LogoImage = styled.img`
  height: 50px; // Adjust as needed
  width: auto;
  margin-bottom: 10px;
  filter: invert(1);
`;

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <LogoImage src="/images/logo2.png" alt="אלבומה לוגו" />
        </LogoContainer>
        <FooterGrid>
          <FooterSection>
            <FooterSectionTitle>אלבומה</FooterSectionTitle>
            <p>שירות חדשני המסנן את תמונות החתונה שלכם ומפיק מהן אלבום מקצועי ומרשים.</p>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </SocialLink>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterSectionTitle>מדיניות</FooterSectionTitle>
            <FooterLinks>
              <FooterLink to="/terms">{t('footer.terms')}</FooterLink>
              <FooterLink to="/privacy">{t('footer.privacy')}</FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterSectionTitle>צור קשר</FooterSectionTitle>
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-envelope"></i>
              </ContactIcon>
              <ContactText>{t('footer.email')}: info@albuma.co.il</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <i className="fab fa-whatsapp"></i>
              </ContactIcon>
              <ContactText>{t('footer.whatsapp')}: 054-466-6185</ContactText>
            </ContactItem>
          </FooterSection>
        </FooterGrid>
        <Copyright>
          {t('footer.copyright')}
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;