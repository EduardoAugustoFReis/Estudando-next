import { FC } from 'react';
import { storyblokEditable } from "@storyblok/react/rsc";
import type { SbBlokData } from "@storyblok/react/rsc";

interface TeaserProps {
  blok: {
    headline: string;
    [key: string]: any; // Adiciona uma assinatura de índice para aceitar outras propriedades
  };
}

const Teaser: FC<TeaserProps> = ({ blok }) => {
  return( 
    <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};
 
export default Teaser;
