import React, {useState} from 'react'

import Form from './form'
import Prices from './prices'

import { calls, plans } from "../data/calls";

const Comparator = () => {

  const [origin, setOrigin] = useState()
  const [receiver, setReceiver] = useState()
  const [minutes, setMinutes] = useState(1)
  const [transfer, setTransfer] = useState()
  const [call, setCall] = useState({
    origin: 11,
    receiver: 16
  })

  const compare = calls.find(item => item.origin === call.origin && item.receiver === call.receiver)

  return (<div className="app">
      <Form
        origin={origin}
        setOrigin={setOrigin}
        receiver={receiver}
        setReceiver={setReceiver}
        setMinutes={setMinutes}
        transfer={transfer}
        setTransfer={setTransfer}
        calls={calls}
        plans={plans}
        call={call}
        setCall={setCall}
      />

      <Prices
        origin={origin}
        receiver={receiver}
        minutes={minutes}
        transfer={compare}
        plan={plans[0].value}
      />
    </div>)
}

export default Comparator

