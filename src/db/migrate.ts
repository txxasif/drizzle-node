import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DB_URL!,
});

const main = async () => {
  try {
    console.log("Migration start");
    await client.connect();
    const db = drizzle(client);
    await migrate(db, { migrationsFolder: "drizzle" }); // Corrected property name
    console.log("Migration complete");
    await client.end();
  } catch (error) {
    // Handle error appropriately, e.g., logging or throwing
    console.error("Migration error:", error);
  }
};

main();
