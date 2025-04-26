import React from 'react';
import styled from 'styled-components';

// Placeholder component that renders a colored box with text
const ImagePlaceholder = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '200px'};
  background-color: ${props => props.bgColor || '#e0e0e0'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.textColor || '#666'};
  font-size: ${props => props.fontSize || '14px'};
  border-radius: ${props => props.rounded ? '8px' : '0'};
  background-image: ${props => props.gradient ? 
    'linear-gradient(to right bottom, #f5f5f5, #e0e0e0)' : 'none'};
  position: relative;
  overflow: hidden;
  padding: 15px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${props => props.pattern ? 
      'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)' : 'none'};
    background-size: ${props => props.pattern ? '20px 20px' : '0'};
  }
`;

const IconOverlay = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:before {
    content: "🖼️";
    font-size: 16px;
  }
`;

// Wedding album cover placeholder
export const WeddingAlbumCover = ({ style }) => (
  <ImagePlaceholder 
    height="300px" 
    bgColor="#f9eae1" 
    rounded 
    pattern
  >
    <IconOverlay />
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>אלבום חתונה</div>
      <div style={{ fontSize: '16px' }}>סגנון: {style || 'קלאסי'}</div>
    </div>
  </ImagePlaceholder>
);

// Hero background placeholder
export const HeroBackground = ({ children }) => (
  <ImagePlaceholder 
    height="500px" 
    bgColor="#2c3e50" 
    textColor="#fff"
    gradient
  >
    <IconOverlay />
    {children || "תמונת גיבור - חתונה"}
  </ImagePlaceholder>
);

// Emotional photo placeholder
export const EmotionalPhoto = ({ caption }) => (
  <ImagePlaceholder 
    height="400px" 
    bgColor="#f0e6d2" 
    rounded
    pattern
  >
    <IconOverlay />
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '18px', marginBottom: '10px' }}>רגעי חתונה מרגשים</div>
      <div style={{ fontSize: '14px' }}>{caption || "תמונה לדוגמה של זוג ביום החתונה"}</div>
    </div>
  </ImagePlaceholder>
);

// Album page spread placeholder
export const AlbumSpreadPlaceholder = ({ pageCount }) => (
  <ImagePlaceholder 
    height="250px" 
    bgColor="#f5f5f5" 
    rounded 
    pattern
  >
    <IconOverlay />
    <div style={{ display: 'flex', width: '100%', height: '70%' }}>
      <div style={{ flex: 1, border: '1px solid #ddd', margin: '5px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '24px' }}>📷</span>
      </div>
      <div style={{ flex: 1, border: '1px solid #ddd', margin: '5px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '24px' }}>📷</span>
      </div>
    </div>
    <div style={{ marginTop: '10px', fontSize: '14px' }}>
      {pageCount ? `אלבום עם ${pageCount} עמודים` : 'דוגמת פריסת עמודים באלבום'}
    </div>
  </ImagePlaceholder>
);

// Sample wedding photo placeholder
export const SampleWeddingPhoto = ({ position }) => {
  const positions = {
    ceremony: { label: 'טקס החופה', emoji: '💍' },
    firstDance: { label: 'ריקוד ראשון', emoji: '💃' },
    family: { label: 'תמונות משפחה', emoji: '👨‍👩‍👧‍👦' },
    party: { label: 'מסיבה', emoji: '🎉' },
    portrait: { label: 'פורטרט זוגי', emoji: '❤️' }
  };
  
  const photoInfo = positions[position] || { label: 'תמונת חתונה', emoji: '📷' };
  
  return (
    <ImagePlaceholder 
      height="220px" 
      bgColor="#f8f8f8" 
      rounded
    >
      <IconOverlay />
      <div style={{ fontSize: '36px', marginBottom: '10px' }}>{photoInfo.emoji}</div>
      <div style={{ fontSize: '16px', textAlign: 'center' }}>{photoInfo.label}</div>
    </ImagePlaceholder>
  );
};

// Google logo placeholder
export const GoogleLogo = () => (
  <ImagePlaceholder 
    width="80px" 
    height="30px" 
    bgColor="#f8f9fa" 
    rounded
  >
    <span style={{ fontWeight: 'bold', color: '#4285F4' }}>G</span>
    <span style={{ fontWeight: 'bold', color: '#EA4335' }}>o</span>
    <span style={{ fontWeight: 'bold', color: '#FBBC05' }}>o</span>
    <span style={{ fontWeight: 'bold', color: '#4285F4' }}>g</span>
    <span style={{ fontWeight: 'bold', color: '#34A853' }}>l</span>
    <span style={{ fontWeight: 'bold', color: '#EA4335' }}>e</span>
  </ImagePlaceholder>
);

// Avatar placeholder for reviews
export const AvatarPlaceholder = ({ name }) => {
  // Create a color based on the name
  const getInitials = (fullName) => {
    if (!fullName) return "?";
    return fullName
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase();
  };
  
  const getColorFromName = (name) => {
    if (!name) return "#6c757d";
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
    return "#" + "00000".substring(0, 6 - c.length) + c;
  };
  
  const initials = getInitials(name);
  const bgColor = getColorFromName(name);

  return (
    <ImagePlaceholder 
      width="50px" 
      height="50px" 
      bgColor={bgColor}
      textColor="#fff"
      style={{ borderRadius: '50%' }}
    >
      {initials}
    </ImagePlaceholder>
  );
};

// Payment method logos
export const PaymentLogo = ({ type }) => {
  let bgColor = "#fff";
  let content = type;
  
  switch (type?.toLowerCase()) {
    case 'visa':
      bgColor = "#1A1F71";
      content = <span style={{ color: "#fff", fontWeight: "bold" }}>VISA</span>;
      break;
    case 'mastercard':
      bgColor = "#EB001B";
      content = <span style={{ color: "#fff", fontWeight: "bold" }}>MC</span>;
      break;
    case 'amex':
      bgColor = "#006FCF";
      content = <span style={{ color: "#fff", fontWeight: "bold" }}>AMEX</span>;
      break;
    default:
      content = type || "Card";
  }
  
  return (
    <ImagePlaceholder 
      width="50px"
      height="30px"
      bgColor={bgColor}
      rounded
    >
      {content}
    </ImagePlaceholder>
  );
};

// Named export for the collection of placeholders
const placeholders = {
  WeddingAlbumCover,
  HeroBackground,
  EmotionalPhoto,
  AlbumSpreadPlaceholder,
  SampleWeddingPhoto,
  GoogleLogo,
  AvatarPlaceholder,
  PaymentLogo,
};

export default placeholders;