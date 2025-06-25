import prisma from "./prisma";
import { generateSlug } from "./extensions";

const db = prisma.$extends(generateSlug);

export default db;
