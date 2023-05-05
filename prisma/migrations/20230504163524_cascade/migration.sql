-- DropForeignKey
ALTER TABLE "ProductBrand" DROP CONSTRAINT "ProductBrand_brand_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductBrand" DROP CONSTRAINT "ProductBrand_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_category_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductColor" DROP CONSTRAINT "ProductColor_color_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductColor" DROP CONSTRAINT "ProductColor_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductStyle" DROP CONSTRAINT "ProductStyle_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductStyle" DROP CONSTRAINT "ProductStyle_style_id_fkey";

-- AddForeignKey
ALTER TABLE "ProductColor" ADD CONSTRAINT "ProductColor_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductColor" ADD CONSTRAINT "ProductColor_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "Color"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductStyle" ADD CONSTRAINT "ProductStyle_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductStyle" ADD CONSTRAINT "ProductStyle_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "Style"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductBrand" ADD CONSTRAINT "ProductBrand_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductBrand" ADD CONSTRAINT "ProductBrand_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;
