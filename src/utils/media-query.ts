import { generateMedia, pxToRem } from "styled-media-query";

const ratio = 16;

// copying from https://ionicframework.com/docs/layout/css-utilities#ionic-breakpoints
const breakpoints = pxToRem(
  {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  ratio
);

export default generateMedia(breakpoints);
