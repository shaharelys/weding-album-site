import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { AvatarPlaceholder } from '../../utils/ImagePlaceholders';

const ReviewsContainer = styled.div`
  background-color: #f8f9fa;
  padding: 80px 0;
  direction: rtl;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 100px;
    height: 100px;
    background-color: rgba(156, 102, 68, 0.1);
    border-radius: 50%;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -30px;
    right: -30px;
    width: 150px;
    height: 150px;
    background-color: rgba(156, 102, 68, 0.05);
    border-radius: 50%;
  }
`;

const ReviewsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const ReviewsTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 32px;
  color: #333;
  position: relative;
  display: inline-block;
`;

const ReviewsSubtitle = styled.p`
  margin-bottom: 40px;
  font-size: 18px;
  color: #555;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  padding: 25px;
  text-align: right;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    height: 0;
    background-color: #9c6644;
    transition: height 0.3s ease;
  }
  
  &:hover:before {
    height: 100%;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const AvatarContainer = styled.div`
  margin-left: 15px;
  transform: scale(1);
  transition: transform 0.3s ease;
  
  ${ReviewCard}:hover & {
    transform: scale(1.1);
  }
`;

const ReviewerInfo = styled.div`
  flex: 1;
`;

const ReviewerName = styled.h4`
  margin: 0 0 5px;
  color: #333;
  font-size: 16px;
`;

const ReviewDate = styled.p`
  margin: 0;
  font-size: 14px;
  color: #777;
`;

const ReviewStars = styled.div`
  color: #fbbc05;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  flex: 1;
`;

const QuoteIcon = styled.div`
  font-size: 64px;
  color: #f0f0f0;
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: Georgia, serif;
  line-height: 1;
  
  &:before {
    content: '"';
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 8px;
`;

const PaginationDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#9c6644' : '#d0d0d0'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0;
  
  &:hover {
    background-color: ${props => props.active ? '#9c6644' : '#b0b0b0'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(156, 102, 68, 0.4);
  }
`;

const GoogleReviewsSection = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  
  // Mock data - would be replaced with actual reviews from an API or database
  const reviews = [
    {
      id: 1,
      name: 'דנה כהן',
      date: '2025-04-15',
      rating: 5,
      text: 'האלבום יצא פשוט מושלם! חששנו מהבחירה אבל היה ממש סבבה. התהליך עם הממשק שלכם היה ממש נוח והיו את כל התמונות שרצינו (באלבום עם הגלריה בצד). והתוצאה הסופית היא אלבום מהמם שכיף לנו להראות לכולם. גם איכות ההדפסה והכריכה מצוינות!',
      avatar: '/images/reviewer1-placeholder.jpg'
    },
    {
      id: 2,
      name: 'אורי ורונית לוי',
      date: '2025-04-07',
      rating: 5,
      text: 'שירות מעולה!!! מההתחלה ועד הסוף. המעצבים בחרו תמונות מדהימות והתהליך היה פשוט וקל. האלבום הסופי נראה מקצועי ביותר וכל המשפחה מתלהבת ממנו.',
      avatar: '/images/reviewer2-placeholder.jpg'
    },
    {
      id: 3,
      name: 'שירה גולן',
      date: '2025-03-29',
      rating: 5,
      text: 'חששנו מהתהליך כי היו לנו יותר מ-4000 תמונות, אבל האלבום שקיבלנו הוא בדיוק מה שרצינו. הבחירה הראשונית של התמונות הייתה מדויקת, ועדיין יכולנו להחליף כמה שרצינו בקלות. בלי אלבומה לא היינו עושים את זה כמו הרבה חברים שלי.',
      avatar: '/images/reviewer3-placeholder.jpg'
    },
    {
      id: 4,
      name: 'מיכאל ברקוביץ',
      date: '2025-03-22',
      rating: 4,
      text: 'אלבום איכותי מאוד. הבחירה של התמונות הייתה מצוינת והעיצוב מקצועי. הסיבה לכוכב אחד פחות היא שהיה קצת עיכוב בזמני האספקה, אבל התוצאה הסופית שווה את ההמתנה.',
      avatar: '/images/reviewer4-placeholder.jpg'
    },
    {
      id: 5,
      name: 'נועה אדלר',
      date: '2025-03-10',
      rating: 5,
      text: 'פשוט מושלם! התהליך היה קל, המחיר הוגן והאלבום מרהיב. אני ממליצה בחום לכל זוג שמחפש דרך קלה לארגן את תמונות החתונה באלבום איכותי.',
      avatar: '/images/reviewer5-placeholder.jpg'
    },
    {
      id: 6,
      name: 'יואב ורותם כהן',
      date: '2025-02-02',
      rating: 5,
      text: 'תודה רבה על אלבום חתונה מושלם! הבחירה הראשונית של התמונות הייתה מצוינת, ואהבנו את האפשרות לעבור על האלבום ולעשות שינויים אחרונים בקלות. התוצאה עלתה על כל הציפיות, וחברים שראו את האלבום כבר ביקשו את הפרטים שלכם.',
      avatar: '/images/reviewer6-placeholder.jpg'
    }
  ];
  
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  
  // Display reviews for current page
  const displayedReviews = reviews.slice(
    currentPage * reviewsPerPage, 
    (currentPage + 1) * reviewsPerPage
  );
  
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL');
  };
  
  return (
    <ReviewsContainer>
      <ReviewsContent>
        <ReviewsTitle>{t('reviews.title')}</ReviewsTitle>
        <ReviewsSubtitle>
          הנה כמה דברים ששמענו מלקוחות שכבר הזמינו אצלנו אלבום
        </ReviewsSubtitle>
        
        <ReviewsGrid>
          {displayedReviews.map(review => (
            <ReviewCard key={review.id}>
              <QuoteIcon aria-hidden="true" />
              <ReviewHeader>
                <AvatarContainer>
                  <AvatarPlaceholder name={review.name} />
                </AvatarContainer>
                <ReviewerInfo>
                  <ReviewerName>{review.name}</ReviewerName>
                  <ReviewDate>{formatDate(review.date)}</ReviewDate>
                </ReviewerInfo>
              </ReviewHeader>
              <ReviewStars aria-label={`דירוג ${review.rating} מתוך 5 כוכבים`}>
                {renderStars(review.rating)}
              </ReviewStars>
              <ReviewText>{review.text}</ReviewText>
            </ReviewCard>
          ))}
        </ReviewsGrid>
        
        {totalPages > 1 && (
          <Pagination role="navigation" aria-label="ניווט בין ביקורות">
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationDot 
                key={index}
                active={index === currentPage}
                onClick={() => handlePageChange(index)}
                aria-label={`עמוד ${index + 1} מתוך ${totalPages}`}
                aria-current={index === currentPage ? "page" : undefined}
              />
            ))}
          </Pagination>
        )}
      </ReviewsContent>
    </ReviewsContainer>
  );
};

export default GoogleReviewsSection;