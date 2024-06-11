import { FC } from 'react';
import { storyblokEditable } from "@storyblok/js";

interface FeatureProps {
  blok: {
    name: string;
  };
}

const Feature: FC<FeatureProps> = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center">
      <h3 className="text-2xl text-[#1d243d] font-bold">
        {blok.name}
      </h3>
    </div>
  );
};

export default Feature;
