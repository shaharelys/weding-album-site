import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

const PrivacyPolicy = () => {
  const { } = useTranslation(); // Remove unused t variable

  return (
    <Container>
      <Title>מדיניות פרטיות</Title>

      <Section>
        <SectionTitle>1. איסוף מידע</SectionTitle>
        <p>
          אנו אוספים מידע אישי כגון שם, כתובת, מספר טלפון וכתובת דואר אלקטרוני כאשר אתם מזמינים את השירות שלנו. בנוסף, אנו מקבלים גישה לתמונות החתונה שלכם דרך קישור ה-Google Drive שאתם מספקים.
        </p>
      </Section>

      <Section>
        <SectionTitle>2. שימוש במידע</SectionTitle>
        <p>
          המידע האישי שנאסף משמש אותנו ליצירת האלבום שלכם, שליחת עדכונים לגבי ההזמנה שלכם, ושליחת האלבום המודפס לכתובת שסיפקתם.
        </p>
        <p>
          התמונות שלכם ישמשו אך ורק ליצירת האלבום שלכם ולא יועברו לצד שלישי ללא הסכמתכם המפורשת.
        </p>
      </Section>

      <Section>
        <SectionTitle>3. אבטחת מידע</SectionTitle>
        <p>
          אנו נוקטים באמצעי אבטחה מתקדמים כדי להגן על המידע האישי שלכם ועל התמונות שלכם מפני גישה לא מורשית, שימוש לא נאות או חשיפה.
        </p>
      </Section>

      <Section>
        <SectionTitle>4. שמירת מידע</SectionTitle>
        <p>
          אנו שומרים את המידע האישי שלכם ואת התמונות שלכם למשך זמן סביר הנדרש לצורך מתן השירות שלנו. לאחר מסירת האלבום המודפס, הקבצים הדיגיטליים יישמרו למשך 30 יום נוספים ואז יימחקו ממערכותינו.
        </p>
      </Section>

      <Section>
        <SectionTitle>5. זכויות הפרטיות שלכם</SectionTitle>
        <p>
          יש לכם את הזכות לבקש גישה למידע האישי שלכם, לתקן אותו, למחוק אותו או להתנגד לעיבוד המידע שלכם. אתם יכולים לפנות אלינו בכל עת באמצעות פרטי הקשר שלנו.
        </p>
      </Section>

      <Section>
        <SectionTitle>6. עדכונים למדיניות הפרטיות</SectionTitle>
        <p>
          אנו עשויים לעדכן מדיניות זו מעת לעת. העדכונים יפורסמו באתר שלנו ויהיו בתוקף מיד עם פרסומם.
        </p>
      </Section>
    </Container>
  );
};

export default PrivacyPolicy;