import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const TermsContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  line-height: 1.6;
  direction: rtl;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #555;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
`;

const TermsOfService = () => {
  const { i18n } = useTranslation('terms'); // We only need i18n instance now for this approach

  // Directly get the resource bundle for the current language and 'terms' namespace
  const allTermsContent = i18n.getResourceBundle(i18n.language, 'terms');

  // Enhanced debugging
  if (!allTermsContent || typeof allTermsContent !== 'object' || Object.keys(allTermsContent).length === 0) {
    console.error('TermsOfService Error: allTermsContent is invalid using getResourceBundle', allTermsContent);
    console.error('Current language:', i18n.language);
    console.error('Attempted namespace:', 'terms');
    console.error('Loaded namespaces on i18n instance:', i18n.options.ns);
    console.error('All resources for current language on i18n instance:', i18n.getDataByLanguage(i18n.language));
    return (
      <TermsContainer>
        <Title>שגיאה בטעינת תוכן</Title>
        <Paragraph>
          טעינת התוכן של תנאי השימוש נכשלה או שהתוכן אינו זמין.
          <br />
          (Debug: allTermsContent was: {JSON.stringify(allTermsContent)})
        </Paragraph>
      </TermsContainer>
    );
  }

  const { title, lastUpdated, ...sections } = allTermsContent;

  // Define the order of sections if it's important, otherwise Object.keys will be used
  const sectionOrder = [
    'introduction', 'acceptance', 'services', 'userAccounts', 'payment', 
    'contentPolicy', 'copyright', 'deliveryPolicy', 'refundPolicy', 
    'disclaimer', 'limitationOfLiability', 'changes', 'governingLaw', 'contact'
  ];

  return (
    <TermsContainer>
      {title && <Title>{title}</Title>}
      {lastUpdated && <Paragraph style={{ textAlign: 'center', marginBottom: '30px', fontSize: '0.9em', color: '#777' }}>{lastUpdated}</Paragraph>}
      
      {sectionOrder.map((sectionKey) => {
        const section = sections[sectionKey];
        if (!section || typeof section !== 'object' || !section.heading) {
          return null; // Skip if section or heading is missing
        }

        return (
          <Section key={sectionKey}>
            <SectionTitle>{section.heading}</SectionTitle>
            {section.content && section.content.split('\n\n').map((paragraph, pIndex) => (
              <Paragraph key={pIndex}>{paragraph}</Paragraph>
            ))}
            
            {/* Handle specific lists within sections */}
            {sectionKey === 'services' && section.servicesList && Array.isArray(section.servicesList) && (
              <ul>
                {section.servicesList.map((item, index) => <li key={index}><Paragraph>{item}</Paragraph></li>)}
              </ul>
            )}
            {sectionKey === 'payment' && section.paymentNotes && Array.isArray(section.paymentNotes) && (
              <ul>
                {section.paymentNotes.map((item, index) => <li key={index}><Paragraph>{item}</Paragraph></li>)}
              </ul>
            )}
            {sectionKey === 'contentPolicy' && section.contentPolicies && Array.isArray(section.contentPolicies) && (
              <ul>
                {section.contentPolicies.map((item, index) => <li key={index}><Paragraph>{item}</Paragraph></li>)}
              </ul>
            )}
            {sectionKey === 'contentPolicy' && section.contentWarning && (
              <Paragraph style={{ fontStyle: 'italic', marginTop: '10px' }}>{section.contentWarning}</Paragraph>
            )}
            {sectionKey === 'copyright' && section.userContent && (
              <Paragraph style={{ marginTop: '10px' }}>{section.userContent}</Paragraph>
            )}
            {sectionKey === 'deliveryPolicy' && section.deliveryNotes && Array.isArray(section.deliveryNotes) && (
              <ul>
                {section.deliveryNotes.map((item, index) => <li key={index}><Paragraph>{item}</Paragraph></li>)}
              </ul>
            )}
            {sectionKey === 'refundPolicy' && section.refundCases && Array.isArray(section.refundCases) && (
              <div>
                {section.refundCases.map((caseItem, index) => (
                  <div key={index} style={{ marginBottom: '10px' }}>
                    <Paragraph><strong>{caseItem.case}:</strong> {caseItem.policy}</Paragraph>
                  </div>
                ))}
              </div>
            )}
            {sectionKey === 'refundPolicy' && section.refundProcess && (
              <Paragraph style={{ marginTop: '10px' }}>{section.refundProcess}</Paragraph>
            )}
             {sectionKey === 'disclaimer' && section.warrantiesDisclaimer && (
              <Paragraph style={{ fontStyle: 'italic', marginTop: '10px' }}>{section.warrantiesDisclaimer}</Paragraph>
            )}
          </Section>
        );
      })}
    </TermsContainer>
  );
};

export default TermsOfService;