import { storyblokEditable, SbBlokData, StoryblokComponent } from "@storyblok/react/rsc";

// Interface comum que estende tanto Blok quanto SbBlokData
interface CommonBlok extends SbBlokData {
  // Adicione aqui quaisquer outras propriedades que sejam necessárias
}

interface GridProps {
  blok: {
    columns: CommonBlok[];
  };
}

const Grid = ({ blok }: GridProps): JSX.Element => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok: CommonBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
