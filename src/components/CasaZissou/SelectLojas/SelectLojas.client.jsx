import {useState} from 'react';

import useMobile from '../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen/client';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import * as styles from './SelectLojas.module.scss';

import ZissouFastShop from '../../../assets/zissou-fastshop.png';
import CamaZissouFastshop from '../../../assets/cama-zissou-fastshop.png';

import data from './data';

export default function SelectLojas() {
  const {isMobile} = useMobile();
  const stores = data;

  const [loja, setLoja] = useState('');

  const handleChange = (event) => {
    setLoja(event.target.value);
  };

  const lojaFiltered = stores.filter((store) => store.value == loja);

  return (
    <div className={styles.SelectLojasContainer}>
      {isMobile ? <Image src={ZissouFastShop} width="204" height="36" /> : null}
      <div className={styles.CamaZissouFastshop}>
        <Image
          src={CamaZissouFastshop}
          width={isMobile ? '266' : '582'}
          height={isMobile ? '208' : '516'}
        />
      </div>
      <div className={styles.SelectLojasContent}>
        {isMobile ? null : (
          <Image src={ZissouFastShop} width="380" height="68" />
        )}
        <strong className={styles.SelectLojasTitle}>
          A experiência Zissou em lojas selecionadas da Fast Shop
        </strong>
        <span className={styles.SelectLojasSubtitle}>
          Espaços especiais de experimentação na Fast Shop, com uma seleção de
          produtos Zissou
        </span>
        <FormControl fullWidth className={styles.FormControlSelect}>
          <InputLabel
            id="demo-simple-select-label"
            className={styles.FormControlSelectLabel}
          >
            SELECIONE O ESPAÇO
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={loja}
            label="SELECIONE O ESPAÇO"
            onChange={handleChange}
            IconComponent={null}
            className={styles.SelectLojasSelect}
          >
            {stores.map((store) => (
              <MenuItem key={store.value} value={store.value}>
                {store.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {lojaFiltered.length ? (
          <div className={styles.SelectedStore}>
            <span
              dangerouslySetInnerHTML={{__html: lojaFiltered[0].address}}
              className={styles.SelectedStoreAddress}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
