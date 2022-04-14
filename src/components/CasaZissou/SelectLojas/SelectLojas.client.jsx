import {useState} from 'react';

import useMobile from '../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import * as styles from './SelectLojas.module.scss';

import ZissouFastShop from '../../../assets/zissou-fastshop.png';
import CamaZissouFastshop from '../../../assets/cama-zissou-fastshop.png';

export default function SelectLojas() {
  const {isMobile} = useMobile();

  const [loja, setLoja] = useState('');

  const handleChange = (event) => {
    setLoja(event.target.value);
  };

  return (
    <div className={styles.SelectLojasContainer}>
      {isMobile ? <Image src={ZissouFastShop} width="204" height="36" /> : null}
      <Image
        src={CamaZissouFastshop}
        width={isMobile ? '266' : '582'}
        height={isMobile ? '208' : '516'}
        className={styles.CamaZissouFastshop}
      />
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
            IconComponent={ExpandMoreIcon}
            className={styles.SelectLojasSelect}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
