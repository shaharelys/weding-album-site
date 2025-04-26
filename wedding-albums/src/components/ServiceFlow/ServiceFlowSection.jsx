import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Step = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 25px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  display: flex;
  align-items: flex-start;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StepNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  height: 40px;
  background-color: #9c6644;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  margin-left: 20px;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex-grow: 1;
`;

const StepTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 18px;
`;

const StepDescription = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`;

const ServiceFlowSection = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      id: 1,
      title: 'בחירת סגנון אלבום',
      description: t('flow.step1')
    },
    {
      id: 2,
      title: 'בחירת גודל אלבום',
      description: t('flow.step2')
    },
    {
      id: 3,
      title: 'שיתוף קישור לתמונות ופרטי התקשרות',
      description: t('flow.step3')
    },
    {
      id: 4,
      title: 'תשלום ואישור תנאים',
      description: t('flow.step4')
    },
    {
      id: 5,
      title: 'בחירת התמונות',
      description: t('flow.step5')
    },
    {
      id: 6,
      title: 'עיצוב האלבום ואישור',
      description: t('flow.step6')
    },
    {
      id: 7,
      title: 'קבלת האלבום',
      description: t('flow.step7')
    }
  ];

  return (
    <Container>
      <StepsContainer>
        {steps.map((step) => (
          <Step key={step.id}>
            <StepNumber>{step.id}</StepNumber>
            <StepContent>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </Step>
        ))}
      </StepsContainer>
    </Container>
  );
};

export default ServiceFlowSection;