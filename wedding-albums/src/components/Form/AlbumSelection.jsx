import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  direction: rtl;
`;

const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AlbumCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background-color: white;
  
  ${props => props.selected && `
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(156, 102, 68, 0.3);
    border: 3px solid #9c6644;
  `}
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const AlbumHeader = styled.div`
  padding: 15px;
  background-color: ${props => props.selected ? '#9c6644' : '#f8e8e0'};
  color: ${props => props.selected ? 'white' : '#333'};
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  transition: all 0.3s ease;
`;

const AlbumImageContainer = styled.div`
  position: relative;
`;

const AlbumImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
`;

const AlbumInfo = styled.div`
  padding: 20px;
`;

const AlbumDescription = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
  height: 80px;
  overflow: hidden;
`;

const AlbumPrice = styled.div`
  font-weight: bold;
  color: #9c6644;
  margin-bottom: 15px;
`;

const SelectButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: ${props => props.selected ? '#9c6644' : '#f0f0f0'};
  color: ${props => props.selected ? 'white' : '#333'};
  border: none;
  border-radius: 5px;
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.selected ? '#7d5035' : '#e0e0e0'};
  }
`;

// Updated album data with correct Hebrew names and English image paths
const albums = [
  {
    id: 'basic',
    name: 'אלבום קלאסי',
    description: 'אלבום בסיסי ואיכותי במחיר משתלם במידות 30x30 ס"מ. עשוי מחומר דמוי עור בגימור חלק ללא הדפס. כריכה קשיחה, דפים עבים באיכות הדפסה גבוהה, ועמידות לאורך זמן.',
    basePrice: 499,
    imagePath: '/images/Plain Album Example.png'
  },
  {
    id: 'linen',
    name: 'אלבום פשתן',
    description: 'אלבום מראה טבעי ומרקם ייחודי במידות 30x30 ס"מ. עשוי מבד פשתן בגימור אלגנטי וכולל הטבעה של שמות בני הזוג על הכריכה. כריכה קשיחה, דפים עבים באיכות הדפסה גבוהה, ועמידות לאורך זמן.',
    basePrice: 599,
    imagePath: '/images/Premium Linen Album Example.png'
  },
  {
    id: 'leather',
    name: 'אלבום עור',
    description: 'אלבום יוקרתי עם מגע מפנק במידות 30x30 ס"מ. עשוי מעור אמיתי בגימור מושלם וכולל הטבעה של שמות בני הזוג על הכריכה. כריכה קשיחה, דפים עבים באיכות הדפסה גבוהה, ועמידות לאורך זמן.',
    basePrice: 699,
    imagePath: '/images/Premium Leather Album Example.png'
  }
];

const AlbumSelection = ({ onSelect }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  
  const handleSelect = (albumId) => {
    setSelectedAlbum(albumId);
    onSelect(albumId);
  };
  
  return (
    <Container>
      <AlbumsGrid>
        {albums.map(album => (
          <AlbumCard 
            key={album.id}
            selected={selectedAlbum === album.id}
            onClick={() => handleSelect(album.id)}
          >
            <AlbumHeader selected={selectedAlbum === album.id}>
              {album.name}
            </AlbumHeader>
            <AlbumImageContainer>
              <AlbumImage src={album.imagePath} alt={album.name} />
            </AlbumImageContainer>
            <AlbumInfo>
              <AlbumDescription>{album.description}</AlbumDescription>
              <AlbumPrice>החל מ-{album.basePrice} ₪</AlbumPrice>
              <SelectButton 
                selected={selectedAlbum === album.id}
              >
                {selectedAlbum === album.id ? 'נבחר ✓' : 'בחירה'}
              </SelectButton>
            </AlbumInfo>
          </AlbumCard>
        ))}
      </AlbumsGrid>
    </Container>
  );
};

export default AlbumSelection;