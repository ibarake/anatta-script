const { fetchProductVariants, sortVariantsByPrice, printVariants } = require('./utils');

/**
 * Main function to fetch products and print the variants
 * 
 * @returns {Promise<void>}
 */
async function main() {
    const args = process.argv.slice(2);
    const productName = args.includes('--name') ? args[args.indexOf('--name') + 1] : null;
    
    try {
        console.log(`Fetching products for ${productName ? productName : ""}...`);
        const products = await fetchProductVariants(productName ? productName : "");
        console.log(`Fetched ${products.length} products.`);
        const sortedProducts = sortVariantsByPrice(products);
        printVariants(sortedProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

main();

