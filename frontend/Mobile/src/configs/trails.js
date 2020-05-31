import React from "react";

import pig from "../assets/safepig.png";

import invest from "../assets/investiment.png";
import connections from "../assets/connections.png";
import safe from "../assets/safe.png";
import virtualized from "../assets/virtualized.png";
import car from "../assets/car.png";
import spark from "../assets/spark.png";
import superpigsafe from "../assets/superpigsafe.png";
import takemoney from "../assets/takemoney.png";
import umbrela from "../assets/umbrela.png";

export default function trails(trail, number) {
  if (trail === "saver") {
    if (number === 0) return pig;
    if (number === 1) return takemoney;
    if (number === 2) return spark;
    if (number === 3) return umbrela;
    if (number === 4) return car;
    if (number === 5) return superpigsafe;
  }

  if (trail === "investor") {
    if (number === 0) return invest;
  }

  if (trail === "policyholder") {
    if (number === 0) return virtualized;
  }

  if (trail === "policyholderNoOptios") {
    if (number === 0) return connections;
  }
}
