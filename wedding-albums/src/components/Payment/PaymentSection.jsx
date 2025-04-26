import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PaymentLogo } from '../../utils/ImagePlaceholders';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  direction: rtl;
`;

const OrderSummary = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f4f0;
  border-radius: 8px;
`;

const SummaryTitle = styled.h3`
  margin: 0 0 20px 0;
  color: #333;
  text-align: center;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: ${props => props.final ? 'none' : '1px solid #e0e0e0'};
  font-weight: ${props => props.final ? 'bold' : 'normal'};
  font-size: ${props => props.final ? '18px' : '16px'};
`;

const SummaryLabel = styled.div``;

const SummaryValue = styled.div`
  color: ${props => props.highlighted ? '#9c6644' : 'inherit'};
`;

const ReassuranceBox = styled.div`
  margin: 30px 0;
  padding: 15px;
  background-color: #e8f5e9;
  border-radius: 8px;
  border-right: 4px solid #4caf50;
`;

const ReassuranceTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  
  &:before {
    content: "✓";
    margin-left: 10px;
    color: #4caf50;
    font-weight: bold;
  }
`;

const ReassuranceList = styled.ul`
  margin: 0;
  padding-right: 20px;
`;

const ReassuranceItem = styled.li`
  margin-bottom: 8px;
`;

const SecurityBadges = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 25px 0;
`;

const SecurityBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BadgeIcon = styled.div`
  font-size: 24px;
  color: #28a745;
`;

const BadgeText = styled.div`
  font-size: 14px;
  color: #555;
`;

const CardContainer = styled.div`
  margin-bottom: 25px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const SecurePaymentBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #28a745;
  font-size: 14px;
`;

const CardInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 16px;
  font-family: 'Assistant', sans-serif;
  background-color: #fff;
  
  &:focus {
    outline: none;
    border-color: #9c6644;
  }
`;

const CardRow = styled.div`
  display: flex;
  gap: 15px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
`;

const Agreement = styled.div`
  margin: 30px 0;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  font-size: 14px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
`;

const Checkbox = styled.input`
  margin-left: 10px;
  cursor: pointer;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const LegalLink = styled(Link)`
  color: #9c6644;
  text-decoration: underline;
  
  &:hover {
    color: #7d5035;
  }
`;

const PayButton = styled.button`
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

const ErrorMessage = styled.div`
  color: #e53935;
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ffebee;
  text-align: center;
