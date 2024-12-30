import pool from '@/db.ts';

export default async function seedUsers (request, response) 
{
    try {
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
              return connectionPool.query(`
                INSERT INTO userinfo (email, password)
                VALUES ('${user.email}', '${user.password}')
                ON CONFLICT (id) DO NOTHING;
              `);
            }),
          );
    }
    catch (error) {
        console.error("Error executing query", error)
        response.status(500).json({error: 'Internal Server Error'})
    }
}