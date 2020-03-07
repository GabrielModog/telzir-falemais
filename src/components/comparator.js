import React, {useState} from 'react'

import Form from './form'
import Prices from './prices'

const Comparator = () => {

  const [origin, setOrigin] = useState()
  const [receiver, setReceiver] = useState()
  const [minutes, setMinutes] = useState()
  const [planValue, setPlanValue] = useState()

  return (<div className="app">
      <Form />
      <Prices />
    </div>)
}

export default Comparator
