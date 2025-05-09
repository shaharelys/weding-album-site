// This is a Vercel serverless function to handle form submissions
import { sql } from '../utils/database';

export default async function handler(req, res) {
  // Only allow POST method for this endpoint
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get the form data from the request body
    const formData = req.body;
    
    // Basic validation
    const requiredFields = ['driveLink', 'fullName', 'email', 'phone', 'address'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return res.status(400).json({ message: `Missing required field: ${field}` });
      }
    }

    // Store the form data in the Neon database
    const result = await sql`
      INSERT INTO form_submissions (
        drive_link, 
        full_name, 
        email, 
        phone, 
        address, 
        album_style, 
        page_count
      ) VALUES (
        ${formData.driveLink}, 
        ${formData.fullName}, 
        ${formData.email}, 
        ${formData.phone}, 
        ${formData.address}, 
        ${formData.albumStyle || null}, 
        ${formData.pageCount || null}
      )
      RETURNING id
    `;
    
    // Log that the data was saved successfully
    console.log('Form submission saved to database with ID:', result[0].id);
    
    // Return success response
    return res.status(200).json({ 
      message: 'Form submitted successfully',
      submissionId: result[0].id,
      data: formData
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({ 
      message: 'Error processing form submission', 
      error: error.message 
    });
  }
}