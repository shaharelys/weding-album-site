// This is a Vercel serverless function to fetch form submissions
import { sql } from '../utils/database';

export default async function handler(req, res) {
  // Only allow GET method for this endpoint
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Fetch all form submissions from the database, ordered by most recent first
    const submissions = await sql`
      SELECT * FROM form_submissions
      ORDER BY created_at DESC
    `;
    
    // Return the submissions
    return res.status(200).json({ 
      message: 'Form submissions fetched successfully',
      submissions
    });
  } catch (error) {
    console.error('Error fetching form submissions:', error);
    return res.status(500).json({ 
      message: 'Error fetching form submissions', 
      error: error.message 
    });
  }
}