import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

// Animation for modal entry
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  direction: rtl;
  position: relative;
  animation: ${fadeIn} 0.4s ease-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
  
  &:hover {
    color: #333;
  }
`;

const ModalTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const ModalText = styled.p`
  margin-bottom: 25px;
  line-height: 1.6;
  color: #555;
  text-align: center;
`;

const NotificationIcon = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background-color: #f3f0ea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

const Form = styled.form`
  margin-top: 30px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${props => props.hasError ? '#d32f2f' : '#ddd'};
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #9c6644;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CancelButton = styled(Button)`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  color: #555;
  
  &:hover {
    background-color: #e5e5e5;
  }
`;

const WaitlistButton = styled(Button)`
  background-color: #9c6644;
  border: none;
  color: white;
  
  &:hover {
    background-color: #7d5035;
  }
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 14px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  
  &:before {
    content: "⚠️";
    margin-left: 5px;
    font-size: 14px;
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 20px;
  
  h3 {
    color: #2e7d32;
    margin-bottom: 15px;
  }
  
  p {
    color: #555;
    line-height: 1.6;
  }
  
  svg {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    color: #2e7d32;
  }
`;

const PurchaseIntentModal = ({ email = '', onJoinWaitlist, onClose }) => {
  const { t } = useTranslation();
  const [waitlistEmail, setWaitlistEmail] = useState(email);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!waitlistEmail.trim()) {
      setError('נא להזין כתובת אימייל');
      return;
    }
    
    if (!isValidEmail(waitlistEmail)) {
      setError('נא להזין כתובת אימייל תקינה');
      return;
    }
    
    // Simulate submitting to waitlist
    setIsSubmitted(true);
    
    // Call the parent component's callback
    if (onJoinWaitlist) {
      onJoinWaitlist(waitlistEmail);
    }
  };
  
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  if (isSubmitted) {
    return (
      <ModalContainer>
        <CloseButton onClick={onClose} aria-label="סגור">&times;</CloseButton>
        <SuccessMessage>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3>תודה שנרשמת!</h3>
          <p>נעדכן אותך ברגע שהשירות יהיה זמין.</p>
          <CancelButton type="button" onClick={onClose} style={{ marginTop: 20 }}>
            סגירה
          </CancelButton>
        </SuccessMessage>
      </ModalContainer>
    );
  }
  
  return (
    <ModalContainer>
      <CloseButton onClick={onClose} aria-label="סגור">&times;</CloseButton>
      
      <NotificationIcon>🔔</NotificationIcon>
      <ModalTitle>שירות זה נמצא בפיתוח</ModalTitle>
      
      <ModalText>
        תודה על התעניינותך באלבום החתונה האוטומטי שלנו! 
        נשמח לעדכן אותך כשהשירות יהיה זמין.
      </ModalText>
      
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="email">כתובת אימייל</Label>
          <Input 
            type="email"
            id="email"
            value={waitlistEmail}
            onChange={(e) => {
              setWaitlistEmail(e.target.value);
              setError(''); // Clear error when user types
            }}
            placeholder="your@email.com"
            hasError={!!error}
            aria-describedby={error ? "email-error" : undefined}
          />
          {error && <ErrorMessage id="email-error" role="alert">{error}</ErrorMessage>}
        </InputGroup>
        
        <ButtonGroup>
          <CancelButton type="button" onClick={onClose}>
            סגירה
          </CancelButton>
          <WaitlistButton type="submit">
            הצטרף לרשימת ההמתנה
          </WaitlistButton>
        </ButtonGroup>
      </Form>
    </ModalContainer>
  );
};

export default PurchaseIntentModal;