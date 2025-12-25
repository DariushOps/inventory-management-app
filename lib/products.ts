"use server";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Prisma } from "@prisma/client";

const ProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().nonnegative("Price must be non-negative"),
  quantity: z.coerce.number().int().min(0, "Quantity must be non-negative"),
  sku: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
});

export async function deleteProduct(formData: FormData) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const id = String(formData.get("id") || "");

  if (!id) {
    throw new Error("Product id is required");
  }

  await prisma.product.deleteMany({
    where: {
      id,
      userId: user.id,
    },
  });
}

export async function createProduct(formData: FormData) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const parsed = ProductSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    sku: formData.get("sku") || undefined,
    lowStockAt: formData.get("lowStockAt") || undefined,
  });

  if (!parsed.success) {
    console.error("VALIDATION ERROR:", parsed.error);
    throw new Error("Validation failed");
  }

  try {
    await prisma.product.create({
      data: {
        name: parsed.data.name,
        quantity: parsed.data.quantity,
        sku: parsed.data.sku,
        lowStockAt: parsed.data.lowStockAt,
        price: new Prisma.Decimal(parsed.data.price),
        userId: user.id,
      },
    });

    redirect("/inventory");
  } catch (error) {
    console.error("CREATE PRODUCT ERROR:", error);
    throw error;
  }
}
