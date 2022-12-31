import styles from "./assets/app.module.css";
import Header from "./components/header";
import Main, { condicaoExibir } from "./components/main";
import Message from "./components/alert";
import { useState } from "react";
let cond = false;

export function apresentar(condition) {
  if (condition) {
    alert("true");
    return true;
  } else {
    alert("false");
    return false;
  }
}

function App(props) {
  return (
    <div>
      <Header styleHeader={styles.stylesHeader} />
      <Main
        stylesMain={styles.stylesMain}
        stylesSideLeft={styles.stylesSideLeft}
        stylesSideRight={styles.stylesSideRight}
        stylesGrid={styles.stylesGrid}
        rightBig={styles.rightBig}
        rightArrow={styles.rightArrow}
      />
    </div>
  );
}

export default App;
