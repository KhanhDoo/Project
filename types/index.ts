import type {Category, Color, Image, Size, Product} from '@prisma/client'

export type APIError = {
    statusCode: number,
    statusMessage: string,
    message: string,
    data?: Record<string, string>
}
export type RouteParams = { 
    categoryId: string;
    productId: string;
    colorId: string;
    sizeId: string;
}

export type SafeProduct =  Product & { 
    category: Category;
    images: Image[];
    size: Size;
}
