import React from "react";
import { useState } from "react";
import { levels, calculateImc } from "../helpers/imc";
import { GridItem } from "./GridItem";
import leftArrowImage from "../assets/leftarrow.png";
import { App, apresentar } from "../App";
import styles from "../assets/app.module.css";
import Message from "../components/alert";

const Main = (props) => {
  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [showItem, setShowItem] = useState();
  const [disableInput, setDisableInput] = useState(false);
  const [show, setShow] = useState(false);

  const handlecalculateImc = () => {
    if (heightField && weightField) {
      setShowItem(calculateImc(heightField, weightField));
      setDisableInput(true);
      setShow(false);
    } else {
      setShow(true);
      setDisableInput(true);
    }
  };

  const handleBackButton = () => {
    setShowItem(null);
    setHeightField(0);
    setWeightField(0);
    setDisableInput(false);
  };

  function messageActive() {
    setShow(false);
    setDisableInput(false);
  }

  return (
    <section className={props.stylesMain}>
      <section className={props.stylesSideLeft}>
        <h1>Calcule o seu IMC</h1>
        <p>
          Criado no século 19 pelo matemático Lambert Quételet, o Índice de
          Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que
          permite medir se alguém está ou não com o peso ideal. Ele aponta se o
          peso está adequado ou se está abaixo ou acima do peso
        </p>
        <form
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="number"
            placeholder="Digite a sua altura Ex.: 1.5 (metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
            disabled={disableInput}
          ></input>
          <br></br>
          <input
            type="number"
            placeholder="Digite o seu peso Ex.: 75.3 (Kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            disabled={disableInput}
          ></input>
          <br></br>
          <button disabled={disableInput} onClick={handlecalculateImc}>
            Calcular
          </button>
        </form>
      </section>
      <section className={props.stylesSideRight}>
        {!showItem && (
          <div className={props.stylesGrid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} />
            ))}
          </div>
        )}
        {showItem && (
          <div className={props.rightBig}>
            <div className={props.rightArrow} onClick={handleBackButton}>
              <img
                src={leftArrowImage}
                alt="Botão para voltar"
                width={35}
              ></img>
            </div>
            <GridItem item={showItem} />
          </div>
        )}
      </section>
      {show && (
        <Message
          funcaobtn={() => messageActive()}
          styleMessage={styles.styleMessage}
        />
      )}
    </section>
  );
};

export default Main;
