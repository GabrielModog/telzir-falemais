import React from 'react'

import './styles/index.scss'

function App() {
  return (
    <div className="app">
     
      <div className="app__split blue">

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
        

      </div>

      <div className="app__split">

        <div className="app__header">
          <svg width="686" height="233" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path id="svg_2" d="m-1.373173,233.363747l706.88754,-234.743047l-707.583358,0l0.695818,234.743047z" stroke-width="1.5" fill="#3c62c1"/>
            </g>
          </svg>
        </div>

       <div className="app__prices">
         <div className="app__prices__box">
          <div className="app__prices__plan">
            <span>Plano Selecionado:</span>
            <h3 className="bold-weight">FaleMais30</h3>
          </div>
         </div>
         
         <div className="app__prices__box">
          <div className="app__prices__between">
            <h3>sem FaleMais: </h3>
            <h3 className="app__prices__value">$38</h3>
          </div>

          <div className="app__prices__between">
            <h3>com FaleMais: </h3>
            <h3 className="app__prices__value">$0</h3>
          </div>       
         </div>
       </div>

       <div className="app__footer">
         <h1>Telzir</h1>
       </div>
      </div>
    
    </div>
  )
}

export default App
