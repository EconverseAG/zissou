import {useShopQuery, flattenConnection, Link} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../components/Layout.server';
import FeaturedCollection from '../components/FeaturedCollection';
import ProductCard from '../components/ProductCard';
import {Suspense} from 'react';

import CinematographyBanner from '../components/CinematographyBanner/CinematographyBanner.client';
import SleepAndLive from '../components/SleepAndLive/SleepAndLive.client';
import ChooseYourDestiny from '../components/ChooseYourDestiny/ChooseYourDestiny.client';
import ZissouStores from '../components/ZissouStores/ZissouStores.client';
import TryIt from '../components/TryIt/TryIt.client';
import Partners from '../components/Partners/Partners.client';
import OpenYourHeart from '../components/OpenYourHeart/OpenYourHeart.client';
import ZissouNaMidia from '../components/ZissouNaMidia/ZissouNaMidia.client';
import Instagram from '../components/InstagramZissou/InstagramZissou.client';
import Reviews from '../components/Reviews/Reviews.client';
import CoralOrBlue from '../components/CoralOrBlue/CoralOrBlue.client';
import Klabin from '../components/Klabin/Klabin.client';

export default function Index({country = {isoCode: 'BR'}}) {
  return (
    <Layout>
      <CinematographyBanner />
      <SleepAndLive />
      <ChooseYourDestiny />
      <TryIt />
      <ZissouStores />
      <Partners />
      <OpenYourHeart />
      <ZissouNaMidia />
      <Instagram />
      <Reviews />
      <CoralOrBlue />
      <Klabin />
      <Suspense fallback={<BoxFallback />}>
        <FeaturedProductsBox country={country} />
      </Suspense>
      <Suspense fallback={<BoxFallback />}>
        <FeaturedCollectionBox country={country} />
      </Suspense>
    </Layout>
  );
}

function BoxFallback() {
  return <div className="bg-white p-12 shadow-xl rounded-xl mb-10 h-40"></div>;
}

function FeaturedProductsBox({country}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
    },
    preload: true,
  });

  const collections = data ? flattenConnection(data.collections) : [];
  const featuredProductsCollection = collections[0];
  const featuredProducts = featuredProductsCollection
    ? flattenConnection(featuredProductsCollection.products)
    : null;

  return (
    <div className="bg-white p-12 shadow-xl rounded-xl mb-10">
      {featuredProductsCollection ? (
        <>
          <div className="flex justify-between items-center mb-8 text-md font-medium">
            <span className="text-black uppercase">
              {featuredProductsCollection.title}
            </span>
            <span className="hidden md:inline-flex">
              <Link
                to={`/collections/${featuredProductsCollection.handle}`}
                className="text-blue-600 hover:underline"
              >
                Shop all
              </Link>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="md:hidden text-center">
            <Link
              to={`/collections/${featuredProductsCollection.handle}`}
              className="text-blue-600"
            >
              Shop all
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
}

function FeaturedCollectionBox({country}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
    },
    preload: true,
  });

  const collections = data ? flattenConnection(data.collections) : [];
  const featuredCollection =
    collections && collections.length > 1 ? collections[1] : collections[0];

  return <FeaturedCollection collection={featuredCollection} />;
}

const QUERY = gql`
  query indexContent($country: CountryCode) @inContext(country: $country) {
    collections(first: 2) {
      edges {
        node {
          handle
          id
          title
          image {
            id
            url
            altText
            width
            height
          }
          products(first: 3) {
            edges {
              node {
                handle
                id
                title
                variants(first: 1) {
                  edges {
                    node {
                      id
                      title
                      availableForSale
                      image {
                        id
                        url
                        altText
                        width
                        height
                      }
                      priceV2 {
                        currencyCode
                        amount
                      }
                      compareAtPriceV2 {
                        currencyCode
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
