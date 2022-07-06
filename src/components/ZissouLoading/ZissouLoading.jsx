import {Image} from '@shopify/hydrogen/client';
import parseUrl from '../../helpers/parseUrl';

const LoadingAnimation = parseUrl('loading.gif');

function ZissouLoading() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.3s',
      }}
    >
      <Image src={LoadingAnimation} width={500} height={500} />
    </div>
  );
}

export default ZissouLoading;
