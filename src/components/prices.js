import React from "react";

import { calculatePerMinutes, calculateWithPlan } from "../functions";

const Prices = ({ origin, receiver, minutes, calls, plan }) => (
  <div className="app__split">
    <div className="app__header">
      <svg
        style={{ width: "100%", fill: "#3C62C1" }}
        height="233"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <polygon points="0,158.7 0,0 1280,0 " />
        </g>
      </svg>
    </div>

    <div className="app__prices">
      <div className="app__prices__box">
        <div className="app__prices__plan">
          <span>Plano Selecionado:</span>
          {plan ? (
            <h3 className="bold-weight">{`FaleMais${plan}`}</h3>
          ) : (
            <h3 className="bold-weight">Selecione um plano</h3>
          )}
        </div>
      </div>

      <div className="app__prices__box">
        <div className="app__prices__between">
          <h3>sem FaleMais:</h3>
          <h3 className="app__prices__value">
            $
            {origin && receiver
              ? calculatePerMinutes(calls[origin][receiver], minutes)
              : 0}
          </h3>
        </div>

        <div className="app__prices__between">
          <h3>com FaleMais: </h3>
          <h3 className="app__prices__value">
            $
            {origin && receiver
              ? calculateWithPlan(calls[origin][receiver], minutes, plan)
              : 0}
          </h3>
        </div>
      </div>
    </div>

    <div className="app__footer">
      <h1>Telzir</h1>
    </div>
  </div>
);

export default Prices;
