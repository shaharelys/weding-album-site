import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const PolicyContainer = styled.div`
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

const PrivacyPolicy = () => {
  const { i18n } = useTranslation('privacy'); // We only need i18n instance now for this approach

  // Directly get the resource bundle for the current language and 'privacy' namespace
  const allPrivacyContent = i18n.getResourceBundle(i18n.language, 'privacy');

  if (!allPrivacyContent || typeof allPrivacyContent !== 'object' || Object.keys(allPrivacyContent).length === 0) {
    console.error('PrivacyPolicy Error: allPrivacyContent is invalid using getResourceBundle', allPrivacyContent);
    console.error('Current language:', i18n.language);
    console.error('Attempted namespace:', 'privacy');
    console.error('Loaded namespaces on i18n instance:', i18n.options.ns);
    console.error('All resources for current language on i18n instance:', i18n.getDataByLanguage(i18n.language));
    return (
      <PolicyContainer>
        <Title>שגיאה בטעינת תוכן</Title>
        <Paragraph>
          טעינת התוכן של מדיניות הפרטיות נכשלה או שהתוכן אינו זמין.
          <br />
          (Debug: allPrivacyContent was: {JSON.stringify(allPrivacyContent)})
        </Paragraph>
      </PolicyContainer>
    );
  }

  const { title, lastUpdated, ...sections } = allPrivacyContent;

  // Define the order of sections if it's important
  const sectionOrder = [
    'introduction', 'informationCollected', 'useOfInformation', 'sharingInformation',
    'dataRetention', 'userRights', 'security', 'cookies', 'changes', 'contact'
  ];

  return (
    <PolicyContainer>
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

            {/* Handle specific lists/objects within sections */}
            {sectionKey === 'informationCollected' && section.types && Array.isArray(section.types) && (
              <ul>
                {section.types.map((item, index) => (
                  <li key={index}>
                    <Paragraph><strong>{item.name}:</strong> {item.description}</Paragraph>
                  </li>
                ))}
              </ul>
            )}
            {sectionKey === 'useOfInformation' && section.purposes && Array.isArray(section.purposes) && (
              <ul>
                {section.purposes.map((item, index) => <li key={index}><Paragraph>{item}</Paragraph></li>)}
              </ul>
            )}
            {sectionKey === 'sharingInformation' && section.cases && Array.isArray(section.cases) && (
              <ul>
                {section.cases.map((item, index) => (
                  <li key={index}>
                    <Paragraph><strong>{item.scenario}:</strong> {item.description}</Paragraph>
                  </li>
                ))}
              </ul>
            )}
            {sectionKey === 'dataRetention' && section.photoPolicy && Array.isArray(section.photoPolicy) && (
              <ul>
                {section.photoPolicy.map((item, index) => <li key={index}><Paragraph>{item}</Paragraph></li>)}
              </ul>
            )}
            {sectionKey === 'userRights' && section.rights && Array.isArray(section.rights) && (
              <>
                <ul>
                  {section.rights.map((item, index) => <li key={index}><Paragraph>{item}</Paragraph></li>)}
                </ul>
                {section.exercisingRights && <Paragraph>{section.exercisingRights}</Paragraph>}
              </>
            )}
            {sectionKey === 'cookies' && section.types && Array.isArray(section.types) && (
               <ul>
                {section.types.map((item, index) => (
                  <li key={index}>
                    <Paragraph><strong>{item.name}:</strong> {item.description}</Paragraph>
                  </li>
                ))}
              </ul>
            )}
          </Section>
        );
      })}
    </PolicyContainer>
  );
};

export default PrivacyPolicy;