import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const PolicyContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  line-height: 1.6;
  direction: rtl;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #555;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
`;

const PrivacyPolicy = () => {
  // Using t directly without destructuring an empty object
  const { t } = useTranslation();

  return (
    <PolicyContainer>
      <Title>{t('privacy.title')}</Title>
      
      {t('privacy.sections', { returnObjects: true }).map((section, index) => (
        <Section key={index}>
          <SectionTitle>{section.title}</SectionTitle>
          {section.content.split('\n\n').map((paragraph, pIndex) => (
            <Paragraph key={pIndex}>{paragraph}</Paragraph>
          ))}
        </Section>
      ))}
    </PolicyContainer>
  );
};

export default PrivacyPolicy;