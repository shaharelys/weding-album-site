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

const TermsOfService = () => {
  const { } = useTranslation(); // Remove unused t variable

  return (
    <Container>
      <Title>תנאי שימוש</Title>

      <Section>
        <SectionTitle>1. הסכמה לתנאים</SectionTitle>
        <p>
          על ידי שימוש בשירות שלנו, אתם מסכימים לתנאי השימוש הבאים. אם אינכם מסכימים לתנאים אלה, אנא אל תשתמשו בשירות שלנו.
        </p>
      </Section>

      <Section>
        <SectionTitle>2. תיאור השירות</SectionTitle>
        <p>
          שירות "אלבום חתונה אוטומטי" מציע יצירת אלבום חתונה מודפס מתמונות החתונה שלכם. אנו מבצעים בחירה של התמונות הטובות ביותר, עורכים אותן ומעצבים אלבום מודפס שנשלח לכתובתכם.
        </p>
      </Section>

      <Section>
        <SectionTitle>3. תהליך השירות</SectionTitle>
        <p>
          לאחר הגשת הקישור ל-Google Drive והתשלום, תוך 7 ימי עסקים תקבלו קישור לגלריה עם התמונות הנבחרות ואפשרויות חלופיות. ניתן לבקש שינויים דרך WhatsApp על ידי ציון מספר התמונה שברצונכם להחליף. לאחר אישורכם, האלבום המודפס יישלח אליכם תוך 7 ימי עסקים.
        </p>
      </Section>

      <Section>
        <SectionTitle>4. תשלומים</SectionTitle>
        <p>
          התשלום מתבצע מראש ובמלואו. מחיר השירות הוא כפי שמצוין באתר בעת ההזמנה. המחיר כולל את עיצוב האלבום, הדפסתו ומשלוח בתוך ישראל.
        </p>
      </Section>

      <Section>
        <SectionTitle>5. מדיניות ביטולים והחזרים</SectionTitle>
        <p>
          ניתן לבטל את ההזמנה תוך 14 יום מיום ההזמנה או עד לאישור הגלריה הסופית, המוקדם מביניהם. לאחר אישור הגלריה הסופית לא ניתן לבטל את ההזמנה. במקרה של ביטול בהתאם למדיניות זו, תהיו זכאים להחזר מלא פחות דמי טיפול בסך 50 ש"ח.
        </p>
      </Section>

      <Section>
        <SectionTitle>6. זכויות יוצרים</SectionTitle>
        <p>
          אתם מצהירים כי הנכם בעלי זכויות היוצרים על התמונות שהועלו או שקיבלתם הרשאה חוקית להשתמש בהן לצורך יצירת האלבום. אתם מעניקים לנו רישיון להשתמש בתמונות אלו אך ורק לצורך יצירת האלבום עבורכם.
        </p>
      </Section>

      <Section>
        <SectionTitle>7. אחריות</SectionTitle>
        <p>
          אחריות על האלבום המודפס היא לתקופה של 30 יום מיום קבלתו. האחריות מכסה פגמים בהדפסה או בכריכה בלבד ואינה מכסה נזקים שנגרמו על ידי שימוש לא נאות.
        </p>
      </Section>

      <Section>
        <SectionTitle>8. שינויים בתנאי השימוש</SectionTitle>
        <p>
          אנו שומרים לעצמנו את הזכות לשנות תנאי שימוש אלה בכל עת. שינויים אלה ייכנסו לתוקף מיד עם פרסומם באתר. המשך השימוש בשירותים שלנו לאחר פרסום שינויים אלה מהווה את הסכמתכם לתנאים המעודכנים.
        </p>
      </Section>
    </Container>
  );
};

export default TermsOfService;