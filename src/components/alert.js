import React, { useState } from "react";

export const message = (props) => {
  return (
    <div>
      <section className={props.styleMessage}>
        <h1>Digite todos os campos!</h1>
        <p>
          Por favor, para que nosso sistema consiga calcular seu IMC é
          necessário preencher todos os campos.
        </p>
        <button onClick={props.funcaobtn}>Ok, eu entendi!</button>
      </section>
    </div>
  );
};

export default message;
