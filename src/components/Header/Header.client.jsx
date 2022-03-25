import {useEffect, useState} from 'react';
import {Link} from '@shopify/hydrogen/client';

import CartToggle from '../CartToggle.client';
import {useCartUI} from '../CartUIProvider.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';

import {Image} from '@shopify/hydrogen';

import LogoZissou from '../../assets/logo-zissou.svg';
import LogoWhatsApp from '../../assets/logo-whatsapp.svg';

import * as styles from './header.module.scss';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {isCartOpen} = useCartUI();

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    setScrollbarWidth(scrollbarWidth);
  }, [isCartOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScroll(currentScrollY);

      if (currentScrollY > 45) {
        setIsScrolled(true);
      }

      if (currentScrollY == 0) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scroll]);

  return (
    <>
      {/* <styles.StyleTag /> */}
      <header
        className={styles.container}
        style={{
          background: isScrolled
            ? '#415264'
            : 'linear-gradient(180deg,rgba(0,0,0,.65) 0,rgba(0,0,0,0) 90%)',
          paddingBottom: isScrolled ? '0' : '',
        }}
      >
        <div
          className={styles.header}
          style={{
            opacity: isMobileNavOpen ? '' : '.95',
            paddingRight: isCartOpen ? scrollbarWidth : 0,
          }}
        >
          <div className={styles.content}>
            <MobileNavigation
              collections={collections}
              isOpen={isMobileNavOpen}
              setIsOpen={setIsMobileNavOpen}
            />
            <Link className={styles.logo} to="/">
              <Image src={LogoZissou} height="60" width="34" />
            </Link>
            <Navigation collections={collections} storeName={storeName} />
            <div className={styles.buyOptions}>
              <Link to="/casa-zissou" className={styles.stores}>
                Lojas
              </Link>
              <Link to="https://api.whatsapp.com/send?phone=5511932858213">
                <Image src={LogoWhatsApp} width="26" height="30" />
              </Link>
              <CartToggle
                handleClick={() => {
                  if (isMobileNavOpen) setIsMobileNavOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
