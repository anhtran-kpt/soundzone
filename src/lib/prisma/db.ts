import prisma from "./prisma";
import { generateSlug } from "../../../prisma/extensions/generateSlug";

const db = prisma.$extends(generateSlug);

export default db;
