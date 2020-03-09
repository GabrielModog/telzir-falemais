import React from 'react';

import { calculatePerMinutes, calculateWithPlan } from '../functions';

const Prices = ({
  origin,
  receiver,
  minutes,
  calls,
  plan,
}) => (
  <div className="app__split">
    <div className="app__header">
      <svg width="686" height="233" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path id="svg_2" d="m-1.373173,233.363747l706.88754,-234.743047l-707.583358,0l0.695818,234.743047z" strokeWidth="1.5" fill="#3c62c1" />
        </g>
      </svg>

    </div>

    <div className="app__prices">
      <div className="app__prices__box">
        <div className="app__prices__plan">
          <span>Plano Selecionado:</span>
          {
            plan ? <h3 className="bold-weight">{`FaleMais${plan}`}</h3> : <h3 className="bold-weight">Selecione um plano</h3>
          }
        </div>
      </div>

      <div className="app__prices__box">

        <div className="app__prices__between">
          <h3>sem FaleMais:</h3>
          <h3 className="app__prices__value">
            $
            {origin && receiver ? calculatePerMinutes(calls[origin][receiver], minutes) : 0}
          </h3>
        </div>

        <div className="app__prices__between">
          <h3>com FaleMais: </h3>
          <h3 className="app__prices__value">
            $
            {
              origin && receiver
                ? calculateWithPlan(calls[origin][receiver], minutes, plan) : 0
            }
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
