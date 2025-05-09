import { neon } from '@neondatabase/serverless';

// Create a connection to the Neon database
export const sql = neon(process.env.DATABASE_URL);

// Function to initialize the database with required tables
export async function initDatabase() {
  try {
    // Create the form_submissions table for storing main form data
    await sql`
      CREATE TABLE IF NOT EXISTS form_submissions (
        id SERIAL PRIMARY KEY,
        drive_link TEXT NOT NULL,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        address TEXT NOT NULL,
        album_style TEXT,
        page_count INTEGER,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    // Create the waitlist_signups table
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist_signups (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    console.log("Database tables initialized successfully");
    return { success: true };
  } catch (error) {
    console.error("Error initializing database:", error);
    return { success: false, error };
  }
}