import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AdminContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  direction: rtl;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  text-align: center;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.button`
  padding: 10px 20px;
  border: none;
  background: ${props => props.active ? '#9c6644' : 'transparent'};
  color: ${props => props.active ? 'white' : '#333'};
  cursor: pointer;
  font-size: 16px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${props => props.active ? '#9c6644' : '#f0f0f0'};
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #d32f2f;
  background-color: #ffebee;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
`;

const Th = styled.th`
  background-color: #f5f0e8;
  padding: 12px 15px;
  text-align: right;
  border-bottom: 2px solid #9c6644;
`;

const Td = styled.td`
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f1f1f1;
  }
`;

const NoDataMessage = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f8f9fa;
  color: #666;
  border-radius: 4px;
  font-style: italic;
`;

const RefreshButton = styled.button`
  background-color: #9c6644;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  float: left;
  margin-bottom: 20px;
  
  &:hover {
    background-color: #7d5035;
  }
`;

const FormatDate = ({ dateString }) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString('he-IL', options);
};

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('submissions');
  const [formSubmissions, setFormSubmissions] = useState([]);
  const [waitlistSignups, setWaitlistSignups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch form submissions
      const submissionsResponse = await fetch('/api/get-form-submissions');
      if (!submissionsResponse.ok) {
        throw new Error('Failed to fetch form submissions');
      }
      const submissionsData = await submissionsResponse.json();
      setFormSubmissions(submissionsData.submissions);
      
      // Fetch waitlist signups
      const signupsResponse = await fetch('/api/get-waitlist-signups');
      if (!signupsResponse.ok) {
        throw new Error('Failed to fetch waitlist signups');
      }
      const signupsData = await signupsResponse.json();
      setWaitlistSignups(signupsData.signups);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('אירעה שגיאה בטעינת הנתונים. אנא נסה שנית מאוחר יותר.');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const handleRefresh = () => {
    fetchData();
  };
  
  return (
    <AdminContainer>
      <Title>ניהול נתונים</Title>
      
      <TabContainer>
        <Tab 
          active={activeTab === 'submissions'} 
          onClick={() => setActiveTab('submissions')}
        >
          טפסי הזמנה ({formSubmissions.length})
        </Tab>
        <Tab 
          active={activeTab === 'waitlist'} 
          onClick={() => setActiveTab('waitlist')}
        >
          רשימת המתנה ({waitlistSignups.length})
        </Tab>
      </TabContainer>
      
      <RefreshButton onClick={handleRefresh}>
        רענן נתונים
      </RefreshButton>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      {loading ? (
        <LoadingMessage>טוען נתונים...</LoadingMessage>
      ) : activeTab === 'submissions' ? (
        formSubmissions.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <Th>שם מלא</Th>
                <Th>דואר אלקטרוני</Th>
                <Th>טלפון</Th>
                <Th>כתובת</Th>
                <Th>סגנון אלבום</Th>
                <Th>מס׳ עמודים</Th>
                <Th>תאריך הגשה</Th>
              </tr>
            </thead>
            <tbody>
              {formSubmissions.map(submission => (
                <Tr key={submission.id}>
                  <Td>{submission.full_name}</Td>
                  <Td>{submission.email}</Td>
                  <Td>{submission.phone}</Td>
                  <Td>{submission.address}</Td>
                  <Td>{submission.album_style || 'לא צוין'}</Td>
                  <Td>{submission.page_count || 'לא צוין'}</Td>
                  <Td><FormatDate dateString={submission.created_at} /></Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <NoDataMessage>לא נמצאו טפסי הזמנה</NoDataMessage>
        )
      ) : waitlistSignups.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <Th>דואר אלקטרוני</Th>
              <Th>תאריך הרשמה</Th>
            </tr>
          </thead>
          <tbody>
            {waitlistSignups.map(signup => (
              <Tr key={signup.id}>
                <Td>{signup.email}</Td>
                <Td><FormatDate dateString={signup.created_at} /></Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <NoDataMessage>לא נמצאו נרשמים לרשימת ההמתנה</NoDataMessage>
      )}
    </AdminContainer>
  );
};

export default AdminPage;