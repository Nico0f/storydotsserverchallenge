import prisma from "../prisma";

export async function getAllProducts(limit: number, offset: number, category: string, style: string) {
    try {

        let categories = category.split(',')

        if (categories.length > 0 && categories[0] !== 'undefined') {
            const allproducts = await prisma.productStyle.findMany({
                where: {
                    style: {
                        name: style
                    },
                    product: {
                        category: {
                            some: {
                                category: {
                                    name: { in: categories }
                                }
                            }
                        }
                    }
                },
                include: {
                    product: {
                        select: {
                            id: true,
                            name: true,
                            description: true,
                            image_url: true,
                            price: true,
                            color: {
                                select: {
                                    color: true
                                }
                            },
                        },
                    },
                },
                take: (limit ? limit : undefined),
                skip: (offset ? offset : undefined),
            })

            const count = await prisma.productStyle.count({
                where: {
                    style: {
                        name: style
                    },
                    product: {
                        category: {
                            some: {
                                category: {
                                    name: { in: categories }
                                }
                            }
                        }
                    }
                }
            })

            return {
                content: allproducts.map((element) => element.product),
                count
            }
        }

        const allproducts = await prisma.productStyle.findMany({
            where: {
                style: {
                    name: style
                }
            },
            select: {
                product: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        image_url: true,
                        price: true,
                        color: {
                            select: {
                                color: true
                            }
                        },
                        category: {
                            select: {
                                category: true
                            }
                        }
                    },
                }
            },
            take: (limit ? limit : undefined),
            skip: (offset ? offset : undefined),
        })

        const count = await prisma.productStyle.count({
            where: {
                style: {
                    name: style
                }
            }
        })

        return {
            content: allproducts.map((element) => element.product),
            count
        }
    } catch {

    }
}

export async function getOneProduct(id: string) {

    try {
        const product = await prisma.product.findUnique({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                name: true,
                description: true,
                image_url: true,
                price: true,
                color: {
                    select: {
                        color: true
                    }
                },
                category: {
                    select: {
                        category: true
                    }
                }
            },
        })
        return product
    } catch {

    }

}

export async function deleteOneProduct(id: string) {

    try {
        const product = await prisma.product.delete({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                name: true,
                description: true,
                image_url: true,
                price: true,
                color: {
                    select: {
                        color: true
                    }
                },
                category: {
                    select: {
                        category: true
                    }
                }
            },
        })
        return product
    } catch (error) {
        console.log(error)
    }

}

export async function getAllProductsAdmin(limit: number, offset: number, category: string, style: string) {
    const products = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            image_url: true,
            price: true,
            published: true,
            category: {
                include: {
                    category: {
                        select: {
                            name: true
                        }
                    }
                }
            },
            style: {
                include: {
                    style: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        },
        take: limit,
        skip: offset
    })
    const count = await prisma.product.count({})

    return {
        content: products,
        count
    }
}

export async function deleteManyProducts(products: number[]) {
    try {
        const deletedProducts = await prisma.product.deleteMany({
            where: {
                id: {
                    in: products
                }
            }
        })
        return (
            {
                message: 'Success'
            }
        )

    } catch (error) {
        console.log(error)
        return {
            message: 'Error'
        }
    }
}

export async function getOneProductAdmin(id: string) {

    try {
        const product = await prisma.product.findUnique({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                name: true,
                description: true,
                image_url: true,
                price: true,
                published: true,
                color: {
                    select: {
                        color: true
                    }
                },
                category: {
                    select: {
                        category: true
                    }
                },
                brand: {
                    select: {
                        brand: true
                    }
                },
                style: {
                    select: {
                        style: true
                    }
                }
            },
        })
        return product
    } catch (error) {
        console.log(error)

    }

}

export async function UpdateProduct(id: string, name: string | undefined, published: string | undefined, description: string | undefined, image_url: string | undefined, price: string | undefined) {
    console.log(published)
    try {
        const updatedProduct = await prisma.product.update({
            where: {
                id: Number(id)
            },
            data: {
                name: name ? name : undefined,
                description: description ? description : undefined,
                price: price ? Number(price) : undefined,
                image_url: image_url ? image_url : undefined,
                published: published ? published === 'true' ? true :  false : undefined
            }
        })

        console.log(updatedProduct)
        return {
            message: 'Success',
            content: updatedProduct
        }

    } catch (error) {
        console.log(error)
        return {
            message: 'Error'
        }
    }
}