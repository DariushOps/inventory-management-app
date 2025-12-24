import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const demoUserId = "5a37bb34-418e-464e-bef8-22e04d7c942c";

  const productsData = Array.from({ length: 25 }).map((_, i) => ({
    userId: demoUserId,
    name: `Product ${i + 1}`,
    price: parseFloat((Math.random() * 90 + 10).toFixed(2)),
    quantity: Math.floor(Math.random() * 20),
    lowStockAt: 5,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
  }));

  await prisma.product.createMany({
    data: productsData,
    skipDuplicates: true,
  });

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
