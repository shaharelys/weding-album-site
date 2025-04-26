import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SuccessContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px;
`;

const SuccessContent = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const SuccessIcon = styled.div`
  color: #4CAF50;
  font-size: 60px;
  margin-bottom: 30px;
  
  &:before {
    content: "✓";
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 50%;
    background-color: #E8F5E9;
  }
`;

const SuccessTitle = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const SuccessMessage = styled.p`
  color: #666;
  font-size: 18px;
  margin-bottom: 40px;
`;

const ProcessSection = styled.div`
  margin: 40px 0;
  text-align: right;
`;

const ProcessTitle = styled.h2`
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 18px;
    height: 100%;
    width: 4px;
    background: #e0e0e0;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-right: 45px;
  padding-bottom: 50px;
  
  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #9c6644;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

const TimelineContent = styled.div`
  background-color: #f8f4f0;
  padding: 20px;
  border-radius: 8px;
`;

const TimelineTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
`;

const TimelineDescription = styled.p`
  color: #555;
  margin: 0;
`;

const TimelineDetail = styled.p`
  color: #777;
  font-size: 14px;
  font-style: italic;
  margin-top: 10px;
`;

const DeliveryInfo = styled.div`
  background-color: #e3f2fd;
  padding: 20px;
  border-radius: 8px;
  margin: 40px 0;
  border-right: 4px solid #2196f3;
`;

const DeliveryTitle = styled.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  
  &:before {
    content: "🚚";
    margin-left: 10px;
  }
`;

const ContactSection = styled.div`
  margin: 40px 0 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const ContactTitle = styled.h3`
  margin-top: 0;
  color: #333;
`;

const WhatsAppLink = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #25d366;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  
  &:before {
    content: "WhatsApp";
    margin-left: 10px;
  }
`;

const HomeLink = styled(Link)`
  display: inline-block;
  margin-top: 30px;
  padding: 12px 24px;
  background-color: #9c6644;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #7d5035;
  }
`;

const SuccessPage = () => {
  const { t } = useTranslation();
  
  return (
    <SuccessContainer>
      <SuccessContent>
        <SuccessIcon />
        <SuccessTitle>ההזמנה שלך התקבלה!</SuccessTitle>
        <SuccessMessage>תודה שבחרת לעצב אלבום חתונה איתנו. אנחנו מתרגשים להתחיל לעבוד על האלבום המושלם עבורכם.</SuccessMessage>
        
        <ProcessSection>
          <ProcessTitle>מה קורה עכשיו?</ProcessTitle>
          
          <TimelineContainer>
            <TimelineItem>
              <TimelineDot>1</TimelineDot>
              <TimelineContent>
                <TimelineTitle>בחירת התמונות</TimelineTitle>
                <TimelineDescription>
                  צוות העורכים שלנו יעבור על התמונות שלכם ויבחר את התמונות המושלמות לאלבום שלכם.
                </TimelineDescription>
                <TimelineDetail>
                  זמן משוער: עד 7 ימי עסקים
                </TimelineDetail>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineDot>2</TimelineDot>
              <TimelineContent>
                <TimelineTitle>קישור לגלריה מוצעת</TimelineTitle>
                <TimelineDescription>
                  תקבלו אימייל עם קישור לגלריה מוצעת הכוללת את התמונות שנבחרו ותמונות חלופיות מומלצות.
                </TimelineDescription>
                <TimelineDetail>
                  כל תמונה מסומנת במספר ייחודי לצורך זיהוי קל
                </TimelineDetail>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineDot>3</TimelineDot>
              <TimelineContent>
                <TimelineTitle>אישור או בקשת שינויים</TimelineTitle>
                <TimelineDescription>
                  תוכלו לאשר את הבחירה או לבקש להחליף תמונות לפי העדפתכם.
                </TimelineDescription>
                <TimelineDetail>
                  פשוט שלחו לנו הודעת WhatsApp עם מספרי התמונות שברצונכם להחליף והחלופות המועדפות.
                </TimelineDetail>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineDot>4</TimelineDot>
              <TimelineContent>
                <TimelineTitle>הדפסה ומשלוח</TimelineTitle>
                <TimelineDescription>
                  לאחר האישור הסופי שלכם, האלבום ייכנס לתהליך הדפסה ויישלח אליכם.
                </TimelineDescription>
                <TimelineDetail>
                  רק אחרי אישורכם האלבום יועבר להדפסה
                </TimelineDetail>
              </TimelineContent>
            </TimelineItem>
          </TimelineContainer>
        </ProcessSection>
        
        <DeliveryInfo>
          <DeliveryTitle>פרטי המשלוח</DeliveryTitle>
          <p>האלבום יישלח לכתובת שסיפקתם תוך 7 ימי עסקים מרגע האישור הסופי.</p>
          <p>ההדפסה, הכריכה והמשלוח כלולים במחיר ששילמתם.</p>
        </DeliveryInfo>
        
        <ContactSection>
          <ContactTitle>יש לכם שאלות?</ContactTitle>
          <p>אתם מוזמנים לפנות אלינו בכל שאלה או בקשה:</p>
          <WhatsAppLink href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer">
            שלחו לנו הודעה
          </WhatsAppLink>
        </ContactSection>
        
        <HomeLink to="/">חזרה לדף הבית</HomeLink>
      </SuccessContent>
    </SuccessContainer>
  );
};

export default SuccessPage;