import React from "react";
import Card from "../assets/Card.png";
import loan from "../assets/loan.png";
import safeVirtualized from "../assets/safeVirtualized.png";
import CreditFolks from "../assets/CreditFolks.png";
import cashback from "../assets/cashback.png";

export default function Options(options) {
  if (options === "card") return Card;
  if (options === "loan") return loan;
  if (options === "safe") return safeVirtualized;
  if (options === "cred") return CreditFolks;
  if (options === "cash") return cashback;
}
