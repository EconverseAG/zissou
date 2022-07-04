import {
  defineConfig,
  CookieSessionStorage,
  PerformanceMetricsServerAnalyticsConnector,
} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: () => ({
    defaultLanguageCode: 'PT_BR',
    defaultCountryCode: 'BR',
    storeDomain: 'zissou.myshopify.com',
    storefrontToken: 'bcc7ee1f7523fb44f93be010e0bb5120',
    storefrontApiVersion: '2022-01',
  }),
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
  serverAnalyticsConnectors: [PerformanceMetricsServerAnalyticsConnector],
});
