import React, { useEffect, useState } from 'react'
import './Countdown.scss'

const diff = (a, b) => {
  const distance = a - b

  return {
    day: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hour: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    sec: Math.floor((distance % (1000 * 60)) / 1000),
  }
}

const Countdown = ({
  endTime = new Date().toISOString(),
  className = '',
  ...props
}) => {
  const [now, setDate] = useState(+new Date())
  const difference = diff(+new Date(endTime), now)

  useEffect(() => {
    const interval = setInterval(() => setDate(+new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <figure className={`${className} countdown`} {...props}>
      {Object.entries(difference).reduce(
        (acc, [key, comp]) => (
          <>
            {acc}
            {acc && <span className="countdown__separator">:</span>}
            <span className="countdown__item">
              <span className="countdown__item-time">
                {`${comp}`.padStart(2, '0')}
              </span>
              <small className="countdown__item-label">{key}</small>
            </span>
          </>
        ),
        '',
      )}
    </figure>
  )
}

export default Countdown
