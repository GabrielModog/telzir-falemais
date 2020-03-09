import React, { useState } from 'react';

import Form from './form';
import Prices from './prices';

import calls from '../data/calls.json';
import plans from '../data/plans.json';

const Comparator = () => {
  const [origin, setOrigin] = useState();
  const [receiver, setReceiver] = useState();
  const [minutes, setMinutes] = useState(1);
  const [planValue, setPlanValue] = useState();
  /* const [transfer, setTransfer] = useState(); */

  return (
    <div className="app">
      <Form
        origin={origin}
        receiver={receiver}
        setOrigin={setOrigin}
        setReceiver={setReceiver}
        setMinutes={setMinutes}
        setPlanValue={setPlanValue}
        calls={calls}
        plans={plans}
      />

      <Prices
        calls={calls}
        origin={origin}
        receiver={receiver}
        minutes={minutes}
        plan={planValue}
      />
    </div>
  );
};

export default Comparator;
