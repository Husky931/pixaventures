import { createStorefrontApiClient } from '@shopify/storefront-api-client';

export const CLIENT = createStorefrontApiClient({
  storeDomain:
    process.env.SHOPIFY_STORE_DOMAIN ?? 'https://qtr1jt-wr.myshopify.com',
  apiVersion: '2025-01',
  publicAccessToken: process.env.STOREFRONT_PUBLIC_ACCESS_TOKEN,
});
