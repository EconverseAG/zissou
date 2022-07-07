import {useState, useMemo, useEffect} from 'react';

import useMobile from './useMobile';
import parseUrl from '../helpers/parseUrl';

const Illustration1 = parseUrl('descrever-lencol-1.png');
const Illustration2 = parseUrl('descrever-lencol-2.png');
const Illustration3 = parseUrl('descrever-lencol-3.png');
const Illustration4 = parseUrl('descrever-lencol-4.png');
const Illustration5 = parseUrl('descrever-lencol-5.png');
const Illustration6 = parseUrl('descrever-lencol-6.png');
const Illustration7 = parseUrl('descrever-lencol-7.png');
const Illustration8 = parseUrl('descrever-lencol-8.png');
const Illustration9 = parseUrl('descrever-lencol-9.png');
const Illustration10 = parseUrl('descrever-lencol-10.png');

const IllustrationMobile1 = parseUrl('descrever-lencol-mobile-1.png');
const IllustrationMobile2 = parseUrl('descrever-lencol-mobile-2.png');
const IllustrationMobile3 = parseUrl('descrever-lencol-mobile-3.png');
const IllustrationMobile4 = parseUrl('descrever-lencol-mobile-4.png');
const IllustrationMobile5 = parseUrl('descrever-lencol-mobile-5.png');
const IllustrationMobile6 = parseUrl('descrever-lencol-mobile-6.png');
const IllustrationMobile7 = parseUrl('descrever-lencol-mobile-7.png');
const IllustrationMobile8 = parseUrl('descrever-lencol-mobile-8.png');
const IllustrationMobile9 = parseUrl('descrever-lencol-mobile-9.png');
const IllustrationMobile10 = parseUrl('descrever-lencol-mobile-10.png');

const quoteList = [
  {
    phrase: 'Quando acordei queria vestir meu lençol',
    author: 'Simone F. (São Sebastião, SP)',
  },
  {
    phrase: 'Parece que minha cama está brilhando',
    author: 'Marcos R. (Manaus, AM)',
  },
  {
    phrase: 'O melhor "não acredito que estou na minha cama" que já vivi',
    author: 'David V. (Porto Alegre, RS)',
  },
  {
    phrase:
      'De repente fico rindo à toa sem saber por que, e vem a vontade de sonhar e de novo te encontrar',
    author: 'Marcela M. (Belo Horizonte, MG)',
  },
  {
    phrase: 'Me senti num hotel de luxo brabo',
    author: 'Alex F. (Rio de Janeiro, RJ)',
  },
  {
    phrase: 'Se fosse um pouco mais soft, derreteria',
    author: 'Nina M. (Recife, PE)',
  },
  {
    phrase: 'É como dormir nas nuvens',
    author: 'Hércules H. (São Paulo)',
  },
  {
    phrase: 'Não me acorde!!!',
    author: 'Joaquim L. (Curitiba, PR)',
  },
  {
    phrase: 'Super macio e geladinho 😉❄',
    author: 'Victor A. (São Paulo, SP)',
  },
  {
    phrase: 'De outro mundo',
    author: 'Johnny K. (São Paulo, SP)',
  },
];

function useQuote() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [phrase, setPhrase] = useState();
  const [author, setAuthor] = useState();
  const [quoteImage, setQuoteImage] = useState();

  const {isMobile} = useMobile();

  const imageList = useMemo(
    () =>
      isMobile
        ? [
            IllustrationMobile1,
            IllustrationMobile2,
            IllustrationMobile3,
            IllustrationMobile4,
            IllustrationMobile5,
            IllustrationMobile6,
            IllustrationMobile7,
            IllustrationMobile8,
            IllustrationMobile9,
            IllustrationMobile10,
          ]
        : [
            Illustration1,
            Illustration2,
            Illustration3,
            Illustration4,
            Illustration5,
            Illustration6,
            Illustration7,
            Illustration8,
            Illustration9,
            Illustration10,
          ],
    [isMobile],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const newQuoteIndex =
        quoteIndex + 1 >= quoteList?.length ? 0 : quoteIndex + 1;

      setQuoteIndex(newQuoteIndex);
    }, 3000);

    return () => clearTimeout(timer);
  }, [quoteIndex]);

  useEffect(() => {
    if (!quoteList?.length || !imageList?.length) return;

    setQuoteImage(imageList[quoteIndex]);
    setPhrase(quoteList[quoteIndex].phrase);
    setAuthor(quoteList[quoteIndex].author);
  }, [imageList, quoteIndex]);

  return {phrase, author, quoteImage};
}

export default useQuote;
