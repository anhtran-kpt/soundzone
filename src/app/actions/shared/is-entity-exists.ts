// lib/prisma/utils/is-entity-exists.ts
import db from "@/lib/prisma/db";

type PrismaModel = keyof typeof db;

export async function isEntityExists<
  TModel extends PrismaModel,
  TField extends string = "slug"
>(
  model: TModel,
  field: TField,
  value: string,
  options?: {
    logContext?: string;
    customErrorMessage?: string;
  }
): Promise<{ id: string }> {
  const logName = options?.logContext ?? `[IS_${model.toUpperCase()}_EXISTS]`;

  try {
    const record = await (db[model] as any).findUnique({
      where: {
        [field]: value,
      },
      select: {
        id: true,
      },
    });

    if (!record) {
      throw new Error(`${logName}: Record not found!`);
    }

    return record;
  } catch (error) {
    console.error(logName, error);
    throw new Error(
      options?.customErrorMessage ??
        `${logName}: Something went wrong during existence check`
    );
  }
}
