// This is a Vercel serverless function to handle waitlist signups
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

    // Log the waitlist signup for now
    console.log('Waitlist signup received:', { email, timestamp: new Date().toISOString() });
    
    // Return success response
    return res.status(200).json({ 
      message: 'Waitlist signup successful',
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