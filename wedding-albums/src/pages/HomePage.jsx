import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ServiceFlowSection from '../components/ServiceFlow/ServiceFlowSection';
import CustomerControlSection from '../components/CustomerControl/CustomerControlSection';
import DriveForm from '../components/Form/DriveForm';
import PaymentSection from '../components/Payment/PaymentSection';
import AlbumSelection from '../components/Form/AlbumSelection';
import PricingSection from '../components/Form/PricingSection';
import GoogleReviewsSection from '../components/Reviews/GoogleReviewsSection';
import PurchaseIntentModal from '../components/Modal/PurchaseIntentModal';

const HeroSection = styled.div`
  background-color: #f8f4f0;
  padding: 80px 0;
  direction: rtl;
`;

const ContentContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VideoContainer = styled.div`
  flex: 0.7;
  max-width: 350px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16 / 9; /* Add fixed aspect ratio */
  
  @media (max-width: 768px) {
    max-width: 70%;
    margin: 30px auto 0;
  }
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: 700;
  color: #333;
  text-align: right;
  position: relative;
  
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

const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
  line-height: 1.5;
  color: #555;
  text-align: right;
`;

const CTAButton = styled.button`
  background-color: #e5a87f;
  color: white;
  font-size: 18px;
  padding: 14px 28px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(229, 168, 127, 0.3);
  font-weight: 600;
  align-self: flex-start;
  
  &:hover {
    background-color: #d8916a;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(229, 168, 127, 0.4);
  }
`;

const StorySection = styled.div`
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

const StoryContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr; /* Give more space to the text content */
  align-items: center;
  gap: 60px;
  direction: ltr; /* Switch direction for this container to allow swapping */
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const StoryContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 0;
  padding-left: 20px;
  direction: rtl; /* Keep text direction as RTL for Hebrew */
`;

const StoryImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  transform: translateY(-5px);
`;

const StoryHeading = styled.h2`
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
  position: relative;
  font-weight: 700;
  
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

const StoryText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 24px; /* Increased margin to create more space between paragraphs */
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  direction: rtl;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  color: #333;
`;

const FinalCTAContainer = styled(StoryContainer)`
  /* You can add any Final CTA specific styling overrides here if needed */
`;

const FinalCTAContent = styled(StoryContent)`
  /* You can add any Final CTA specific content styling here */
`;

const FinalCTAImageContainer = styled(StoryImageContainer)`
  /* You can add any Final CTA specific image styling here */
`;

const FinalCTAHeading = styled(StoryHeading)`
  /* You can add any Final CTA specific heading styling here */
`;

const FinalCTASection = styled.div`
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

const ContactSection = styled.div`
  background-color: #f8f9fa;
  padding: 60px 0;
  direction: rtl;
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  margin-bottom: 30px;
  color: #333;
  font-size: 32px;
`;

const ContactText = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  
  i {
    font-size: 24px;
    color: ${props => props.color || "#333"};
  }
`;

const ContactDetails = styled.div`
  text-align: right;
`;

const ContactMethodName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ContactInfo = styled.div`
  color: #555;