`;

const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

// Album style pricing data
const albumPricing = {
  classic: {
    name: 'קלאסי',
    basePrice: 499,
    additionalPagePrice: 15
  },
  modern: {
    name: 'מודרני',
    basePrice: 599,
    additionalPagePrice: 18
  },
  vintage: {
    name: 'וינטג\'',
    basePrice: 549,
    additionalPagePrice: 17
  },
  premium: {
    name: 'פרימיום',
    basePrice: 799,
    additionalPagePrice: 25
  }
};

const PaymentSection = ({ formData, onSuccess }) => {
  const { t } = useTranslation();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate price based on album style and page count
  const albumStyle = formData.albumStyle || 'classic';
  const pageCount = formData.pageCount || 20;
  const pricing = albumPricing[albumStyle] || albumPricing.classic;
  const basePrice = pricing.basePrice;
  const additionalPages = Math.max(0, pageCount - 20);
  const additionalPagesCost = additionalPages * pricing.additionalPagePrice;
  const totalPrice = basePrice + additionalPagesCost;
  
  const formatCardNumber = (value) => {
    // Format card number with spaces after every 4 digits
    const formattedValue = value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formattedValue);
  };
  
  const formatExpiryDate = (value) => {
    // Format expiry date as MM/YY
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 2) {
      setExpiryDate(cleaned);
    } else {
      setExpiryDate(`${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Validate form
    if (!cardNumber || !expiryDate || !cvc) {
      setError('נא למלא את כל פרטי התשלום');
      return;
    }
    
    if (!agreementChecked) {
      setError('יש לאשר את תנאי השימוש ומדיניות הפרטיות');
      return;
    }
    
    // Mock payment processing
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <Container>
      <OrderSummary>
        <SummaryTitle>סיכום הזמנה</SummaryTitle>
        <SummaryRow>
          <SummaryLabel>סגנון אלבום</SummaryLabel>
          <SummaryValue>{pricing.name}</SummaryValue>
        </SummaryRow>
        <SummaryRow>
          <SummaryLabel>מספר עמודים</SummaryLabel>
          <SummaryValue>{pageCount}</SummaryValue>
        </SummaryRow>
        <SummaryRow>
          <SummaryLabel>מחיר בסיס</SummaryLabel>
          <SummaryValue>{basePrice} ₪</SummaryValue>
        </SummaryRow>
        {additionalPages > 0 && (
          <SummaryRow>
            <SummaryLabel>עמודים נוספים ({additionalPages})</SummaryLabel>
            <SummaryValue>{additionalPagesCost} ₪</SummaryValue>
          </SummaryRow>
        )}
        <SummaryRow>
          <SummaryLabel>משלוח</SummaryLabel>
          <SummaryValue>0 ₪</SummaryValue>
        </SummaryRow>
        <SummaryRow final>
          <SummaryLabel>סה"כ לתשלום</SummaryLabel>
          <SummaryValue highlighted>{totalPrice} ₪</SummaryValue>
        </SummaryRow>
      </OrderSummary>
      
      <SecurityBadges>
        <SecurityBadge>
          <BadgeIcon><i className="fas fa-lock"></i></BadgeIcon>
          <BadgeText>תשלום מאובטח</BadgeText>
        </SecurityBadge>
        <SecurityBadge>
          <BadgeIcon><i className="fas fa-shield-alt"></i></BadgeIcon>
          <BadgeText>הגנת לקוחות</BadgeText>
        </SecurityBadge>
        <SecurityBadge>
          <BadgeIcon><i className="fas fa-undo"></i></BadgeIcon>
          <BadgeText>מדיניות החזרים</BadgeText>
        </SecurityBadge>
      </SecurityBadges>
      
      <PaymentMethods>
        <PaymentLogo type="visa" />
        <PaymentLogo type="mastercard" />
        <PaymentLogo type="amex" />
      </PaymentMethods>
      
      <ReassuranceBox>
        <ReassuranceTitle>שליטה מלאה לפני הדפסה והעיצוב הסופי</ReassuranceTitle>
        <ReassuranceList>
          <ReassuranceItem>תקבלו קישור לגלריה עם התמונות הנבחרות וחלופות מומלצות</ReassuranceItem>
          <ReassuranceItem>תוכלו לבקש החלפת תמונות בקלות דרך WhatsApp על ידי ציון מספר התמונה</ReassuranceItem>
          <ReassuranceItem>האלבום יודפס רק לאחר שתאשרו את הבחירה הסופית</ReassuranceItem>
          <ReassuranceItem>זמן אספקה: תוך 7 ימי עסקים מרגע האישור</ReassuranceItem>
        </ReassuranceList>
      </ReassuranceBox>
      
      <form onSubmit={handleSubmit}>
        <CardContainer>
          <CardHeader>
            <CardTitle>פרטי תשלום</CardTitle>
            <SecurePaymentBadge>
              <i className="fas fa-lock"></i> מאובטח
            </SecurePaymentBadge>
          </CardHeader>
          
          <FormLabel htmlFor="cardNumber">{t('payment.cardNumber')}</FormLabel>
          <CardInput
            type="text"
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => formatCardNumber(e.target.value)}
            maxLength="19"
          />
          
          <CardRow>
            <div style={{ flex: 1 }}>
              <FormLabel htmlFor="expiryDate">{t('payment.expiry')}</FormLabel>
              <CardInput
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => formatExpiryDate(e.target.value)}
                maxLength="5"
              />
            </div>
            
            <div style={{ flex: 1 }}>
              <FormLabel htmlFor="cvc">{t('payment.cvc')}</FormLabel>
              <CardInput
                type="text"
                id="cvc"
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
                maxLength="3"
              />
            </div>
          </CardRow>
        </CardContainer>
        
        <Agreement>
          <CheckboxLabel>
            <Checkbox 
              type="checkbox" 
              checked={agreementChecked}
              onChange={() => setAgreementChecked(!agreementChecked)}
            />
            {t('payment.agreement')}
          </CheckboxLabel>
          <LegalLinks>
            <LegalLink to="/privacy">{t('payment.privacyPolicy')}</LegalLink>
            <LegalLink to="/terms">{t('payment.termsOfService')}</LegalLink>
          </LegalLinks>
        </Agreement>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <PayButton type="submit" disabled={isProcessing}>
          {isProcessing ? 'מעבד תשלום...' : t('payment.submit')}
        </PayButton>
      </form>
    </Container>
  );
};

export default PaymentSection;