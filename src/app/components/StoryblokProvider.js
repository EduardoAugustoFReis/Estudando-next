/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import Card from "./Card";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  card: Card,
};
 
 
/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "eu",
  },
});
 
export default function StoryblokProvider({ children }) {
  return children;
}