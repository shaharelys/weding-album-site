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
  // Get translations but provide fallbacks in case they're not available
  const { t } = useTranslation();

  // Use a simple try/catch to prevent the component from crashing
  try {
    return (
      <SuccessContainer>
        <SuccessContent>
          <SuccessIcon />
          <SuccessTitle>{t('successPage.mainTitle', 'ההזמנה שלך התקבלה!')}</SuccessTitle>
          <SuccessMessage>{t('successPage.mainMessage', 'תודה שבחרת לעצב אלבום חתונה איתנו. אנחנו מתרגשים להתחיל לעבוד על האלבום המושלם עבורכם.')}</SuccessMessage>

          <ProcessSection>
            <ProcessTitle>{t('successPage.processTitle', 'מה קורה עכשיו?')}</ProcessTitle>

            <TimelineContainer>
              <TimelineItem>
                <TimelineDot>1</TimelineDot>
                <TimelineContent>
                  <TimelineTitle>{t('successPage.timeline.item1.title', 'בחירת התמונות')}</TimelineTitle>
                  <TimelineDescription>
                    {t('successPage.timeline.item1.description', 'צוות העורכים שלנו יעבור על התמונות שלכם ויבחר את התמונות המושלמות לאלבום שלכם.')}
                  </TimelineDescription>
                  <TimelineDetail>
                    {t('successPage.timeline.item1.detail', 'זמן משוער: עד 7 ימי עסקים')}
                  </TimelineDetail>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineDot>2</TimelineDot>
                <TimelineContent>
                  <TimelineTitle>{t('successPage.timeline.item2.title', 'קישור לגלריה מוצעת')}</TimelineTitle>
                  <TimelineDescription>
                    {t('successPage.timeline.item2.description', 'תקבלו אימייל עם קישור לגלריה מוצעת הכוללת את התמונות שנבחרו ותמונות חלופיות מומלצות.')}
                  </TimelineDescription>
                  <TimelineDetail>
                    {t('successPage.timeline.item2.detail', 'כל תמונה מסומנת במספר ייחודי לצורך זיהוי קל')}
                  </TimelineDetail>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineDot>3</TimelineDot>
                <TimelineContent>
                  <TimelineTitle>{t('successPage.timeline.item3.title', 'אישור או בקשת שינויים')}</TimelineTitle>
                  <TimelineDescription>
                    {t('successPage.timeline.item3.description', 'תוכלו לאשר את הבחירה או לבקש להחליף תמונות לפי העדפתכם.')}
                  </TimelineDescription>
                  <TimelineDetail>
                    {t('successPage.timeline.item3.detail', 'פשוט שלחו לנו הודעת WhatsApp עם מספרי התמונות שברצונכם להחליף והחלופות המועדפות.')}
                  </TimelineDetail>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineDot>4</TimelineDot>
                <TimelineContent>
                  <TimelineTitle>{t('successPage.timeline.item4.title', 'הדפסה ומשלוח')}</TimelineTitle>
                  <TimelineDescription>
                    {t('successPage.timeline.item4.description', 'לאחר האישור הסופי שלכם, האלבום ייכנס לתהליך הדפסה ויישלח אליכם.')}
                  </TimelineDescription>
                  <TimelineDetail>
                    {t('successPage.timeline.item4.detail', 'רק אחרי אישורכם האלבום יועבר להדפסה')}
                  </TimelineDetail>
                </TimelineContent>
              </TimelineItem>
            </TimelineContainer>
          </ProcessSection>

          <DeliveryInfo>
            <DeliveryTitle>{t('successPage.deliveryTitle', 'פרטי המשלוח')}</DeliveryTitle>
            <p>{t('successPage.deliveryInfo.line1', 'האלבום יישלח לכתובת שסיפקתם תוך 7 ימי עסקים מרגע האישור הסופי.')}</p>
            <p>{t('successPage.deliveryInfo.line2', 'ההדפסה, הכריכה והמשלוח כלולים במחיר ששילמתם.')}</p>
          </DeliveryInfo>

          <ContactSection>
            <ContactTitle>{t('successPage.contactTitle', 'יש לכם שאלות?')}</ContactTitle>
            <p>{t('successPage.contactMessage', 'אתם מוזמנים לפנות אלינו בכל שאלה או בקשה:')}</p>
            <WhatsAppLink href="https://wa.me/972544666185" target="_blank" rel="noopener noreferrer">
              {t('successPage.whatsappLinkText', 'שלחו לנו הודעה')}
            </WhatsAppLink>
          </ContactSection>

          <HomeLink to="/">{t('successPage.homeLinkText', 'חזרה לדף הבית')}</HomeLink>
        </SuccessContent>
      </SuccessContainer>
    );
  } catch (error) {
    // Log the error and provide a simple fallback UI
    console.error("Error rendering SuccessPage:", error);
    return (
      <div style={{ margin: '100px auto', textAlign: 'center', maxWidth: '500px' }}>
        <h1>{t('successPage.fallback.mainTitle', 'ההזמנה שלך התקבלה!')}</h1>
        <p>{t('successPage.fallback.message1', 'תודה שבחרת לעצב אלבום חתונה איתנו.')}</p>
        <p>{t('successPage.fallback.message2', 'אנחנו מתרגשים להתחיל לעבוד על האלבום המושלם עבורכם.')}</p>
        <div style={{ marginTop: '30px' }}>
          <Link to="/" style={{
            padding: '10px 20px',
            background: '#9c6644',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}>
            {t('successPage.fallback.homeLinkText', 'חזרה לדף הבית')}
          </Link>
        </div>
      </div>
    );
  }
};

export default SuccessPage;