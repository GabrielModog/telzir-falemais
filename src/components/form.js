import React from 'react';

const Form = ({
  calls,
  plans,
  origin,
  setOrigin,
  receiver,
  setReceiver,
  setPlanValue,
  setMinutes,
}) => (

  <form className="app__split blue">

    <div className="app__title">
      <h1>
        <span className="italic regular-weight">Fale</span>
        Mais
      </h1>
    </div>

    <div className="app__select">
      <h2>Origem</h2>
      <select onChange={(e) => setOrigin(e.target.value)} defaultValue="">
        <option disable value="">Selecione o DDD</option>
        {Object.keys(calls).map((item) => <option value={item} key={item}>{item}</option>)}
      </select>
    </div>
    {origin && (
      <div className="app__select">
        <h2>Destino</h2>
        <select
          onChange={(e) => {
            setReceiver(e.target.value);
          }}
          defaultValue=""
        >
          <option disable value="">Selecione o DDD</option>
          {
            Object.keys(calls[origin]).map(
              (item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ),
            )
          }

        </select>
      </div>
    )}

    {receiver && (
      <>
        <div className="app__select">
          <h2>Minutos</h2>
          <input
            type="number"
            min="1"
            placeholder="1"
            onChange={(e) => setMinutes(e.target.value)}
          />
        </div>

        <div className="app__checkbox">
          {
          plans.map(
            (item) => (
              <div key={item.name}>
                <input type="radio" name="plan" value={item.value} onChange={(e) => setPlanValue(e.target.value)} />
                <span>{item.name}</span>
              </div>
            ),
          )
          }
        </div>
      </>
    )}

  </form>
);


export default Form;
