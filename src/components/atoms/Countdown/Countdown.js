import React, { useEffect, useState } from 'react'
import './Countdown.scss'

const diff = (a, b) => {
  const distance = a - b

  return [
    { day: Math.floor(distance / (1000 * 60 * 60 * 24)) },
    {
      hour: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    },
    { min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) },
    { sec: Math.floor((distance % (1000 * 60)) / 1000) },
  ]
}

const Countdown = ({
  endTime = new Date().toISOString(),
  className = '',
  ...props
}) => {
  const [now, setDate] = useState(Date.now())
  const difference = diff(+new Date(endTime), now)

  useEffect(() => {
    const interval = setInterval(() => setDate(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <figure className={`${className} countdown`} {...props}>
      {difference.map((entry, index) => {
        const label = Object.keys(entry).toString()
        const filterTime = (time) => (time > 0 ? time.padStart(2, '0') : '00')
        const time = filterTime(Object.values(entry).toString())

        return (
          <>
            <span className="countdown__item">
              <span className="countdown__item-time">{time}</span>
              <small className="countdown__item-label">{label}</small>
            </span>
            {index !== difference.length - 1 && (
              <span className="countdown__separator"> : </span>
            )}
          </>
        )
      })}
    </figure>
  )
}

export default Countdown
