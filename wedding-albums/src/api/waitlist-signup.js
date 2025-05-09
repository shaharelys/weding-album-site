// This is a Vercel serverless function to handle waitlist signups
import { sql } from '../utils/database';

export default async function handler(req, res) {
  // Only allow POST method for this endpoint
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get the email data from the request body
    const { email } = req.body;
    
    // Basic validation
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Store the email in the Neon database
    const result = await sql`
      INSERT INTO waitlist_signups (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING
      RETURNING id
    `;
    
    // Check if the email was inserted (not a duplicate)
    if (result.length === 0) {
      console.log('Waitlist signup attempted with existing email:', email);
      return res.status(200).json({ 
        message: 'Email already registered in waitlist',
        email
      });
    }
    
    // Log the waitlist signup
    console.log('Waitlist signup saved to database with ID:', result[0].id);
    
    // Return success response
    return res.status(200).json({ 
      message: 'Waitlist signup successful',
      signupId: result[0].id,
      email
    });
  } catch (error) {
    console.error('Error processing waitlist signup:', error);
    return res.status(500).json({ 
      message: 'Error processing waitlist signup', 
      error: error.message 
    });
  }
}