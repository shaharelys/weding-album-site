import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  background-color: #fff;
  padding: 60px 0;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: right;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
  position: relative;
  font-weight: 700;
  text-align: center;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #9c6644;
    margin: 15px auto 0;
    border-radius: 2px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #444;
  margin: 0;
`;

const HighlightBox = styled.div`
  background-color: #f8f4f0;
  border-radius: 8px;
  padding: 20px 25px;
  border-right: 3px solid #9c6644;
  margin-top: 10px;
`;

const CustomerControlSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle>אנחנו רק מציעים – אתם בוחרים ומאשרים</SectionTitle>
        <ContentWrapper>
          <Paragraph>
            אנחנו מסננים בקפידה את התמונות מהחתונה שלכם ומציגים אלבום דיגיטלי מוכן, לצד גלריה של תמונות נוספות שהתלבטנו לגביהן.
          </Paragraph>
          <Paragraph>
            לצד כל תמונה שנבחרה, תמצאו שלוש תמונות מומלצות להחלפה – כולן זמינות בממשק נוח ואינטואיטיבי.
          </Paragraph>
          <Paragraph>
            בלחיצת עכבר או גרירה פשוטה, תוכלו להחליף כל תמונה באלבום בתמונה שמרגישה לכם מדויקת יותר.
          </Paragraph>
          
          <HighlightBox>
            <Paragraph>
              ואם מכל סיבה אינכם מרוצים – מהבחירה, מהגלריה או מהתהליך – תקבלו החזר כספי מלא, ללא שאלות וללא תנאים, עד לרגע אישור האלבום להדפסה.
            </Paragraph>
          </HighlightBox>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CustomerControlSection;