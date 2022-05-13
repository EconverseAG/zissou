import {Fragment, useState} from 'react';
import {Link, Image} from '@shopify/hydrogen/client';
import {FocusTrap} from '@headlessui/react';

import OpenIcon from '../OpenIcon';

import * as styles from './header.module.scss';

import LogoZissou from '../../assets/logo-zissou-antigo.svg';
import ColchaoCoral from '../../assets/menuItem__Coral.png';
import ColchaoBlue from '../../assets/menuItem__Blue.png';
import WhatsAppMenu from '../../assets/whatsapp-menu.png';
import MenuLocator from '../../assets/menu-locator.png';

import IconMessage from '../../assets/icone-menu-message.png';
import IconHelp from '../../assets/icone-menu-help.png';
import IconAccount from '../../assets/icone-menu-account.png';
import IconInstagram from '../../assets/icone-menu-instagram.png';
import IconFacebook from '../../assets/icone-menu-facebook.png';
import IconYoutube from '../../assets/icone-menu-youtube.png';

/**
 * A client component that defines the navigation for a mobile storefront
 */
export default function MobileNavigation({/*collections*/ isOpen, setIsOpen}) {
  const OpenFocusTrap = isOpen ? FocusTrap : Fragment;

  const [openMenuColchoes, setOpenMenuColchoes] = useState(false);
  const [openMenuLencol, setOpenMenuLencol] = useState(false);

  return (
    <div className={styles.menuHamburguer}>
      <OpenFocusTrap>
        <button
          type="button"
          className={styles.buttonOpenCloseMenu}
          onClick={() => setIsOpen((previousIsOpen) => !previousIsOpen)}
        >
          <span className="sr-only">{isOpen ? 'Close' : 'Open'} Menu</span>
          {isOpen ? '' : <OpenIcon />}
        </button>
        {isOpen ? (
          <div className={styles.menuMobileWrapper}>
            <div className={styles.menuMobileContent}>
              <div className={styles.menuMobileContentTop}>
                <div>
                  {isOpen ? (
                    <button
                      onClick={() =>
                        setIsOpen((previousIsOpen) => !previousIsOpen)
                      }
                    >
                      <CloseIcon />
                    </button>
                  ) : (
                    ''
                  )}
                  <Link className={styles.logoMenu} to="/">
                    <Image src={LogoZissou} height="30" width="90" />
                  </Link>
                </div>
                <ul>
                  {/* {collections.map((collection) => (
                  <li className="border-b border-gray-200" key={collection.id}>
                    <Link
                      
                      className="group py-5 text-gray-700 flex items-center justify-between"
                      to={`/collections/${collection.handle}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {collection.title}
                      <ArrowRightIcon className="hidden group-hover:block" />
                    </Link>
                  </li>
                ))} */}
                  <li>
                    <div className={styles.titleWithArrow}>
                      <Link to="/pages/colchoes-zissou">Colchões</Link>
                      <button
                        onClick={() =>
                          setOpenMenuColchoes(
                            (previousIsOpen) => !previousIsOpen,
                          )
                        }
                      >
                        <ArrowRightIcon className={styles.arrowDown} />
                      </button>
                    </div>
                    <ul
                      className={styles.subMenu}
                      style={{
                        opacity: openMenuColchoes ? '1' : '',
                        top: openMenuColchoes ? '0' : '',
                        maxHeight: openMenuColchoes ? '999px' : '',
                        padding: openMenuColchoes ? '15px 15px 0' : '',
                        zIndex: openMenuColchoes ? '' : '-1',
                      }}
                    >
                      <li className={styles.coral}>
                        <Link to="/products/colchao-zissou-coral-original">
                          <Image src={ColchaoCoral} width="205" height="27" />
                        </Link>
                      </li>
                      <li className={styles.blue}>
                        <Link to="/products/colchao-zissou-blue">
                          <Image src={ColchaoBlue} width="205" height="27" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/pages/colchoes-zissou"
                          className={styles.descubra}
                        >
                          Descubra os colchões
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/pages/comparativo-colchoes"
                          className={styles.compare}
                        >
                          Compare os colchões
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.novo}>
                    <Link to="/products/base-zissou">Base</Link>
                  </li>
                  <li>
                    <Link to="/products/travesseiro-zissou">Travesseiro</Link>
                  </li>
                  <li>
                    <div className={styles.titleWithArrow}>
                      <Link to="/pages/lencol-e-duvet-zissou">
                        Lençol & Duvet
                      </Link>
                      <button
                        onClick={() =>
                          setOpenMenuLencol((previousIsOpen) => !previousIsOpen)
                        }
                      >
                        <ArrowRightIcon className={styles.arrowDown} />
                      </button>
                    </div>
                    <ul
                      className={styles.subMenu}
                      style={{
                        opacity: openMenuLencol ? '1' : '',
                        top: openMenuLencol ? '0' : '',
                        maxHeight: openMenuLencol ? '999px' : '',
                        padding: openMenuLencol ? '15px 15px 0' : '',
                        zIndex: openMenuLencol ? '' : '-1',
                      }}
                    >
                      <li>
                        <Link
                          to="/products/jogo-de-lencol-zissou"
                          style={{textDecoration: 'underline'}}
                        >
                          Lençol
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/duvet-zissoue"
                          style={{textDecoration: 'underline'}}
                        >
                          Duvet
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/pages/lencol-e-duvet-zissou"
                          className={styles.descubra}
                        >
                          Descubra o lençol e duvet
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li>
                    <Link  to="/products/toca-zissou">Toca</Link>
                  </li> */}
                  <li>
                    <Link to="/pages/bundles">Combos</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.menuMobileContentBottom}>
                <div className={styles.menuMobileItem}>
                  <Link to="https://api.whatsapp.com/send?phone=5511932858213">
                    <Image src={WhatsAppMenu} width="19" height="19" />
                    (11) 93285-8213
                  </Link>
                  <Link to="/casa-zissou">
                    <Image src={MenuLocator} width="11" height="14" />
                    Lojas
                  </Link>
                </div>
                <div className={styles.menuMobileItem}>
                  <Link to="/blogs/midia">Zissou na mídia</Link>
                  <Link to="/quem-somos">Quem somos</Link>
                </div>
                <div className={styles.menuMobileItem}>
                  <div>
                    <Link to="mailto:falecom@zissou.com.br">
                      <Image src={IconMessage} width="23" height="16" />
                    </Link>
                    <Link to="/pages/atendimento">
                      <Image src={IconHelp} width="22" height="24" />
                    </Link>
                    <Link to="/account/login">
                      <Image src={IconAccount} width="16" height="20" />
                    </Link>
                  </div>
                  <div>
                    <Link to="https://www.instagram.com/zissoubr/">
                      <Image src={IconInstagram} width="20" height="21" />
                    </Link>
                    <Link to="https://www.facebook.com/zissoubr/">
                      <Image src={IconFacebook} width="18" height="18" />
                    </Link>
                    <Link to="https://www.youtube.com/channel/UC4KaCTzQznWLq51ci6CFdYQ">
                      <Image src={IconYoutube} width="24" height="19" />
                    </Link>
                  </div>
                </div>
                <div className={styles.menuMobileItem}>
                  <Link to="/blogs/redefinaseusono">
                    SAIBA MAIS SOBRE O MOVIMENTO DO SONO
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </OpenFocusTrap>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 17L17 1M1 1L17 17"
        stroke="#dcddde"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({className}) {
  return (
    <svg
      className={className}
      viewBox="0 0 1024 574"
      aria-labelledby="cmsi-ant-down-title"
      id="si-ant-down"
    >
      <title id="cmsi-ant-down-title">icon down</title>
      <path d="M1015 10q-10-10-23-10t-23 10L512 492 55 10Q45 0 32 0T9 10Q0 20 0 34t9 24l480 506q10 10 23 10t23-10l480-506q9-10 9-24t-9-24z"></path>
    </svg>
  );
}
