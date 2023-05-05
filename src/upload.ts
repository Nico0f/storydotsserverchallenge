import { PrismaClient } from '@prisma/client'
// import { readFile } from 'fs/promises';
import { pr } from '../products/finalwomens.js'

const prisma = new PrismaClient()

// const products = readFile('../products/mens_shirts.json')

// const json = JSON.parse();

async function main() {



  const arr = []

  const names = []

  const stylename = await prisma.style.create({
    data: {
      name: 'women'
    }
  })

  for (let product of pr) {

    if (names.includes(product.name)) {


      let existing = await prisma.product.findFirst({
        where: {
          name: product.name
        }
      })



      if (!arr.includes(product.category)) {
        const categoryname = await prisma.category.create({
          data: {
            name: product.category
          }
        })
        arr.push(product.category)
      }

        const cat = await prisma.category.findUnique({
          where: {
            name: product.category
          }
        })
    
        await prisma.productCategory.create({
          data: {
            category_id: cat.id,
            product_id: existing.id
          }
        })
    } else {


      let newbook = await prisma.product.create({
        data: {
          name: product.name,
          description: product.description,
          image_url: product.colors[0].primary_url ? product.colors[0].primary_url : product.colors[0].colors_url[0],
          price: Number(product.price),
        },
      }
      )
  
      if (!arr.includes(product.category)) {
        const categoryname = await prisma.category.create({
          data: {
            name: product.category
          }
        })
        arr.push(product.category)
      }
  
      await prisma.productStyle.create({
        data: {
          style_id: stylename.id,
          product_id: newbook.id
        }
      })
  
      const cat = await prisma.category.findUnique({
        where: {
          name: product.category
        }
      })
  
      await prisma.productCategory.create({
        data: {
          category_id: cat.id,
          product_id: newbook.id
        }
      })
  
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
        })
  
        await prisma.productColor.create({
          data: {
            product_id: newbook.id,
            color_id: newcolor.id
          }
        })
      }

      names.push(product.name)











    }





  }
  // ... you will write your Prisma Client queries here

}


main()

  .then(async () => {

    await prisma.$disconnect()

  })

  .catch(async (e) => {

    console.error(e)

    await prisma.$disconnect()

    process.exit(1)

  })