import React from "react";
import { levels } from "../../helpers/imc";
import styles from "./gridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";
type Props = {
  item: levels,
};
export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img
          src={item.icon == "up" ? upImage : downImage}
          alt="Icones do Imc"
          width="30"
        ></img>
      </div>
      <div className={styles.gridTitle}>{item.title}</div>
      {item.yourImc && (
        <div className={styles.yourImc}>
          Seu IMC é de {item.yourImc.toFixed(2)} kg/m²
        </div>
      )}
      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};
