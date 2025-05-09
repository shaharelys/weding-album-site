import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px; // RTL layout
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 16px;
  text-align: right;
  
  &:focus {
    outline: none;
    border-color: #9c6644;
  }
`;

const SubmitButton = styled.button`
  background-color: #9c6644;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background-color: #7d5035;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
  background-color: #f5f5f5;
  color: #666;
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background-color: #e5e5e5;
  }
`;

const ErrorMessage = styled.div`
  color: #e53935;
  font-size: 14px;
  margin-bottom: 15px;
`;

const SuccessMessage = styled.div`
  color: #43a047;
  font-size: 16px;
  margin: 20px 0;
`;

const BellIcon = styled.div`
  font-size: 40px;
  color: #FFD700;
  margin-bottom: 15px;
`;

const WaitlistNotification = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('אנא הזן כתובת אימייל');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('אנא הזן כתובת אימייל תקינה');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/waitlist-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'שגיאה בשליחת האימייל');
      }
      
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error signing up for waitlist:', error);
      setError('חלה שגיאה בשליחת הטופס. אנא נסה שוב מאוחר יותר.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <BellIcon>🔔</BellIcon>
        <Title>שירות זה נמצא בפיתוח</Title>
        <Subtitle>
          תודה על התעניינותך באלבום התמונה האוטומטי שלנו! נשמח לעדכן אותך כשהשירות יהיה זמין.
        </Subtitle>
        
        {!success ? (
          <form onSubmit={handleSubmit}>
            <EmailInput
              type="email"
              placeholder="כתובת אימייל"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'שולח...' : 'הצטרף לרשימת המתנה'}
            </SubmitButton>
            <CancelButton type="button" onClick={onClose}>
              סגירה
            </CancelButton>
          </form>
        ) : (
          <>
            <SuccessMessage>
              תודה! כתובת האימייל שלך נרשמה בהצלחה. נעדכן אותך כשהשירות יהיה זמין.
            </SuccessMessage>
            <CancelButton type="button" onClick={onClose}>
              סגירה
            </CancelButton>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default WaitlistNotification;