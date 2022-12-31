import React from "react";
export type level = {
  title: string,
  color: String,
  icon: "down" | "up",
  imc: number[],
  yourImc?: number,
};
export const levels = [
  { title: "Magreza", color: "#96A3AB", icon: "down", imc: [0, 18.5] },
  { title: "Normal", color: "#0EAD69", icon: "up", imc: [18.6, 24.9] },
  { title: "Sobrepeso", color: "#E2B039", icon: "down", imc: [25, 30] },
  { title: "Obesidade", color: "#FF003F", icon: "down", imc: [30.1, 99] },
];

export const calculateImc = (height, weight) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelcopy = { ...levels[i] };
      levelcopy.yourImc = imc;
      return levelcopy;
    }
  }
  return null;
};
