import { db } from '@/db/client';
import { sql } from 'drizzle-orm';

export const executeNativeSqlFirstResult = async (nativeSql: string): Promise<Record<string, unknown> | null> => {
  const result = await db.execute(sql.raw(nativeSql));
  const row = result.rows[0];
  if (!row) {
    return null;
  }
  return row;
};
