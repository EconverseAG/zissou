import {useState} from 'react';

// import {Image} from '@shopify/hydrogen';
import * as styles from './SpecsColchaoSlick.module.scss';

import Slider from 'react-slick';

export default function SpecsColchaoSlick(/*{coral}*/) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className={styles.SpecsColchaoSlickContainer}>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={6}
        focusOnSelect={true}
      >
        <div>
          <span>toque e sensação térmica</span>
        </div>
        <div>
          <span>camada de conforto</span>
        </div>
        <div>
          <span>camada de aconchego</span>
        </div>
        <div>
          <span>sistema de suporte</span>
        </div>
        <div>
          <span>sensações</span>
        </div>
        <div>
          <span>benefícios</span>
        </div>
      </Slider>
      <Slider
        asNavFor={nav2}
        fade={true}
        ref={(slider1) => setNav1(slider1)}
        dots={true}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
