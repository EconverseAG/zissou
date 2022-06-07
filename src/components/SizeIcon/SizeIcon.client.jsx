import {useMemo} from 'react';
import useZissouProduct from '../../hooks/useZissouProduct';
import SvgCasal from './SvgCasal.client';
import SvgKing from './SvgKing.client';
import SvgKingBr from './SvgKingBr.client';
import SvgQueen from './SvgQueen.client';
import SvgSolteiro from './SvgSolteiro.client';
import SvgSolteiroEspecial from './SvgSolteiroEspecial.client';

function SizeIcon({name}) {
  const {isColchao, isCoral, isSpark} = useZissouProduct();

  const color = useMemo(
    () =>
      isColchao
        ? isCoral
          ? '#f08590'
          : isSpark
          ? '#9873AC'
          : '#415264'
        : '#D4A8BF',
    [isColchao, isCoral, isSpark],
  );

  const icon = useMemo(() => {
    const nameToCompare = name?.toLowerCase();

    if (nameToCompare.includes('solteiro especial'))
      return <SvgSolteiroEspecial color={color} />;

    if (nameToCompare.includes('solteiro'))
      return <SvgSolteiro color={color} />;

    if (nameToCompare.includes('casal')) return <SvgCasal color={color} />;

    if (nameToCompare.includes('king br')) return <SvgKingBr color={color} />;

    if (nameToCompare.includes('king')) return <SvgKing color={color} />;

    if (nameToCompare.includes('queen')) return <SvgQueen color={color} />;
  }, [color, name]);

  return icon;
}

export default SizeIcon;
