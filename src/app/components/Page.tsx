import { FC } from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import type { SbBlokData } from "@storyblok/react/rsc";

interface PageProps {
  blok: {
    body: SbBlokData[];
    [key: string]: any; // Adiciona uma assinatura de índice para aceitar outras propriedades
  };
}

const Page: FC<PageProps> = ({ blok }) => (
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
