/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[brand_id,product_id]` on the table `ProductBrand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[color_id,product_id]` on the table `ProductColor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[style_id,product_id]` on the table `ProductStyle` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Style` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "name" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductBrand_brand_id_product_id_key" ON "ProductBrand"("brand_id", "product_id");

-- CreateIndex
CREATE UNIQUE INDEX "ProductColor_color_id_product_id_key" ON "ProductColor"("color_id", "product_id");

-- CreateIndex
CREATE UNIQUE INDEX "ProductStyle_style_id_product_id_key" ON "ProductStyle"("style_id", "product_id");

-- CreateIndex
CREATE UNIQUE INDEX "Style_name_key" ON "Style"("name");
