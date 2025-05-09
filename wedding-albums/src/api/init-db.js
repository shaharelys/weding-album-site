// This is a Vercel serverless function to initialize the database tables
import { initDatabase } from '../utils/database';

export default async function handler(req, res) {
  try {
    // Initialize the database tables
    const result = await initDatabase();
    
    if (result.success) {
      return res.status(200).json({ message: 'Database initialized successfully' });
    } else {
      return res.status(500).json({ 
        message: 'Error initializing database', 
        error: result.error.message 
      });
    }
  } catch (error) {
    console.error('Error initializing database:', error);
    return res.status(500).json({ 
      message: 'Error initializing database', 
      error: error.message 
    });
  }
}