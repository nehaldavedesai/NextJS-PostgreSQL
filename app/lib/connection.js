import { Client } from 'pg';

// Create a connection pool for PostgreSQL
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

export default client;