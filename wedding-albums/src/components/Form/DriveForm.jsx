import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #333;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Assistant', sans-serif;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #9c6644;
  }
`;

const Instructions = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

const ErrorText = styled.div`
  color: #e53935;
  font-size: 14px;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 14px;
  background-color: #9c6644;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #7d5035;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const InfoBox = styled.div`
  background-color: #f8f4f0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
`;

const InfoTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
  display: flex;
  align-items: center;
  
  &:before {
    content: "✨";
    margin-left: 10px;
    font-size: 20px;
  }
`;

const InfoText = styled.p`
  margin: 0 0 10px 0;
  color: #555;
  font-size: 15px;
  line-height: 1.5;
`;

const LimitNotice = styled.div`
  background-color: #fff3e0;
  border-right: 3px solid #ff9800;
  padding: 10px 15px;
  margin-top: 15px;
  font-size: 14px;
  color: #7f5400;
`;

const TransparentProcess = styled.div`
  margin-top: 30px;
  border-top: 1px solid #eee;
  padding-top: 25px;
`;

const ProcessTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const ProcessSteps = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProcessStep = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  min-width: 200px;
`;

const StepNumber = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: #9c6644;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 24px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
`;

const StepText = styled.div`
  display: inline-block;
  font-weight: 600;
`;

const StepDescription = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  color: #666;
`;

const DriveForm = ({ onSubmit, pageCount }) => {
  const { t } = useTranslation();
  const photosPerPage = 3;
  const estimatedPhotos = pageCount * photosPerPage;
  
  // Validation schema
  const validationSchema = Yup.object({
    driveLink: Yup.string()
      .required('קישור ל-Google Drive הוא שדה חובה')
      .matches(
        /^https:\/\/(drive\.google\.com|docs\.google\.com)/,
        'נא להזין קישור תקין של Google Drive'
      ),
    fullName: Yup.string().required('שם מלא הוא שדה חובה'),
    email: Yup.string().email('כתובת אימייל לא תקינה').required('אימייל הוא שדה חובה'),
    phone: Yup.string().required('מספר טלפון הוא שדה חובה'),
    address: Yup.string().required('כתובת למשלוח היא שדה חובה'),
  });

  return (
    <FormContainer>
      <InfoBox>
        <InfoTitle>אין צורך לבחור - אנחנו עושים זאת עבורכם</InfoTitle>
        <InfoText>צוות העורכים שלנו יבחר את התמונות הטובות ביותר מהאוסף שלכם ויעצב עבורכם אלבום מושלם.</InfoText>
        <InfoText>אנו נבחר כ-{estimatedPhotos} תמונות מרהיבות עבור האלבום שלכם, בהתאם למספר העמודים שבחרתם.</InfoText>
        <LimitNotice>ניתן להעלות עד 5000 תמונות בסך הכל</LimitNotice>
      </InfoBox>
      
      <Formik
        initialValues={{
          driveLink: '',
          fullName: '',
          email: '',
          phone: '',
          address: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <Label htmlFor="driveLink">{t('form.driveLink.label')}</Label>
              <Input 
                type="text" 
                id="driveLink" 
                name="driveLink" 
                placeholder="https://drive.google.com/drive/folders/..."
              />
              <Instructions>
                יש להעלות את כל התמונות ל-Google Drive ולשתף אותן עם הרשאת צפייה לכל מי שיש לו את הקישור.
                העתיקו את הקישור לתיבה למעלה.
              </Instructions>
              <ErrorMessage name="driveLink" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="fullName">שם מלא</Label>
              <Input 
                type="text" 
                id="fullName" 
                name="fullName" 
                placeholder="הזן את שמך המלא"
              />
              <ErrorMessage name="fullName" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">אימייל</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="הזן את כתובת האימייל שלך"
              />
              <ErrorMessage name="email" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">מספר טלפון</Label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="הזן את מספר הטלפון שלך"
                style={{ textAlign: 'right' }}
              />
              <ErrorMessage name="phone" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="address">כתובת למשלוח</Label>
              <Input 
                type="text" 
                id="address" 
                name="address" 
                placeholder="הזן כתובת מלאה למשלוח האלבום"
              />
              <ErrorMessage name="address" component={ErrorText} />
            </FormGroup>
            
            <TransparentProcess>
              <ProcessTitle>מה יקרה אחרי השליחה?</ProcessTitle>
              <ProcessSteps>
                <ProcessStep>
                  <StepNumber>1</StepNumber>
                  <StepText>בחירת התמונות</StepText>
                  <StepDescription>
                    תוך 7 ימי עסקים תקבלו קישור לגלריה עם התמונות הנבחרות + תמונות חלופיות מומלצות
                  </StepDescription>
                </ProcessStep>
                <ProcessStep>
                  <StepNumber>2</StepNumber>
                  <StepText>שליטה מלאה</StepText>
                  <StepDescription>
                    תוכלו לסדר את התמונות באלבום בקלות - פשוט גררו ושחררו כדי לראות מיד איך ייראה האלבום המושלם שלכם
                  </StepDescription>
                </ProcessStep>
                <ProcessStep>
                  <StepNumber>3</StepNumber>
                  <StepText>אישור והדפסה</StepText>
                  <StepDescription>
                    רק לאחר אישורכם הסופי, האלבום יודפס ויישלח לכתובתכם תוך 7 ימי עסקים
                  </StepDescription>
                </ProcessStep>
              </ProcessSteps>
            </TransparentProcess>

            <SubmitButton type="submit" disabled={isSubmitting}>
              המשך לתשלום
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default DriveForm;