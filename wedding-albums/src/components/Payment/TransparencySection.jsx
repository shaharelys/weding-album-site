import React from 'react';
import styled from 'styled-components';

const FloatingNoteContainer = styled.div`
  margin-top: 40px;
`;

const NoteBox = styled.div`
  background-color: #f8f4f0;
  border-radius: 8px;
  padding: 20px 25px;
  max-width: 650px;
  margin: 0 auto;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  border-right: 3px solid #9c6644;
  text-align: right;
  font-size: 15px;
  line-height: 1.5;
  color: #444;
`;

const TransparencySection = () => {
  return (
    <FloatingNoteContainer>
      <NoteBox>
      חשוב לדעת כי תוכלו לקבל החזר כספי מלא, ללא שאלות, במקרה שאינכם שבעי רצון מבחירת התמונות
      </NoteBox>
    </FloatingNoteContainer>
  );
};

export default TransparencySection;