`;

const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const HomePage = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const [step, setStep] = useState('selection');
  const [formData, setFormData] = useState({});
  const [albumStyle, setAlbumStyle] = useState('');
  const [pageCount, setPageCount] = useState(30);
  const [albumDetailsReady, setAlbumDetailsReady] = useState(false);
  const [showPurchaseIntentModal, setShowPurchaseIntentModal] = useState(false);
  const [email, setEmail] = useState('');
  
  const videoRef = useRef(null);
  // Using the combined video instead of switching between two videos
  const combinedVideoPath = "/images/Video Premium Album_files/combined_hero_video.mp4";

  useEffect(() => {
    if (step !== 'selection') {
      setAlbumDetailsReady(true);
    }
  }, [step]);

  const handleStyleSelect = (style) => {
    setAlbumStyle(style);
    setStep('details');
    setAlbumDetailsReady(true);

    setTimeout(() => {
      const albumDetailsElement = document.getElementById('album-details');
      if (albumDetailsElement) {
        window.scrollTo({ 
          top: albumDetailsElement.offsetTop - 100, 
          behavior: 'smooth' 
        });
      }
    }, 100);
  };

  const handleDetailSubmit = (data) => {
    setFormData({...data, albumStyle, pageCount});
    setEmail(data.email || '');
    setShowPurchaseIntentModal(true);
  };

  const handleJoinWaitlist = (email) => {
    console.log("User joined waitlist with email:", email);
    setShowPurchaseIntentModal(false);
  };

  const handleCloseModal = () => {
    setShowPurchaseIntentModal(false);
  };

  const handlePaymentSuccess = () => {
    console.log("Payment successful");
  };

  const scrollToAlbumSelection = () => {
    const albumSelectionElement = document.getElementById('album-selection');
    if (albumSelectionElement) {
      albumSelectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroSection>
        <ContentContainer>
          <TextContainer>
            <Title>{t('site.tagline')}</Title>
            <Subtitle>{t('site.subtitle')}</Subtitle>
            <CTAButton onClick={scrollToAlbumSelection}>
              {t('site.ctaButton')}
            </CTAButton>
          </TextContainer>
          
          <VideoContainer>
            <VideoElement 
              ref={videoRef} 
              src={combinedVideoPath} 
              autoPlay 
              muted 
              loop 
              playsInline 
            />
          </VideoContainer>
        </ContentContainer>
      </HeroSection>

      <StorySection>
        <StoryContainer>
          <StoryContent>
            <StoryHeading>{t('story.title')}</StoryHeading>
            {t('story.paragraph').split('\n\n').map((paragraph, index) => (
              <StoryText key={index}>{paragraph}</StoryText>
            ))}
          </StoryContent>
          <StoryImageContainer>
            <img 
              src="/images/Story Image.jpg" 
              alt="רגעי חתונה מרגשים" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '8px' 
              }} 
            />
          </StoryImageContainer>
        </StoryContainer>
      </StorySection>

      <SectionContainer id="flow-section">
        <SectionTitle>{t('flow.title')}</SectionTitle>
        <ServiceFlowSection />
      </SectionContainer>

      <CustomerControlSection />

      <GoogleReviewsSection />

      <SectionContainer id="album-selection">
        <SectionTitle>{t('form.albumStyle.label')}</SectionTitle>
        <AlbumSelection onSelect={handleStyleSelect} />
      </SectionContainer>
      
      {albumDetailsReady && (
        <SectionContainer id="album-details">
          <SectionTitle>{t('form.title')}</SectionTitle>
          <PricingSection 
            albumStyle={albumStyle} 
            pageCount={pageCount}
            allowedPageCounts={[30, 50, 70]}
            onPageCountChange={setPageCount}
          />
        </SectionContainer>
      )}

      {step === 'details' && (
        <SectionContainer id="order">
          <SectionTitle>{t('form.driveLink.label')}</SectionTitle>
          <DriveForm onSubmit={handleDetailSubmit} pageCount={pageCount} />
        </SectionContainer>
      )}

      {step === 'payment' && (
        <SectionContainer>
          <SectionTitle>{t('payment.title')}</SectionTitle>
          <PaymentSection formData={formData} onSuccess={handlePaymentSuccess} />
        </SectionContainer>
      )}

      <ContactSection id="contact-section">
        <ContactContainer>
          <ContactTitle>{t('nav.contact')}</ContactTitle>
          <ContactText>יש לכם שאלות? אנחנו כאן בשבילכם! צרו איתנו קשר בכל דרך שנוחה לכם.</ContactText>
          
          <ContactMethods>
            <ContactMethod>
              <ContactIcon color="#25D366">
                <i className="fab fa-whatsapp"></i>
              </ContactIcon>
              <ContactDetails>
                <ContactMethodName>וואטסאפ</ContactMethodName>
                <ContactInfo>
                  <ContactLink href="https://wa.me/972501234567" target="_blank">050-1234567</ContactLink>
                </ContactInfo>
              </ContactDetails>
            </ContactMethod>
            
            <ContactMethod>
              <ContactIcon color="#4285F4">
                <i className="far fa-envelope"></i>
              </ContactIcon>
              <ContactDetails>
                <ContactMethodName>דוא"ל</ContactMethodName>
                <ContactInfo>
                  <ContactLink href="mailto:info@wedding-albums.co.il">info@wedding-albums.co.il</ContactLink>
                </ContactInfo>
              </ContactDetails>
            </ContactMethod>
            
            <ContactMethod>
              <ContactIcon color="#333">
                <i className="far fa-clock"></i>
              </ContactIcon>
              <ContactDetails>
                <ContactMethodName>שעות פעילות</ContactMethodName>
                <ContactInfo>ימים א'-ה', 9:00 - 17:00</ContactInfo>
              </ContactDetails>
            </ContactMethod>
          </ContactMethods>
        </ContactContainer>
      </ContactSection>

      <FinalCTASection>
        <FinalCTAContainer>
          <FinalCTAContent>
            <FinalCTAHeading>{t('cta.title')}</FinalCTAHeading>
            <CTAButton onClick={scrollToAlbumSelection}>
              {t('cta.button')}
            </CTAButton>
          </FinalCTAContent>
          <FinalCTAImageContainer>
            <img 
              src="/images/black_white_open_album.png" 
              alt="אלבום חתונה מרהיב" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '8px' 
              }} 
            />
          </FinalCTAImageContainer>
        </FinalCTAContainer>
      </FinalCTASection>

      {showPurchaseIntentModal && (
        <OverlayModal>
          <PurchaseIntentModal 
            email={email}
            onJoinWaitlist={handleJoinWaitlist}
            onClose={handleCloseModal}
          />
        </OverlayModal>
      )}
    </>
  );
};

export default HomePage;