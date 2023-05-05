"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// import { readFile } from 'fs/promises';
const finalwomens_js_1 = require("../products/finalwomens.js");
const prisma = new client_1.PrismaClient();
// const products = readFile('../products/mens_shirts.json')
// const json = JSON.parse();
function randomInt() {
    return Math.random() * 100;
}
async function main() {
    let i = 0;
    const arr = [];
    const names = [];
    // const brands = [
    //   {
    //     name: 'Lotte',
    //     logo_url: 'https://res.cloudinary.com/dgcsnhguo/image/upload/v1683315714/storydots/attachment_120552221_xjc2wl.png'
    //   },
    //   {
    //     name: 'Fit',
    //     logo_url: 'https://res.cloudinary.com/dgcsnhguo/image/upload/v1683315827/storydots/d87243c31ab5837a7dc4d24b5b3ac977_ewziaq.jpg'
    //   },
    //   {
    //     name: 'Globals',
    //     logo_url: 'https://res.cloudinary.com/dgcsnhguo/image/upload/v1683315906/storydots/689b088d15774cdf3d77a3df990239cf_bdjtr3.jpg'
    //   }
    // ]
    // for (const brand of brands) {
    //   await prisma.brand.create({
    //     data: {
    //       name: brand.name,
    //       logo_url: brand.logo_url
    //     }
    //   })
    // }
    const stylename = await prisma.style.create({
        data: {
            name: 'women'
        }
    });
    for (let product of finalwomens_js_1.pr) {
        console.log('Adding: ' + i);
        i = i + 1;
        if (names.includes(product.name)) {
            let existing = await prisma.product.findFirst({
                where: {
                    name: product.name
                }
            });
            if (!arr.includes(product.category)) {
                const categoryname = await prisma.category.create({
                    data: {
                        name: product.category
                    }
                });
                arr.push(product.category);
            }
            const cat = await prisma.category.findUnique({
                where: {
                    name: product.category
                }
            });
            await prisma.productCategory.create({
                data: {
                    category_id: cat.id,
                    product_id: existing.id
                }
            });
        }
        else {
            let newbook = await prisma.product.create({
                data: {
                    name: product.name,
                    description: product.description,
                    image_url: product.colors[0].primary_url ? product.colors[0].primary_url : product.colors[0].colors_url[0],
                    price: Number(product.price),
                },
            });
            const num = randomInt();
            if (num <= 30) {
                await prisma.productBrand.create({
                    data: {
                        product_id: newbook.id,
                        brand_id: 1
                    }
                });
            }
            else if (num > 30 && num < 60) {
                await prisma.productBrand.create({
                    data: {
                        product_id: newbook.id,
                        brand_id: 2
                    }
                });
            }
            else {
                await prisma.productBrand.create({
                    data: {
                        product_id: newbook.id,
                        brand_id: 3
                    }
                });
            }
            if (!arr.includes(product.category)) {
                const categoryname = await prisma.category.create({
                    data: {
                        name: product.category
                    }
                });
                arr.push(product.category);
            }
            await prisma.productStyle.create({
                data: {
                    style_id: stylename.id,
                    product_id: newbook.id
                }
            });
            const cat = await prisma.category.findUnique({
                where: {
                    name: product.category
                }
            });
            await prisma.productCategory.create({
                data: {
                    category_id: cat.id,
                    product_id: newbook.id
                }
            });
            for (const col of product.colors) {
                let newcolor = await prisma.color.create({
                    data: {
                        name: col.color,
                        colors_url: col.colors_url,
                        hex_value: col.hex_value,
                        hex_value_2: col.hex_value_2,
                        primary_url: col.primary_url ? col.primary_url : null,
                        secondary_url: col.secondary_url ? col.secondary_url : null
                    }
                });
                await prisma.productColor.create({
                    data: {
                        product_id: newbook.id,
                        color_id: newcolor.id
                    }
                });
            }
            names.push(product.name);
        }
    }
    // ... you will write your Prisma Client queries here
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=upload.js.map