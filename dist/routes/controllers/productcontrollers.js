"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneProduct = exports.getOneProduct = exports.getAllProducts = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
async function getAllProducts(limit, offset, category, style) {
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
//# sourceMappingURL=productcontrollers.js.map