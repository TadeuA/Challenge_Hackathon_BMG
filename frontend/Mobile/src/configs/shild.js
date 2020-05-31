import React from "react";
import shild1 from "../assets/shild1.png";
import shild2 from "../assets/shild2.png";
import shild3 from "../assets/shild3.png";
import shild4 from "../assets/shild4.png";

export default function Shild(number) {
  if (number === 1) return shild1;
  if (number === 2) return shild2;
  if (number === 3) return shild3;
  if (number === 4) return shild4;
}
