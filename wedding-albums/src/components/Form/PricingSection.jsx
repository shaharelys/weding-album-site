import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
  }
`;

const Label = styled.h3`
  margin: 0 0 15px 0;
  color: #333;
`;

const PageOptions = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const PageOption = styled.div`
  flex: 1;
  padding: 15px 10px;
  border: 2px solid ${props => props.selected ? '#9c6644' : '#e0e0e0'};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => props.selected ? '#f8f4f0' : 'transparent'};
  
  &:hover {
    background-color: #f8f4f0;
    border-color: ${props => props.selected ? '#9c6644' : '#ccc'};
  }
`;

const PageCount = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const PhotoEstimate = styled.div`
  font-size: 14px;
  color: #666;
`;

const PageInfo = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

const PhotoCount = styled.div`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-top: 20px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #f9f4f0;
  padding: 20px;
  border-radius: 10px;
`;

const PriceBefore = styled.div`
  text-decoration: line-through;
  color: #999;
  font-size: 16px;
  margin-bottom: 5px;
`;

const CurrentPrice = styled.div`
  font-size: 30px;
  color: #9c6644;
  font-weight: bold;
`;

const PriceNote = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

const SatisfactionGuarantee = styled.div`
  background-color: #f8f4f0;
  border-radius: 6px;
  padding: 15px 20px;
  border-right: 3px solid #9c6644;
  margin-top: 20px;
  text-align: right;
  font-size: 15px;
  line-height: 1.5;
  color: #444;
`;

// Album style pricing data
const albumPricing = {
  leather: {
    name: 'אלבום עור',
    basePrice: 649,
    additionalPagePrice: 20,
    priceFor30Pages: 649, // Base price already includes 30 pages
    priceFor50Pages: 649 + (20 * 20), // Base plus 20 additional pages
    priceFor70Pages: 649 + (40 * 20), // Base plus 40 additional pages
  },
  linen: {
    name: 'אלבום פשתן',
    basePrice: 599,
    additionalPagePrice: 18,
    priceFor30Pages: 599, // Base price already includes 30 pages
    priceFor50Pages: 599 + (20 * 18), // Base plus 20 additional pages
    priceFor70Pages: 599 + (40 * 18), // Base plus 40 additional pages
  },
  basic: {
    name: 'אלבום פשוט',
    basePrice: 499,
    additionalPagePrice: 15,
    priceFor30Pages: 499, // Base price already includes 30 pages
    priceFor50Pages: 499 + (20 * 15), // Base plus 20 additional pages
    priceFor70Pages: 499 + (40 * 15), // Base plus 40 additional pages
  }
};

const PricingSection = ({ albumStyle, pageCount, allowedPageCounts = [30, 50, 70], onPageCountChange }) => {
  const [photosCount, setPhotosCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const standardPages = 30; // The base price now includes 30 pages
  const photosPerPage = 3;
  
  useEffect(() => {
    // Calculate total price based on album style and page count
    const pricing = albumPricing[albumStyle] || albumPricing.basic;
    
    // Use pre-calculated prices for common page counts
    if (pageCount === 30) {
      setTotalPrice(pricing.priceFor30Pages);
    } else if (pageCount === 50) {
      setTotalPrice(pricing.priceFor50Pages);
    } else if (pageCount === 70) {
      setTotalPrice(pricing.priceFor70Pages);
    } else {
      // For any custom page count
      const additionalPages = Math.max(0, pageCount - standardPages);
      const price = pricing.basePrice + (additionalPages * pricing.additionalPagePrice);
      setTotalPrice(price);
    }
    
    // Calculate estimated photos count
    setPhotosCount(pageCount * photosPerPage);
  }, [albumStyle, pageCount]);
  
  const handleSelectPageCount = (count) => {
    onPageCountChange(count);
  };
  
  const pricing = albumPricing[albumStyle] || albumPricing.basic;
  
  return (
    <Container>
      <Row>
        <Column>
          <Label>מספר עמודים</Label>
          <PageOptions>
            {allowedPageCounts.map((count) => (
              <PageOption 
                key={count}
                selected={pageCount === count}
                onClick={() => handleSelectPageCount(count)}
              >
                <PageCount>{count}</PageCount>
                <PhotoEstimate>~{count * photosPerPage} תמונות</PhotoEstimate>
              </PageOption>
            ))}
          </PageOptions>
          <PageInfo>יש לבחור את מספר העמודים הרצוי לאלבום. 3 תמונות בממוצע לכל עמוד.</PageInfo>
          <PhotoCount>האלבום יכיל כ-{photosCount} תמונות</PhotoCount>
        </Column>
        <Column>
          <PriceContainer>
            {pageCount > 30 ? (
              <PriceBefore>{pricing.priceFor30Pages} ₪</PriceBefore>
            ) : null}
            <CurrentPrice>{totalPrice} ₪</CurrentPrice>
            <PriceNote>כולל הדפסה ומשלוח</PriceNote>
          </PriceContainer>
        </Column>
      </Row>
      
      <SatisfactionGuarantee>
         חשוב לדעת כי תוכלו לקבל החזר כספי מלא, ללא שאלות, במקרה שאינכם שבעי רצון מבחירת התמונות
      </SatisfactionGuarantee>
    </Container>
  );
};

export default PricingSection;