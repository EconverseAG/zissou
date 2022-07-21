import {createContext, useContext, useState, useMemo} from 'react';
import {Image} from '@shopify/hydrogen/client';

import useMobile from '../useMobile';
import TableCheck from '../../components/ComparativoColchoes/TableCheck';
import parseUrl from '../../helpers/parseUrl';

const IconUmidade = parseUrl('icon-umidade.png');

const TextureSpark = parseUrl('textura-spark.png');
const TextureBlue = parseUrl('textura-blue.png');
const TextureCoral = parseUrl('textura-coral.png');
const TextureCoralHybrid = parseUrl('textura-coral-hibrido.png');

const TextureSparkMobile = parseUrl('textura-spark-mobile.png');
const TextureBlueMobile = parseUrl('textura-blue-mobile.png');
const TextureCoralMobile = parseUrl('textura-coral-mobile.png');
const TextureCoralHybridMobile = parseUrl('textura-coral-hibrido-mobile.png');

const IconFrescor = parseUrl('icon-frescor.svg');

const IconDispersaoUmidade = parseUrl('icon-dispersao-umidade.svg');
const IconAir = parseUrl('icon-umidade.png');
const Certifications = parseUrl('colchao-certificacoes.png');

const BounceLeve = parseUrl('bounce-leve.svg');
const BounceModerado = parseUrl('bounce-moderado.svg');
const BounceExtra = parseUrl('bounce-extra.svg');

const ComparativeContext = createContext({buyTogetherItems: []});
const useComparative = () => useContext(ComparativeContext);

