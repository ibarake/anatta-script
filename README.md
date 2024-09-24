# Shopify Product Variant Fetcher

This Node.js application fetches product variants from Shopify using the Shopify GraphQL API and lists them sorted by price. It's designed to help shop owners and developers quickly access product variant information.

## Features

- Fetch product variants based on product names.
- Sort the product variants by price.
- Use Shopify's powerful GraphQL API for efficient data retrieval.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js v18.x or higher installed.
- Access to a Shopify store with admin API permissions.

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/ibarake/anatta-script.git
cd anatta-script
```

Install the necessary dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```md
SHOPIFY_API_URL=<Your Shopify GraphQL API URL>
ADMIN_TOKEN=<Your Shopify Admin API Token>
```

Make sure to replace `<Your Shopify GraphQL API URL>` and `<Your Shopify Admin API Token>` with your actual Shopify API URL and token.

## Usage

Run the script using:

```bash
node app.js --name product-name
```

Replace `product-name` with the name of the product you want to fetch variants for.

## Example

```bash
node app.js --name glove
```

Expected Output:

```bash
My Glove - variant A - price $20
Your Gloves - variant X - price $22
My Glove - variant B - price $25
```

## Testing

To run the tests, use:

```bash
npm test
```

Ensure you have Jest installed and properly configured as described in the installation section.

## Contributing

Contributions to this project are welcome. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/featureName`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/featureName`).
6. Create a new Pull Request.
