import React from 'react'
import mods from '../../utility/mods'

const Loader = ({ label = 'loading', white }) => (
  <figure
    className={mods('cg-loader', { white })}
    role="alert"
    aria-live="assertive"
    aria-label={label}
  >
    <div className="cg-loader__dot" key={1} />
    <div className="cg-loader__dot" key={2} />
    <div className="cg-loader__dot" key={3} />
  </figure>
)

export default Loader
