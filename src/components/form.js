import React from 'react'

const Form = ({
  calls, 
  plans, 
  origin, 
  setOrigin, 
  receiver, 
  setReceiver, 
  planValue, 
  setPlanValue, 
  setMinutes,
  call,
  setCall}) => (

  <form className="app__split blue">

    <div className="app__title">
    <h1><span className="italic regular-weight">Fale</span>Mais</h1>
    </div>

    <div className="app__select">
      <h2>Origem</h2>
      <select onChange={(e) => setOrigin(e.target.value)} defaultValue="">
        <option disable value="">Selecione o DDD</option>
        {Object.keys(calls).map(item => <option value={item} key={item}>{item}</option>)}
      </select>
    </div>
    {origin && <div className="app__select">
      <h2>Destino</h2>
      <select 
        onChange={(e) => {
          setReceiver(e.target.value)
          //setCall({...call, origin: origin, receiver: receiver})
          }}
        defaultValue="">
        <option disable value="">Selecione o DDD</option>
        {Object.keys(calls[origin]).map(item => <option value={item} key={item}>{item}</option>)}
      </select>
    </div>}

    {receiver && <>
        <div className="app__select">
          <h2>Minutos</h2>
          <input 
            type="number"
            min="1" placeholder="1"
            onChange={(e) => setMinutes(e.target.value)}
          />
        </div>

        <div className="app__checkbox">
          <div>
            <input type="radio" name="plan" value="1" />
            <span>FaleMais30</span>
          </div>
          <div>
            <input type="radio"  name="plan" value="2" />
            <span>FaleMais60</span>
          </div>
          <div>
            <input type="radio" name="plan" value="3" />
            <span>FaleMais120</span>
          </div>
        </div>
      </>
    }
    
  </form>
)


export default Form
