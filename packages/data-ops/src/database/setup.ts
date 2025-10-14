// packages/data-ops/src/database/setup.ts
import { drizzle } from "drizzle-orm/planetscale-serverless";

let db: ReturnType<typeof drizzle>;

export function initDatabase(connection: {
  host: string;
  username: string;
  password: string;
}) {
  if (db) {
    return db;
  }
  db = drizzle({ connection });
  return db;
}

export function getDb() {
  if (!db) {
    throw new Error("Database not initialized");
  }
  return db;
}
