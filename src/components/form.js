import React from 'react'

const Form = () => (
  <form className="app__split blue">

    <div className="app__title">
    <h1><span className="italic regular-weight">Fale</span>Mais</h1>
    </div>
    
    <div className="app__select">
      <h2>Origem</h2>
      <select >
        <option>011</option>
        <option>016</option>
        <option>017</option>
        <option>018</option>
      </select>
    </div>

    <div className="app__select">
      <h2>Destino</h2>
      <select>
        <option>011</option>
        <option>016</option>
        <option>017</option>
        <option>018</option>
      </select>
    </div>

    <div className="app__select">
      <h2>Minutos</h2>
      <input type="number" min="1" placeholder="1" />
    </div>

    <div className="app__checkbox">
      <div>
        <input type="radio" />
        <span>FaleMais30</span>
      </div>
      <div>
        <input type="radio" />
        <span>FaleMais60</span>
      </div>
      <div>
        <input type="radio" />
        <span>FaleMais120</span>
      </div>
    </div>
    
  </form>
)


export default Form
