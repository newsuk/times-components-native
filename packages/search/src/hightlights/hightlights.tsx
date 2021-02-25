import React from "react";
import { Hit } from "../types";
import Highlight from "./hightlight";

export interface HightlightsProps {
  hits: Hit[];
}

const Hightlights: any = ({ hits }: HightlightsProps) => {
  return hits.map((h, index) => {
    return <Highlight key={index} hit={h} attribute="content" />;
  });
};

export default Hightlights;
