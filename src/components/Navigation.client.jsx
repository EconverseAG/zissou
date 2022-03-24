import {Link} from '@shopify/hydrogen/client';

import * as styles from './header.module.scss';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation({collections}) {
  return (
    <nav className={styles.navigation}>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link
              to={`/collections/${collection.handle}`}
              className="block p-4 hover:opacity-80"
            >
              {collection.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
