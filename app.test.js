// const axios = require('axios');
// const { fetchProductVariants, sortVariantsByPrice } = require('./utils');

// // Mocking axios
// jest.mock('axios');

// describe('fetchProductVariants', () => {
//     beforeEach(() => {
//         axios.post.mockReset();
//     });

//     it('should fetch product variants correctly', async () => {
//         axios.post.mockResolvedValue({
//             status: 200,
//             data: { data: { products: { edges: [{ node: { title: 'My Glove', variants: { edges: [{ node: { title: 'variant A', price: '20' } }] } } }] } } }
//         });

//         const response = await fetchProductVariants('glove');
//         expect(response).toEqual([{ node: { title: 'My Glove', variants: { edges: [{ node: { title: 'variant A', price: '20' } }] } } }]);
//     });

//     it('should handle no products found', async () => {
//         axios.post.mockResolvedValue({
//             status: 200,
//             data: { data: { products: { edges: [] } } }
//         });

//         const response = await fetchProductVariants('nonexistent product');
//         expect(response).toEqual([]);
//     });
// });

// describe('sortVariantsByPrice', () => {
//     it('should sort variants by price', () => {
//         const products = [{ node: { title: 'My Glove', variants: { edges: [{ node: { title: 'variant A', price: '25' } }, { node: { title: 'variant B', price: '20' } }] } } }];
//         const sortedProducts = sortVariantsByPrice(products);
//         expect(sortedProducts[0].variants[0].price).toBe('20');
//         expect(sortedProducts[0].variants[1].price).toBe('25');
//     });
// });
