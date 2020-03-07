import React from 'react'

const Form = () => {
  return (
    <form className="app__split blue">

      <div className="app__title">
      <h1><span className="italic regular-weight">Fale</span>Mais</h1>
      </div>
      
      <h2>From</h2>
      <select>
        <option>011</option>
        <option>016</option>
        <option>017</option>
        <option>018</option>
      </select>

      <h2>To</h2>
      <select>
        <option>011</option>
        <option>016</option>
        <option>017</option>
        <option>018</option>
      </select>

      <h2>Minutes</h2>
      <input type="number" min="1" value="1" />

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
}

export default Form
