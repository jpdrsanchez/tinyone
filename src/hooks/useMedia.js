/* ================================================================
 * Teste 2b Digital - Hook para Media Queries - João Pedro Sanchez
 *
 * Por meio desse Custom Hook podemos controlar o estado da aplicação
 * em questão de se a mesma está em mobile, tablet ou desktop, bem
 * útil para lidar com a aparição e ocultação de itens.
 * 
 * Para criar esse Hook defini 3 estados (mobile, tablet e desktop),
 * após isso há um useEffect inicial aonde ele detecta e seta o estado
 * de acorde com os breakpoints definidos, após isso adicionamos a mesma
 * função em um evento de resize, para que sempre que mudemos a largura
 * da janela os valores dos estados atualizem.
 =================================================================== */

import { useEffect, useState } from 'react';

const useMedia = () => {
  const [mobile, setMobile] = useState(null);
  const [tablet, setTablet] = useState(null);
  const [desktop, setDesktop] = useState(null);

  useEffect(() => {
    const getMedia = () => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        setMobile(true);
        setTablet(false);
        setDesktop(false);
      } else if (
        window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches
      ) {
        setMobile(false);
        setTablet(true);
        setDesktop(false);
      } else {
        setMobile(false);
        setTablet(false);
        setDesktop(true);
      }
    };
    getMedia();
    window.addEventListener('resize', getMedia);

    return () => {
      window.removeEventListener('resize', getMedia);
    };
  }, []);

  return { mobile, tablet, desktop };
};

export default useMedia;
