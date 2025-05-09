import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  background-color: #f5f0e8;
  padding: 70px 0;
  direction: rtl;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(156, 102, 68, 0.2), transparent);
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContentContainer = styled.div`
  width: 100%;
  text-align: right;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
  position: relative;
  font-weight: 700;
  text-align: right;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #9c6644;
    margin-top: 15px;
    border-radius: 2px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 24px;
`;

const CustomerControlSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentContainer>
          <SectionTitle>אנחנו רק מציעים – אתם בוחרים ומאשרים</SectionTitle>
          <Paragraph>
            אנחנו מסננים בקפידה את התמונות מהחתונה שלכם ומציגים אלבום דיגיטלי מוכן, לצד גלריה של תמונות נוספות שהתלבטנו לגביהן.
          </Paragraph>
          <Paragraph>
            לצד כל תמונה שנבחרה, תמצאו שלוש תמונות מומלצות להחלפה – כולן זמינות בממשק נוח ואינטואיטיבי.
          </Paragraph>
          <Paragraph>
            בלחיצת עכבר או גרירה פשוטה, תוכלו להחליף כל תמונה באלבום בתמונה שמרגישה לכם מדויקת יותר.
          </Paragraph>
          <Paragraph>
            ואם מכל סיבה אינכם מרוצים – מהבחירה, מהגלריה או מהתהליך – תקבלו החזר כספי מלא, ללא שאלות וללא תנאים, עד לרגע אישור האלבום להדפסה.
          </Paragraph>
        </ContentContainer>
      </Container>
    </SectionWrapper>
  );
};

export default CustomerControlSection;