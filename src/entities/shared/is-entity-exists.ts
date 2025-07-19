"use server";

import db from "@/lib/prisma/db";
import { withErrorHandler } from "@/entities/shared/with-error-handler";

type PrismaModel = keyof typeof db;

export const isEntityExists = withErrorHandler(
  async <TModel extends PrismaModel, TField extends string = "slug">(
    model: TModel,
    field: TField,
    value: string,
    options?: {
      logContext?: string;
      customErrorMessage?: string;
    }
  ): Promise<{ id: string }> => {
    const logName = options?.logContext ?? `[IS_${model.toUpperCase()}_EXISTS]`;

    const record = await (db[model] as any).findUnique({
      where: {
        [field]: value,
      },
      select: {
        id: true,
      },
    });

    if (!record) {
      throw new Error(
        options?.customErrorMessage ?? `${logName}: Record not found!`
      );
    }

    return record;
  }
);
