import {LoadingProvider} from '../hooks/useLoading';

import CinematographyBanner from '../components/CinematographyBanner/CinematographyBanner.client';
import SleepAndLive from '../components/SleepAndLive/SleepAndLive.client';
import ChooseYourDestiny from '../components/ChooseYourDestiny/ChooseYourDestiny.client';
import ZissouStores from '../components/ZissouStores/ZissouStores.client';
import TryItFor100Days from '../components/TryItFor100Days/TryItFor100Days.client';
import Partners from '../components/Partners/Partners.client';
import OpenYourHeart from '../components/OpenYourHeart/OpenYourHeart.client';
import ZissouNaMidia from '../components/ZissouNaMidia/ZissouNaMidia.client';
import Instagram from '../components/InstagramZissou/InstagramZissou.client';
import Reviews from '../components/Reviews/Reviews.client';
import CoralOrBlue from '../components/CoralOrBlue/CoralOrBlue.client';
import Klabin from '../components/Klabin/Klabin.client';
import FamiliaZissou from '../components/FamiliaZissou/FamiliaZissou.client';
import parseUrl from '../helpers/parseUrl';

const Gif100Dias = parseUrl('gif_100dias.gif');

export default function Home() {
  return (
    <LoadingProvider>
      <CinematographyBanner />
      <SleepAndLive />
      <ChooseYourDestiny />
      <TryItFor100Days image={Gif100Dias} />
      <ZissouStores />
      <Partners />
      <OpenYourHeart />
      <ZissouNaMidia />
      <Instagram />
      <Reviews />
      <CoralOrBlue />
      <Klabin />
      <FamiliaZissou />
    </LoadingProvider>
  );
}
