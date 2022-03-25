import {Image} from '@shopify/hydrogen/client';

import Minicart from '../assets/minicart.svg';

/**
 * A shared component that specifies the icon to represent a cart
 */
export default function CartIcon() {
  return <Image src={Minicart} width="46" height="46" />;
}