function ComparativeProvider({children}) {
  const {isMobile} = useMobile();

  const productData = useMemo(
    () => ({
      spark: {
        id: 'spark',
        height: '20 cm',
        touchAndSensation: {
          touch: 'Aveludado',
          tissueTexture: (
            <Image
              src={isMobile ? TextureSparkMobile : TextureSpark}
              width={isMobile ? 123 : 267}
              height={isMobile ? 79 : 172}
            />
          ),
          freshness: <TableCheck />,
          tissueCharacteristics: (
            <div>
              <h3>Velvet and balanced</h3>
              <br />
              <p>
                • Tecido de origem americana
                <br />
                • Fibras de alta gramatura com toque de elastano
                <br />• Toque aveludado com leve elasticidade
              </p>
            </div>
          ),
        },
        comfortLayer: {
          resilienceAndProgressiveSupport: <TableCheck checked colorSpark />,
          antimicrobianaProperties: <TableCheck checked colorSpark />,
          umidityDispersion: (
            <Image
              src={IconDispersaoUmidade}
              width={isMobile ? 36 : 62}
              height={isMobile ? 36 : 62}
            />
          ),
          bodyWeightDistribution: <TableCheck checked colorSpark />,
          bounce: (
            <>
              <Image
                src={BounceLeve}
                width={isMobile ? 83 : 145}
                height={isMobile ? 41 : 56}
              />
              <p>Leve</p>
            </>
          ),
          airflow: (
            <Image
              src={IconAir}
              width={isMobile ? 36 : 63}
              height={isMobile ? 36 : 63}
            />
          ),
          certifications: (
            <Image src={Certifications} width={314} height={89} />
          ),
          materialDetails: (
            <div>
              <h3>Latex Infused</h3>
              <br />
              <p>
                • Espuma de alta resiliência com látex na composição, de origem
                belga
                <br /> • Material exclusivo dos colchões Zissou
                <br /> • Microclima saudável e características ergonômicas
              </p>
            </div>
          ),
        },
        cozinessLayer: {
          bodyCurvatureAdaptability: <TableCheck checked colorSpark />,
          moveWavesAbsortion: <TableCheck checked colorSpark />,
          pressurePointsReleaf: <TableCheck checked colorSpark />,
          coolingGel: <TableCheck />,
          materialDetails: (
            <div>
              <h3>Visco</h3>
              <br />
              <p>
                • Absorve e distribui a pressão
                <br /> • Transferência mínima de movimentos
              </p>
            </div>
          ),
        },
        supportSystem: {
          mainMaterial: '12cm de poliuretano de alta densidade e durabilidade',
          transitionLayer: <TableCheck />,
          ergonomicZoning: <TableCheck />,
          supportSensation: 'estável e uniforme',
          internalAirflow: (
            <Image
              src={IconUmidade}
              width={isMobile ? 36 : 63}
              height={isMobile ? 36 : 63}
            />
          ),
          supportedWeight: '150kg',
          materialDetails: (
            <p>
              • Espuma de poliuretano de alta densidade
              <br /> • Suporte uniforme com reforço do isolamento de movimento
            </p>
          ),
        },
        security: {
          lateralHandling: <TableCheck checked colorSpark />,
          antidriftingTissue: <TableCheck checked colorSpark />,
          materialDetails:
            'Tecido com trama fechada para maior durabilidade e proteção contra o atrito',
        },
        benefits: {
          oneHundredDays: <TableCheck checked colorSpark />,
          tenYearsWarranty: <TableCheck checked colorSpark />,
          freeShipping: <TableCheck checked colorSpark />,
          scheduledDelivery: 'Opcional',
        },
      },
      sparkHybrid: {
        id: 'sparkHybrid',
        height: '25 cm',
        touchAndSensation: {
          touch: 'Aveludado',
          tissueTexture: (
            <Image
              src={isMobile ? TextureSparkMobile : TextureSpark}
              width={isMobile ? 123 : 267}
              height={isMobile ? 79 : 172}
            />
          ),
          freshness: <TableCheck />,
          tissueCharacteristics: (
            <div>
              <h3>Velvet and balanced</h3>
              <br />
              <p>
                • Tecido de origem americana
                <br />
                • Fibras de alta gramatura com toque de elastano
                <br />• Toque aveludado com leve elasticidade
              </p>
            </div>
          ),
        },
        comfortLayer: {
          resilienceAndProgressiveSupport: <TableCheck checked colorSpark />,
          antimicrobianaProperties: <TableCheck checked colorSpark />,
          umidityDispersion: (
            <Image
              src={IconDispersaoUmidade}
              width={isMobile ? 36 : 62}
              height={isMobile ? 36 : 62}
            />
          ),
          bodyWeightDistribution: <TableCheck checked colorSpark />,
          bounce: (
            <>
              <Image
                src={BounceLeve}
                width={isMobile ? 83 : 145}
                height={isMobile ? 41 : 56}
              />
              <p>Leve</p>
            </>
          ),
          airflow: (
            <Image
              src={IconAir}
              width={isMobile ? 36 : 63}
              height={isMobile ? 36 : 63}
            />
          ),
          certifications: (
            <Image src={Certifications} width={314} height={89} />
          ),
          materialDetails: (
            <div>
              <h3>Latex Infused</h3>
              <br />
              <p>
                • Espuma de alta resiliência com látex na composição, de origem
                belga
                <br /> • Material exclusivo dos colchões Zissou
                <br /> • Microclima saudável e características ergonômicas
              </p>
            </div>
          ),
        },
        cozinessLayer: {
          bodyCurvatureAdaptability: <TableCheck checked colorSpark />,
          moveWavesAbsortion: <TableCheck checked colorSpark />,
          pressurePointsReleaf: <TableCheck checked colorSpark />,
          coolingGel: <TableCheck />,
          materialDetails: (
            <div>
              <h3>Visco</h3>
              <br />
              <p>
                • Absorve e distribui a pressão
                <br /> • Transferência mínima de movimentos
              </p>
            </div>
          ),
        },
        supportSystem: {
          mainMaterial: '12cm de poliuretano de alta densidade e durabilidade',
          transitionLayer: <TableCheck checked colorSpark />,
          ergonomicZoning: <TableCheck />,
          supportSensation: 'bounce com adaptação ao corpo',
          internalAirflow: (
            <>
              <Image
                src={IconUmidade}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
              <Image
                src={IconUmidade}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
              <Image
                src={IconUmidade}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
            </>
          ),
          supportedWeight: '170kg',
          materialDetails: (
            <p>
              • Sistema de suporte de 12cm com espuma e molas Leggett & Platt
              <br /> • Molas ensacadas individualmente para maior adaptabilidade
              do colchão às curvas do corpo
            </p>
          ),
        },
        security: {
          lateralHandling: <TableCheck checked colorSpark />,
          antidriftingTissue: <TableCheck checked colorSpark />,
          materialDetails:
            'Tecido com trama fechada para maior durabilidade e proteção contra o atrito',
        },
        benefits: {
          oneHundredDays: <TableCheck checked colorSpark />,
          tenYearsWarranty: <TableCheck checked colorSpark />,
          freeShipping: <TableCheck checked colorSpark />,
          scheduledDelivery: 'Opcional',
        },
      },
      coral: {
        id: 'coral',
        height: '25 cm',
        touchAndSensation: {
          touch: 'Suave e macio',
          tissueTexture: (
            <Image
              src={isMobile ? TextureCoralMobile : TextureCoral}
              width={isMobile ? 123 : 267}
              height={isMobile ? 79 : 172}
            />
          ),
          freshness: (
            <Image
              src={IconFrescor}
              width={isMobile ? 44 : 69}
              height={isMobile ? 44 : 69}
            />
          ),
          tissueCharacteristics: (
            <div>
              <h3>Soft & Chill</h3>
              <br />
              <p>
                • Tecido premium de origem americana
                <br />
                • Altamente respirável
                <br />• Previne aquecimento do corpo
              </p>
            </div>
          ),
        },
        comfortLayer: {
          resilienceAndProgressiveSupport: <TableCheck checked />,
          antimicrobianaProperties: <TableCheck checked />,
          umidityDispersion: (
            <>
              <Image
                src={IconDispersaoUmidade}
                width={isMobile ? 36 : 62}
                height={isMobile ? 36 : 62}
              />
              <Image
                src={IconDispersaoUmidade}
                width={isMobile ? 36 : 62}
                height={isMobile ? 36 : 62}
              />
            </>
          ),
          bodyWeightDistribution: <TableCheck checked />,
          bounce: (
            <>
              <Image
                src={BounceModerado}
                width={isMobile ? 83 : 144}
                height={isMobile ? 41 : 71}
              />
              <p>Moderado</p>
            </>
          ),
          airflow: (
            <>
              <Image
                src={IconAir}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
              <Image
                src={IconAir}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
            </>
          ),
          certifications: (
            <Image src={Certifications} width={314} height={89} />
          ),
          materialDetails: (
            <div>
              <h3>Latex Classic</h3>
              <br />
              <p>
                • Látex nobre e sofisticado
                <br /> • Resiliência e suporte progressivo
                <br /> • Pequenas perfurações potencializam a circulação de ar
                <br /> • Propriedades antimicrobianas e resistência a ácaros
              </p>
            </div>
          ),
        },
        cozinessLayer: {
          bodyCurvatureAdaptability: <TableCheck checked />,
          moveWavesAbsortion: <TableCheck checked />,
          pressurePointsReleaf: <TableCheck checked />,
          coolingGel: <TableCheck checked />,
          materialDetails: (
            <div>
              <h3>Visco Fresh</h3>
              <br />
              <p>
                • Absorve e distribui o peso
                <br /> • Alivia pontos de pressão
                <br /> • Transferência mínima de movimento
              </p>
            </div>
          ),
        },
        supportSystem: {
          mainMaterial: '16cm de poliuretano de alta densidade e durabilidade',
          transitionLayer: <TableCheck />,
          ergonomicZoning: <TableCheck />,
          supportSensation: 'estável e uniforme',
          internalAirflow: (
            <Image
              src={IconUmidade}
              width={isMobile ? 36 : 63}
              height={isMobile ? 36 : 63}
            />
          ),
          supportedWeight: '150kg',
          materialDetails: (
            <p>
              • Espuma de poliuretano de alta densidade
              <br /> • Suporte uniforme com reforço do isolamento de movimento
            </p>
          ),
        },
        security: {
          lateralHandling: <TableCheck checked />,
          antidriftingTissue: <TableCheck checked />,
          materialDetails:
            'Tecido com trama fechada para maior durabilidade e proteção contra o atrito',
        },
        benefits: {
          oneHundredDays: <TableCheck checked />,
          tenYearsWarranty: <TableCheck checked />,
          freeShipping: <TableCheck checked />,
          scheduledDelivery: 'Opcional',
        },
      },
      coralHybrid: {
        id: 'coralHybrid',
        height: '30 cm',
        touchAndSensation: {
          touch: 'Suave e macio',
          tissueTexture: (
            <Image
              src={isMobile ? TextureCoralHybridMobile : TextureCoralHybrid}
              width={isMobile ? 123 : 267}
              height={isMobile ? 79 : 172}
            />
          ),
          freshness: (
            <Image
              src={IconFrescor}
              width={isMobile ? 44 : 69}
              height={isMobile ? 44 : 69}
            />
          ),
          tissueCharacteristics: (
            <div>
              <h3>Soft & Chill</h3>
              <br />
              <p>
                • Tecido premium de origem americana
                <br />
                • Altamente respirável
                <br />• Previne aquecimento do corpo
              </p>
            </div>
          ),
        },
        comfortLayer: {
          resilienceAndProgressiveSupport: <TableCheck checked />,
          antimicrobianaProperties: <TableCheck checked />,
          umidityDispersion: (
            <>
              <Image
                src={IconDispersaoUmidade}
                width={isMobile ? 36 : 62}
                height={isMobile ? 36 : 62}
              />
              <Image
                src={IconDispersaoUmidade}
                width={isMobile ? 36 : 62}
                height={isMobile ? 36 : 62}
              />
            </>
          ),
          bodyWeightDistribution: <TableCheck checked />,
          bounce: (
            <>
              <Image
                src={BounceModerado}
                width={isMobile ? 83 : 144}
                height={isMobile ? 41 : 71}
              />
              <p>Moderado</p>
            </>
          ),
          airflow: (
            <>
              <Image
                src={IconAir}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
              <Image
                src={IconAir}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
            </>
          ),
          certifications: (
            <Image src={Certifications} width={314} height={89} />
          ),
          materialDetails: (
            <div>
              <h3>Latex Classic</h3>
              <br />
              <p>
                • Látex nobre e sofisticado
                <br /> • Resiliência e suporte progressivo
                <br /> • Pequenas perfurações potencializam a circulação de ar
                <br /> • Propriedades antimicrobianas e resistência a ácaros
              </p>
            </div>
          ),
        },
        cozinessLayer: {
          bodyCurvatureAdaptability: <TableCheck checked />,
          moveWavesAbsortion: <TableCheck checked />,
          pressurePointsReleaf: <TableCheck checked />,
          coolingGel: <TableCheck checked />,
          materialDetails: (
            <div>
              <h3>Visco Fresh</h3>
              <br />
              <p>
                • Absorve e distribui o peso
                <br /> • Alivia pontos de pressão
                <br /> • Transferência mínima de movimento
                <br /> • Gel de cooling para maior frescor
              </p>
            </div>
          ),
        },
        supportSystem: {
          mainMaterial:
            '15cm molas Leggett & Platt ensacadas individualmente, com reforço na sustentação das bordas',
          transitionLayer: <TableCheck checked />,
          ergonomicZoning: <TableCheck />,
          supportSensation: 'bounce com adaptação ao corpo',
          internalAirflow: (
            <>
              <Image
                src={IconUmidade}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
              <Image
                src={IconUmidade}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
              <Image
                src={IconUmidade}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
            </>
          ),
          supportedWeight: '170kg',
          materialDetails: (
            <p>
              • Sistema de suporte de 15cm com espuma e molas Leggett & Platt
              <br /> • Molas ensacadas individualmente para maior maleabilidade
              e adaptação às curvas do corpo
            </p>
          ),
        },
        security: {
          lateralHandling: <TableCheck checked />,
          antidriftingTissue: <TableCheck checked />,
          materialDetails:
            'Tecido com trama fechada para maior durabilidade e proteção contra o atrito',
        },
        benefits: {
          oneHundredDays: <TableCheck checked />,
          tenYearsWarranty: <TableCheck checked />,
          freeShipping: <TableCheck checked />,
          scheduledDelivery: 'Opcional',
        },
      },
      blue: {
        id: 'blue',
        height: '32 cm',
        touchAndSensation: {
          touch: 'Plush e acetinado',
          tissueTexture: (
            <Image
              src={isMobile ? TextureBlueMobile : TextureBlue}
              width={isMobile ? 123 : 267}
              height={isMobile ? 79 : 172}
            />
          ),
          freshness: (
            <>
              <Image
                src={IconFrescor}
                width={isMobile ? 44 : 69}
                height={isMobile ? 44 : 69}
              />
              <Image
                src={IconFrescor}
                width={isMobile ? 44 : 69}
                height={isMobile ? 44 : 69}
              />
              <Image
                src={IconFrescor}
                width={isMobile ? 44 : 69}
                height={isMobile ? 44 : 69}
              />
            </>
          ),
          tissueCharacteristics: (
            <div>
              <h3>Plush & Cool</h3>
              <br />
              <p>
                • Tecido matelassado de origem americana, com superfície
                acolchoada e maciez extra
                <br />• Tecnologia Ultra Cooling, que potencializa a
                condutividade térmica. criando o micro-clima ideal para o sono
              </p>
            </div>
          ),
        },
        comfortLayer: {
          resilienceAndProgressiveSupport: <TableCheck checked colorBlue />,
          antimicrobianaProperties: <TableCheck checked colorBlue />,
          umidityDispersion: (
            <>
              <Image
                src={IconDispersaoUmidade}
                width={isMobile ? 36 : 62}
                height={isMobile ? 36 : 62}
              />
              <Image
                src={IconDispersaoUmidade}
                width={isMobile ? 36 : 62}
                height={isMobile ? 36 : 62}
              />
              <Image
                src={IconDispersaoUmidade}
                width={isMobile ? 36 : 62}
                height={isMobile ? 36 : 62}
              />
            </>
          ),
          bodyWeightDistribution: <TableCheck checked colorBlue />,
          bounce: (
            <>
              <Image
                src={BounceExtra}
                width={isMobile ? 83 : 144}
                height={isMobile ? 57 : 99}
              />
              <p>Extra</p>
            </>
          ),
          airflow: (
            <>
              <Image
                src={IconAir}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
              <Image
                src={IconAir}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
              <Image
                src={IconAir}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
            </>
          ),
          certifications: (
            <Image src={Certifications} width={314} height={89} />
          ),
          materialDetails: (
            <div>
              <h3>Latex Pulse</h3>
              <br />
              <p>
                • Verdadeiramente único como camada de conforto
                <br /> • Estrutura celular homogênea, que promove excelente
                capacidade de conservação de suas propriedades
                <br /> • Excelentes propriedades de ventilação, para microclima
                equilibrado e controle de umidade
                <br /> • Maior elasticidade, facilitando a movimentação na cama
                durante o sono
              </p>
            </div>
          ),
        },
        cozinessLayer: {
          bodyCurvatureAdaptability: <TableCheck checked colorBlue />,
          moveWavesAbsortion: <TableCheck checked colorBlue />,
          pressurePointsReleaf: <TableCheck checked colorBlue />,
          coolingGel: <TableCheck checked colorBlue />,
          materialDetails: (
            <div>
              <h3>Visco Fresh</h3>
              <br />
              <p>
                • Absorve e distribui o peso
                <br /> • Alivia pontos de pressão
                <br /> • Transferência mínima de movimento
                <br /> • Gel de cooling para maior frescor
              </p>
            </div>
          ),
        },
        supportSystem: {
          mainMaterial:
            '15cm molas Leggett & Platt ensacadas individualmente, com reforço na sustentação das bordas e zoneamento ergonômico',
          transitionLayer: <TableCheck checked colorBlue />,
          ergonomicZoning: <TableCheck checked colorBlue />,
          supportSensation: 'bounce com adaptação ao corpo',
          internalAirflow: (
            <>
              <Image
                src={IconUmidade}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
              <Image
                src={IconUmidade}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
              <Image
                src={IconUmidade}
                width={isMobile ? 36 : 63}
                height={isMobile ? 36 : 63}
              />
            </>
          ),
          supportedWeight: '170kg',
          materialDetails: (
            <p>
              • Sistema de suporte de 15cm com espuma e molas Leggett & Platt
              <br /> • Molas com zoneamneto ergonômico, que proporcionam melhor
              alinhamento da coluna
              <br /> • Molas ensacaddas individualmente para maior maleabilidade
              e adaptabilidade às curvas do corpo
              <br /> • Camada de transição de espuma de poliuretano de alta
              densidade uniformiza a distribuição de peso
            </p>
          ),
        },
        security: {
          lateralHandling: <TableCheck checked colorBlue />,
          antidriftingTissue: <TableCheck checked colorBlue />,
          materialDetails:
            'Tecido com trama fechada para maior durabilidade e proteção contra o atrito',
        },
        benefits: {
          oneHundredDays: <TableCheck checked colorBlue />,
          tenYearsWarranty: <TableCheck checked colorBlue />,
          freeShipping: <TableCheck checked colorBlue />,
          scheduledDelivery: 'Gratuita',
        },
      },
    }),
    [isMobile],
  );

  const [firstProduct, setFirstProduct] = useState(productData.spark);
  const [secondProduct, setSecondProduct] = useState(productData.coral);
  const [thirdProduct, setThirdProduct] = useState(productData.blue);

  const products = useMemo(() => {
    const result = [
      {...firstProduct, productIndex: 0},
      {...secondProduct, productIndex: 1},
    ];

    !isMobile && result.push({...thirdProduct, productIndex: 2});

    return result;
  }, [firstProduct, secondProduct, thirdProduct, isMobile]);

  const setProducts = useMemo(
    () => [setFirstProduct, setSecondProduct, setThirdProduct],
    [setFirstProduct, setSecondProduct, setThirdProduct],
  );

  return (
    <ComparativeContext.Provider
      value={{
        firstProduct,
        setFirstProduct,
        secondProduct,
        setSecondProduct,
        thirdProduct,
        setThirdProduct,
        products,
        setProducts,
        productData,
      }}
    >
      {children}
    </ComparativeContext.Provider>
  );
}

export {ComparativeProvider};
export default useComparative;
