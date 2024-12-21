import db from '~/utils/db'

export default defineEventHandler(async (event) => {
    try {
        const products = await db.product.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                images: true,
                category: true,
                color: true,
                size: true,
            },
        });
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw createError({
            statusCode: 500,
            message: 'Failed to fetch products',
        });
    }
});
