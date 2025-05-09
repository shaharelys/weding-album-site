// This is a Vercel serverless function to fetch waitlist signups
import { sql } from '../utils/database';

export default async function handler(req, res) {
  // Only allow GET method for this endpoint
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Fetch all waitlist signups from the database, ordered by most recent first
    const signups = await sql`
      SELECT * FROM waitlist_signups
      ORDER BY created_at DESC
    `;
    
    // Return the signups
    return res.status(200).json({ 
      message: 'Waitlist signups fetched successfully',
      signups
    });
  } catch (error) {
    console.error('Error fetching waitlist signups:', error);
    return res.status(500).json({ 
      message: 'Error fetching waitlist signups', 
      error: error.message 
    });
  }
}