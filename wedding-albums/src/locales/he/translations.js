import termsOfServiceText from './termsOfService';
import privacyPolicyText from './privacyPolicy';

const translations = {
  // Header
  'site.name': 'Albuma',
  'site.tagline': 'הדרך הקלה אל אלבום החתונה שלכם.',
  'site.subtitle': 'שירות חדשני שמסנן עבורכם עד 5000 תמונות מהחתונה, בוחר את הרגעים היפים ביותר ומפיק מהם אלבום פיזי מעוצב.',
  'site.ctaButton': 'התחילו עכשיו – בחרו סגנון אלבום',
  
  // Problem + Story Section
  'story.title': 'התמונות מהחתונה מחכות?',
  'story.paragraph': 'אלפי תמונות מהחתונה יושבות בגוגל דרייב, או באלבום דיגיטלי. אבל למיין אותם? לבחור? לעצב? זה מרגיש כמו משימה בלתי אפשרית. בשביל זה אנחנו כאן - כדי לעזור לכם להכניס את הרגעים הכי יפים לאלבום שתניחו על השולחן בסלון.\n\nחברים מגיעים, המשפחה מתאספת, ופתאום כולם מדפדפים, צוחקים, נזכרים. כל עמוד מספר רגע – החיוך שלכם בריקוד הראשון, הדמעה של סבתא בחופה, ריקוד הסיום עם החברים הכי טובים. זה לא סתם אלבום, זה זיכרון חי, מוחשי, שמספר את הסיפור שלכם. אלבום שתאהבו לפתוח שוב ושוב.',
  
  // Navigation
  'nav.home': 'דף הבית',
  'nav.howItWorks': 'איך זה עובד',
  'nav.pricing': 'תמחור',
  'nav.contact': 'צור קשר',
  
  // Service Flow
  'flow.title': 'איך זה עובד?',
  'flow.step1': 'בחרו את סגנון האלבום המועדף עליכם מתוך מספר עיצובים.',
  'flow.step2': 'בחרו את כמות העמודים הרצויה. כל עמוד כולל בממוצע 3 תמונות.',
  'flow.step3': 'שתפו קישור לתיקיית גוגל דרייב ופרטי התקשרות.',
  'flow.step4': 'שלמו בצורה מאובטחת ואשרו את מדיניות הפרטיות שלנו.',
  'flow.step5': 'תוך 7 ימי עסקים תקבלו לינק לתמונות הנבחרות לאלבום, לצד תמונות נוספות שהתלבטנו לגביהן ביחס של שלוש תמונות התלבטות על כל תמונה נבחרת.',
  'flow.step6': 'לאחר שבחרתם את התמונות, תראו אותן באילוסטרציה דיגיטלית של האלבום. כאן תוכלו לגרור ולהחליף מיקומים. בשלב זה, השלב האחרון, תאשרו את הבחירה ואת תצורת האלבום הסופי.',
  'flow.step7': 'תוך עד 10 ימי עסקים תקבלו את האלבום עם שליח עד הבית.',
  
  // Transparency Before Payment
  'payment.transparency.title': 'לפני שאתם משלמים – חשוב שתדעו:',
  'payment.transparency.subtitle': 'אנחנו מאמינים בשקיפות מלאה לגבי התהליך, המחיר והתוצאות',
  'payment.transparency.bullet1': 'התשלום מתבצע בצורה מאובטחת.',
  'payment.transparency.bullet2': 'יש לאשר את מדיניות הפרטיות.',
  'payment.transparency.bullet3': 'ניתן לקבל החזר כספי מלא כל עוד האלבום לא יצא להדפסה, אם לא תהיו מרוצים מבחירת התמונות.',
  
  // Transparency Sections
  'payment.transparency.pricing.title': 'תמחור ותשלום',
  'payment.transparency.pricing.item1': 'המחיר כולל בחירת תמונות, עיצוב אלבום, הדפסה איכותית ומשלוח עד הבית.',
  'payment.transparency.pricing.item2': 'אין עלויות נסתרות או תוספות מחיר לאחר ההזמנה.',
  
  'payment.transparency.refund.title': 'מדיניות החזרים',
  'payment.transparency.refund.item1': 'ניתן לבקש עד שלושה סבבי תיקונים ללא תוספת עלות.',
  'payment.transparency.refund.item2': 'אם איכות האלבום לא תעמוד בציפיות, נדפיס מחדש ללא עלות.',
  'payment.transparency.refund.note': 'חשוב לדעת: אם כבר אישרתם את הגרסה הסופית והאלבום נשלח להדפסה, לא נוכל לספק החזר כספי מלא אלא רק הדפסה חוזרת במקרה של פגמים בהדפסה.',
  
  'payment.transparency.privacy.title': 'פרטיות ואבטחה',
  'payment.transparency.privacy.item1': 'לא משתמשים בתמונותיכם למטרות פרסום ללא אישור.',
  'payment.transparency.privacy.item2': 'פרטי התשלום מאובטחים באמצעות הצפנה מתקדמת.',
  'payment.transparency.privacy.item3': 'הגישה לתמונות מוגבלת לצוות העורכים בלבד.',
  
  // Final CTA
  'cta.title': 'הזיכרונות מהחתונה מגיעים אליכם – באלבום שלא יישכח.',
  'cta.button': 'בחרו סגנון אלבום והתחילו',
  
  // Form
  'form.title': 'בחר גודל אלבום',
  'form.driveLink.label': 'שיתוף התמונות ופרטי התקשרות',
  'form.driveLink.placeholder': 'הכנס קישור לתיקייה משותפת',
  'form.driveLink.instructions': 'יש לשתף את התמונות שלך בתיקיית Google Drive ולהעתיק את הקישור לכאן. ודא שהקישור מאפשר צפייה לכל מי שיש לו את הקישור.',
  'form.albumStyle.label': 'בחר סגנון אלבום',
  'form.albumStyle.classic': 'קלאסי',
  'form.albumStyle.modern': 'מודרני',
  'form.albumStyle.vintage': 'וינטג\'',
  'form.submit': 'המשך לתשלום',
  'form.error': 'אנא תקן את השגיאות הבאות:',
  'form.success': 'הטופש נשלח בהצלחה!',
  
  // Payment
  'payment.title': 'תשלום',
  'payment.amount': 'סה"כ לתשלום: ₪499',
  'payment.cardNumber': 'מספר כרטיס אשראי',
  'payment.expiry': 'תאריך תפוגה',
  'payment.cvc': 'CVC',
  'payment.submit': 'שלם עכשיו',
  'payment.agreement': 'אני מסכים/ה ל',
  'payment.privacyPolicy': 'מדיניות פרטיות',
  'payment.termsOfService': 'תנאי שימוש',
  
  // Reviews
  'reviews.title': 'לקוחות מספרים',
  'reviews.googleRating': 'דירוג גוגל',
  'reviews.reviewCount': 'ביקורות',
  
  // Success Page
  'success.title': 'ההזמנה שלך התקבלה!',
  'success.thankYou': 'תודה שבחרת בשירות שלנו',
  'success.nextSteps': 'מה קורה עכשיו?',
  'success.step1': 'צוות המעצבים שלנו יבחן את התמונות שלך',
  'success.step2': 'תוך 7 ימי עסקים תקבל קישור לגלריה עם התמונות הנבחרות',
  'success.step3': 'תוכל לבקש שינויים דרך WhatsApp',
  'success.contactInfo': 'אם יש לך שאלות, אתה מוזמן ליצור קשר: 054-466-6185',
  
  // Footer
  'footer.copyright': '© 2025 אלבומה. כל הזכויות שמורות.',
  'footer.privacy': 'מדיניות פרטיות',
  'footer.terms': 'תנאי שימוש',
  'footer.contact': 'צור קשר',
  'footer.email': 'דוא"ל',
  'footer.whatsapp': 'וואטסאפ',

  // Namespaced translations
  terms: termsOfServiceText,
  privacy: privacyPolicyText,
};

export default translations;