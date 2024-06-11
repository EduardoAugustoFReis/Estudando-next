import { FC } from 'react';
import { storyblokEditable } from "@storyblok/react/rsc";
import style from "./Card.module.css";

interface Blok {
  _uid: string;
  image: {
    filename?: string;
    alt?: string;
  };
  title?: string;
  linkUrl?: {
    url?: string;
  };
  linkText?: string; 
  [key: string]: any; // Adiciona uma assinatura de índice para aceitar outras propriedades
}

interface CardProp {
  blok: Blok;
}

export const Card: FC<CardProp> = ({ blok }) => {
  console.log("Blok:", blok); 

  return (
    <div className={style.card} {...storyblokEditable(blok)}>
      <img src={blok.image?.filename || "/path/to/default-image.jpg"} 
      alt={blok.image?.alt || blok.title ||"Card Image"} 
      />

      <h2>{blok.title || "Default Title"}</h2>

      <a href={blok.linkUrl?.url || "#"}>{blok.linkText || "Default Link Text"}</a>
    </div>
  );
};

export default Card;