require('dotenv').config();
const axios = require('axios');

/**
 * Function to fetch product variants from Shopify based on the product name
 * 
 * @param {String} productName 
 * @returns {Array} - Array of products with variants
 */
async function fetchProductVariants(productName) {
    const query = `#graphql
    query ($query: String!) {
    products(first: 10, query: $query) {
        edges {
        node {
            title
            variants(first: 10) {
            edges {
                node {
                title
                price
                }
            }
            }
        }
        }
    }
    }
`;

    const variables = {
        query: productName,
    };

    const response = await axios.post(`${process.env.SHOPIFY_API_URL}/admin/api/2023-04/graphql.json`, {
        query,
        variables,
    }, {
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': process.env.ADMIN_TOKEN,
        },
    });

    const data = response.data;
    return data.data.products.edges;
}

/**
 * Function to sort the variants by price
 * 
 * @param {Array} products - Array of products with variants
 * @returns {Array} - Array of products with sorted variants
 */
function sortVariantsByPrice(products) {
    const sortedProducts = products.map((product) => {
        const variants = product.node.variants.edges.map((variant) => variant.node);

        // Sort the variants by price
        variants.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

        return {
            title: product.node.title,
            variants,
        };
    });

    return sortedProducts;
}

/**
 * Function to format and print the output
 * 
 * @param {Array} products 
 * @returns {void}
 */
function printVariants(products) {
    products.forEach((product) => {
        product.variants.forEach((variant) => {
            console.log(`${product.title} - ${variant.title} - price $${variant.price}`);
        });
    });
}

module.exports = {
    fetchProductVariants,
    sortVariantsByPrice,
    printVariants,
};
