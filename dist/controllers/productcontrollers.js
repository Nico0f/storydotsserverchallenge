"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductAdmin = exports.UpdateProduct = exports.getOneProductAdmin = exports.deleteManyProducts = exports.getAllProductsAdmin = exports.deleteOneProduct = exports.getOneProduct = exports.getAllProducts = void 0;
const prisma_1 = __importDefault(require("../prisma"));
async function getAllProducts(limit, offset, category, style, order) {
    try {
        let categories = category.split(',');
        if (categories.length > 0 && categories[0] !== 'undefined') {
            const allproducts = await prisma_1.default.productStyle.findMany({
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
                    },
                },
                orderBy: {
                    product: {
                        price: (order
                            ?
                                order === 'priceAs'
                                    ?
                                        'asc'
                                    :
                                        'desc'
                            :
                                undefined)
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
            });
            const count = await prisma_1.default.productStyle.count({
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
            });
            return {
                content: allproducts.map((element) => element.product),
                count
            };
        }
        const allproducts = await prisma_1.default.productStyle.findMany({
            where: {
                style: {
                    name: style
                }
            },
            orderBy: {
                product: {
                    price: (order
                        ?
                            order === 'priceAs'
                                ?
                                    'asc'
                                :
                                    'desc'
                        :
                            undefined)
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
        });
        const count = await prisma_1.default.productStyle.count({
            where: {
                style: {
                    name: style
                }
            }
        });
        return {
            content: allproducts.map((element) => element.product),
            count
        };
    }
    catch {
    }
}
exports.getAllProducts = getAllProducts;
async function getOneProduct(id) {
    try {
        const product = await prisma_1.default.product.findUnique({
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
        });
        return product;
    }
    catch {
    }
}
exports.getOneProduct = getOneProduct;
async function deleteOneProduct(id) {
    try {
        const product = await prisma_1.default.product.delete({
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
        });
        return product;
    }
    catch (error) {
        console.log(error);
    }
}
exports.deleteOneProduct = deleteOneProduct;
async function getAllProductsAdmin(limit, offset, category, style) {
    const products = await prisma_1.default.product.findMany({
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
    });
    const count = await prisma_1.default.product.count({});
    return {
        content: products,
        count
    };
}
exports.getAllProductsAdmin = getAllProductsAdmin;
async function deleteManyProducts(products) {
    try {
        const deletedProducts = await prisma_1.default.product.deleteMany({
            where: {
                id: {
                    in: products
                }
            }
        });
        return ({
            message: 'Success'
        });
    }
    catch (error) {
        console.log(error);
        return {
            message: 'Error'
        };
    }
}
exports.deleteManyProducts = deleteManyProducts;
async function getOneProductAdmin(id) {
    try {
        const product = await prisma_1.default.product.findUnique({
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
        });
        return product;
    }
    catch (error) {
        console.log(error);
    }
}
exports.getOneProductAdmin = getOneProductAdmin;
async function UpdateProduct(id, name, published, description, image_url, price) {
    console.log(published);
    try {
        const updatedProduct = await prisma_1.default.product.update({
            where: {
                id: Number(id)
            },
            data: {
                name: name ? name : undefined,
                description: description ? description : undefined,
                price: price ? Number(price) : undefined,
                image_url: image_url ? image_url : undefined,
                published: published ? published === 'true' ? true : false : undefined
            }
        });
        console.log(updatedProduct);
        return {
            message: 'Success',
            content: updatedProduct
        };
    }
    catch (error) {
        console.log(error);
        return {
            message: 'Error'
        };
    }
}
exports.UpdateProduct = UpdateProduct;
async function CreateProductAdmin(name, description, price, published, image_url, category, brand, style) {
    try {
        const newProduct = await prisma_1.default.product.create({
            data: {
                name,
                published: published === 'true' ? true : false,
                price: Number(price),
                image_url,
                description,
                category: {
                    create: {
                        category: {
                            connect: {
                                name: category
                            }
                        }
                    }
                },
                brand: {
                    create: {
                        brand: {
                            connect: {
                                name: brand
                            }
                        }
                    }
                },
                style: {
                    create: {
                        style: {
                            connect: {
                                name: style
                            }
                        }
                    }
                }
            },
        });
        return {
            message: 'Succes',
            content: newProduct
        };
    }
    catch (error) {
        console.log(error);
        return {
            message: 'Error'
        };
    }
}
exports.CreateProductAdmin = CreateProductAdmin;
//# sourceMappingURL=productcontrollers.js.map